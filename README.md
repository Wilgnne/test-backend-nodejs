<h1 align="center">Welcome to test-backend-nodejs 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This test is presented to the BackEnd development candidates to evaluate technical knowledge.

## :computer: Technologies used

### **Server** ([NodeJS](https://nodejs.org/en/))

Dependencies

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Dotenv](https://www.npmjs.com/package/dotenv)**
- **[Mongoose](https://mongoosejs.com/)**

Dev Dependencies

- **[Eslint](https://eslint.org/)**
- **[Nodemon](https://nodemon.io/)**

See the archive <kbd>[package.json](./server/package.json)</kbd>

### **Utilities**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- API Test: **[Insomnia](https://insomnia.rest/)**
- DataBase: **[MongoDB](https://www.mongodb.com/)**
- CloudDB: **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**

## Usage

For local use create a ```.env.local``` containing the url for MongoDB Atlas, example:

```bash
MONGO_URI=mongodb+srv://<user>:<password>@<application>.wbnc.mongodb.net/<dbname>?retryWrites=true&w=majority
```


```sh
yarn start
```

## API Routes

### **Product Routes**

- [GET /prod](http://localhost:3333/prod) &rarr; Lists registered products; Use query parameters (title, categoryId) to filter the result;

  ```
  http://localhost:3333/prod?title=Choc&categoryId=5fa95579c9a5fa5199ae7049
  ```

- [GET /prod:id](http://localhost:3333/prod/:id) &rarr; Shows the product data

  ```
  http://localhost:3333/prod/5fa95c81e797bc5a7c968230
  ```

- [POST /prod](http://localhost:3333/prod) &rarr; Register a new product;

  ```json
  {
    "title": "Title of product",
    "description": "Description of product",
    "price": 10.50,
    "categoryId": "5fa9556ac9a5fa5199ae7048" ##see available categories
  }
  ```

- [PATCH /prod/:id](http://localhost:3333/prod/:id) &rarr; Update the product data;

  ```json
  {
    "title": "New title of product",
    "description": "New description of product",
    "price": 10.50
  }
  ```

- [PATCH /prod/cat/:id](http://localhost:3333/prod/cat/:id) &rarr; Update a product category;

  ```json
  {
    "categoryId": "5fa9556ac9a5fa5199ae7048" ##see available categories
  }
  ```

- [DELETE /prod/:id](http://localhost:3333/prod/:id) &rarr; Delete a product;

### **Category Routes**

- [GET /cat](http://localhost:3333/cat) &rarr; Lists registered categories;
- [GET /cat:id](http://localhost:3333/prod/:id) &rarr; Shows the category data

  ```
  http://localhost:3333/cat/5fa9556ac9a5fa5199ae7048
  ```

- [POST /cat](http://localhost:3333/cat) &rarr; Register a new category;

  ```json
  {
    "title": "Categoty Title"
  }
  ```

- [DELETE /cat/:id](http://localhost:3333/cat/:id) &rarr; Delete a category;

## Author

👤 **Wilgnne Khawan <wilgnne.kba@gmail.com>**

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_