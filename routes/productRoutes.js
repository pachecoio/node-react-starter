const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {
  // use http://localhost:5000/api/status to get the status of server
  app.get(`/api/status`, async (req, res) => {
    return res.status(200).send([{"status": "OK"}]);
  });

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });

  app.post(`/api/product/add`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  app.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.post(`/api/product/remove`, async(req, res)=>{
    let l = await Product.remove({name: req.body.name})
    console.log(req.body.name);
    return res.status(202).send({
      error: false,
      l
    });
  });
};