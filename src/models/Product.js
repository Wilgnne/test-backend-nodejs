const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  category: [String],
});

module.exports = model('Product', ProductSchema);
