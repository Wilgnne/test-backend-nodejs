const { Router } = require('express');

const ProductController = require('./controllers/ProductController');
const routes = Router();

routes.get('/prod', ProductController.index);
routes.post('/prod', ProductController.store);
routes.patch('/prod/cat/:id', ProductController.updateCategory);
routes.patch('/prod/:id', ProductController.update);
routes.delete('/prod/:id', ProductController.destroy);
module.exports = routes;
