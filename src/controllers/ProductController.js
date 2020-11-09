const Product = require('../models/Product');
const Category = require('../models/Category');

// index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    const products = await Product.find();

    return response.json(products);
  },

  async store(request, response) {
    const {
      title,
      description,
      price,
      categoryId,
    } = request.body;

    const categoryModel = await Category.findOne({ _id: categoryId });
    if (categoryModel) {
      const product = await Product.create({
        title,
        description,
        price,
        categoryId,
      });

      return response.json(product);
    }

    return response.status(500).send('Bad Request');
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      title,
      description,
      price,
    } = request.body;

    const prevProduct = await Product.findOne({ _id: id });

    const product = await Product.updateOne({ _id: id }, {
      title: title || prevProduct.title,
      description: description || prevProduct.description,
      price: price || prevProduct.price,
    });

    return response.json(product);
  },

  async updateCategory(request, response) {
    console.log('test');
    const { id } = request.params;
    const { categoryId } = request.body;

    const categoryModel = await Category.findOne({ _id: categoryId });
    if (categoryModel) {
      const product = await Product.updateOne({ _id: id }, { categoryId });

      return response.json(product);
    }

    return response.status(500).send('Bad Request');
  },

  async destroy(request, response) {
    const { id } = request.params;

    const deleted = await Product.deleteOne({ _id: id });

    return response.json(deleted);
  },

};
