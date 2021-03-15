import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/productService';
import addProductReq from './req/addProductReq'
import deleteProductReq from './req/deleteProductReq'

function App() {
  const [products, setproducts] = useState(null);
  const [name, setname] = useState(null);
  const [desc, setdesc] = useState(null);
  const [Dname, setDname] = useState(null);

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  async function addProduct(e){
    e.preventDefault();
    await addProductReq(name, desc);
    console.log(name, desc);
  }
  
  async function deleteProduct(e){
    e.preventDefault();
    console.log("Delete function() call with name: ", Dname);
    await deleteProductReq(Dname);
  }

  

  return (
    <div className="App">
      <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>

      <form onSubmit={addProduct}>
        <h2>Add a new product</h2>
        <label>Name: <input onChange={e=>setname(e.target.value)} type="text" name="name"/></label>
        <br />
        <label>Description: <input onChange={e=>setdesc(e.target.value)} type="text" name="desc"/></label>
        <br />
        <input type="submit" value="Submit"/>
      </form>

      <form onSubmit={deleteProduct}>
        <h2>Delete an existing product</h2>
        <br />
        <label>Name: <input onChange={e=>setDname(e.target.value)} type="text" name="desc"/></label>
        <br />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
