const { Router } = require('express');

const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');

const routes = Router();

routes.get('/prod', ProductController.index);
routes.get('/prod/:id', ProductController.show);
routes.post('/prod', ProductController.store);
routes.patch('/prod/cat/:id', ProductController.updateCategory);
routes.patch('/prod/:id', ProductController.update);
routes.delete('/prod/:id', ProductController.destroy);

routes.get('/cat', CategoryController.index);
routes.get('/cat/:id', CategoryController.show);
routes.post('/cat', CategoryController.store);
routes.delete('/cat/:id', CategoryController.destroy);

module.exports = routes;
