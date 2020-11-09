const Category = require('../models/Category');

// index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    const category = await Category.find();

    return response.json(category);
  },

  async show(request, response) {
    const { id } = request.params;

    const category = await Category.findOne({ _id: id });

    return response.json(category);
  },

  async store(request, response) {
    const {
      title,
    } = request.body;

    const category = await Category.create({
      title,
    });

    return response.json(category);
  },

  async destroy(request, response) {
    const { id } = request.params;

    const deleted = await Category.deleteOne({ _id: id });

    return response.json(deleted);
  },

};
