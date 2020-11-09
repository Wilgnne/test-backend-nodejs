const Product = require('../models/Product');

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

    let product = await Product.findOne({ title });

    if (!product) {
      product = await Product.create({
        title,
        description,
        price,
        categoryId,
      });
    }

    return response.json(product);
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

  async destroy(request, response) {
    const { id } = request.params;

    const deleted = await Product.deleteOne({ _id: id });

    return response.json(deleted);
  },

};
