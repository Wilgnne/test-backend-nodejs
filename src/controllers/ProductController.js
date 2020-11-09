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
      category,
    } = request.body;

    let product = await Product.findOne({ title });

    if (!product) {
      product = await Product.create({
        title,
        description,
        price,
        category,
      });
    }

    return response.json(product);
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      description,
      price,
      category,
    } = request.body;

    const product = await Product.updateOne({ title: id }, {
      description,
      price,
      category,
    });

    return response.json(product);
  },

  async destroy(request, response) {
    const { id } = request.params;

    const deleted = await Product.deleteOne({ title: id });

    return response.json(deleted);
  },

};
