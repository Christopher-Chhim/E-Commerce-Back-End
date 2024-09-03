const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  try {
     // be sure to include its associated Category and Tag data
    const productData = await Product.findAll({include: [{model: Category}, {model: Tag, as: 'tags', through: ProductTag}]});
    res.json(productData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    // find a single product by its `id`
    const productData = await Product.findByPk(req.params.id, {
      // be sure to include its associated Category and Tag data
      include: [{ model: Category}, {model: Tag, as: 'tags', through: ProductTag}]
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
 try{
  const product = await Product.create(req.body);
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds && req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => ({
            product_id: product.id,
            tag_id,
        }));
        await ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    } catch(err) {
      console.log(err);
      res.status(400).json({ error: 'An error occurred while creating the product.', details: err });
  }
});

// update product
router.put('/:id', (req, res) => {
  // Update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        // Find all existing product tags
        return ProductTag.findAll({
          where: { product_id: req.params.id },
        });
      }
      // If no tags to update, resolve immediately
      return [];
    })
    .then((productTags) => {
      if (productTags.length) {
        // Create a filtered list of new tag_ids
        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

        // Determine which tags to remove
        const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);

        // Run both actions (remove old tags, create new tags)
        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      }
      return [];
    })
    .then(() => {
      // Send a success response
      res.status(200).json({ message: 'Product and tags updated successfully!' });
    })
    .catch((err) => {
      // Handle errors
      console.error(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Product successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;