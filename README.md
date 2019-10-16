# Food-Nutrient
[![Netlify Status](https://api.netlify.com/api/v1/badges/d4c0e216-3cf4-4e2b-8939-4579e2a7cfb4/deploy-status)](https://app.netlify.com/sites/frosty-jennings-fd1482/deploys)

This app helps Health concious individuals who often wants to look up the details of food composition (eg. fat, mineral, vitamins and etc..) that they intend to buy before they buying them.

### Features

  1. A user can search a list of grocery products
  2. A user can see a list of grocery products
  3. A user can view a product nutrition facts before they buy them

### Endpoints

  - GET `/food/products/search?query=${value}&apiKey=${key}`
  - GET `/food/products/${id}?&apiKey=${key}`

### Prerequisite

  - [NodeJs](https://nodejs.org/en/download/)
  - Chrome browser

### Project pipeline

  - [Pivotal Tracker stories](https://www.pivotaltracker.com/n/projects/2398431)
  - [Frontend](https://frosty-jennings-fd1482.netlify.com/)

### Technologies

  * [React](https://reactjs.org/docs/getting-started.html) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right ...

  * [Redux](https://redux.js.org/introduction/getting-started) - Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

  * [Webpack](https://webpack.js.org/guides/getting-started/) - is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging ...

  * [Axios](https://github.com/axios/axios) - Axios is a promise-based HTTP client that works both in the browser and in a node.js environment. It basically provides a single API for dealing with XMLHttpRequest s and node's http interface.

### Installation

  1. Open the command window
  2. Clone the repository `https://github.com/Pomile/Food-Nutrient.git`
  3. Change directory into the root project folder
  4. Run `npm install`

### Development
To run the project in a development enviroment

  1. Ensure you have installed the dependencies and devDependencies of the project(by following installation guidlines)
  2. Run `npm run start:dev`

### Contributor
  - Babatunde Ogedengbe
