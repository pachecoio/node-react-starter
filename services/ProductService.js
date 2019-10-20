const mongoose = require("mongoose");
module.exports = class ProductService {

  constructor() {
    this.Product = mongoose.model("products");
  }

  async get () {
    let products = await this.Product.find();
    return products;
  }

  async insert (data) {
    let product = await this.Product.create(data);
    if(product) return {
      error: false,
      product
    };
    return {
      error: true,
      statusCode: 500,
      message: "Not able to create product"
    }
  }

  async update (id, data) {

    let product = await this.Product.findByIdAndUpdate(id, data);

    return product;

  }

  async delete (id) {

    let product = await this.Product.findByIdAndDelete(id);

    return {
      error: false,
      deleted: true,
      product
    };

  }

}