# E-Commerce Back-End

## Description

My motivation in developing this project was to create a fundamental structure to help developers understand the architecture of e-commerce sites. This is my first time using Sequelize so I wanted to implement its functionality to generate a dynamic database. This application uses PostgreSQL for the seeds and the javascript runs the routes for each api. I used a working Express.js API and configured it to use Sequelize to interact with a PostgreSQL database. Built using Express.js, Sequelize, and PostgreSQL, this tool provides an efficient experience for customers and administrators. This application is a useful tool for helping developers understand what's involved in developing a back-end for e-commerce sites because of 
the demonstration of the core components and technologies used in the process.

## Installation

Download VSCode.
Download Insomnia.
Download Node.js.
Download Sequelize (npm install).
Download Express.js (npm install).
Download PostgreSQL (npm install pg package).

## Usage

Type 'npm run seeds' in the terminal if you wish to seed data to your database so that you can test your routes. Type 'node server.js' in the terminal to run the server of your port. Download an open source API client to interact with RESTful APIs, as for my case I downloaded Insomnia to run the backend of my application. Next, you want to make sure that your url is correctly typed in your HTTP request. Even though its not necessary, a helpful tool would be to organize the routes you are testing since there will be duplicate routes and it is helpful for developers to know which routes they are testing. 

For further instructions please refer to this link: (https://drive.google.com/file/d/1kHGS1R_lA6s7BqANpLcejo6cEcZ7WOWF/view)


## License

MIT License

Copyright <2024> <Christopher Chhim>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![opensource](https://img.shields.io/badge/generator-open_source-blue)

## Features

API Design and Testing: Allows developers to design, debug, and test APIs by sending requests (GET, POST, PUT, DELETE, etc.) and examining the responses in real-time. The application returns a descriptive response to help developers understand where in the application they need to debug or to reassure that their route is working as it should.

Request Grouping and Organization: Allows grouping and organizing requests into collections, making it easier to manage and reuse them during development.

Environment Management: Supports creating and managing different environments (like development, staging, and production) to test APIs under various conditions.

## Tests

Choose whichever route you wish to test. Make sure that the appropriate message is being returned and that your input is being accurately reflected on the preview section of the API client. 