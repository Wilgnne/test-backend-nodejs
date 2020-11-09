const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  categoryId: String,
});

module.exports = model('Product', ProductSchema);
