const Product = require("./../models/Product");
const ProductService = require("./../services/ProductService");
const productService = new ProductService();

class ProductController {
  async get(req, res) {
    return res.status(200).send(await productService.get());
  }
  async insert(req, res) {
    let product = await productService.insert(req.body);
    if (product.error) return res.status(product.statusCode).send(product);
    return res.status(201).send(product);
  }
  async update(req, res) {
    const { id } = req.params;

    let product = await productService.update(id, req.body);

    return res.status(202).send({
      error: false,
      product
    });
  }
  async delete(req, res) {
    const { id } = req.params;

    let product = await productService.delete(id);

    return res.status(202).send(product);
  }
}

module.exports = new ProductController();
