const ProductController = require('./../controllers/ProductController');

module.exports = (app) => {

  app.get(`/api/product`, ProductController.get);

  app.post(`/api/product`, ProductController.insert)

  app.put(`/api/product/:id`, ProductController.update);

  app.delete(`/api/product/:id`, ProductController.delete)
  
}