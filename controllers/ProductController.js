const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = {
  get: async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  },
  insert: async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  },
  update: async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  },
  delete: async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  },
}