import React, { useState, useEffect } from "react";

// requests
import productService from "./req/loadAll";
import addProductReq from "./req/addProductReq";
import deleteProductReq from "./req/deleteProductReq";
import { Form, Button, Col } from "react-bootstrap";
function App() {
  const [products, setproducts] = useState(null);
  const [name, setname] = useState(null);
  const [desc, setdesc] = useState(null);
  const [Dname, setDname] = useState(null);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  });

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  };

  const renderProduct = (product) => {
    return (
      <li key={product._id} className="list__item product col-3">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  async function addProduct(e) {
    e.preventDefault();
    await addProductReq(name, desc);

    console.log(name, desc);
    await getProducts();
  }

  async function deleteProduct(e) {
    e.preventDefault();
    console.log("Delete function() call with name: ", Dname);
    await deleteProductReq(Dname);
    await getProducts();
  }

  return (
    <div className="text-center App m-5">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <h1 align="center" className="page-header jumbotron">
        MERN based Product Database
      </h1>

      <div className="row pb-5">
        {products && products.length > 0 ? (
          products.map((product) => renderProduct(product))
        ) : (
          <div className="display-4 mx-auto alert alert-danger" role="alert">
            No product found
          </div>
        )}
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Add a new product</h2>
            <Form className="mx-5" onSubmit={addProduct}>
              Name
              <Form.Group onChange={(e) => setname(e.target.value)} as={Col}>
                <Form.Control />
              </Form.Group>
              Description
              <Form.Group onChange={(e) => setdesc(e.target.value)} as={Col}>
                <Form.Control />
              </Form.Group>
              <Button className="btn-block" variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </div>
          <div className="col">
            <h2>Delete a product</h2>
            <Form className="mx-5" onSubmit={deleteProduct}>
              Name
              <Form.Group onChange={(e) => setDname(e.target.value)} as={Col}>
                <Form.Control />
              </Form.Group>
              <Button className="btn-block" variant="primary" type="submit">
                Delete
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
