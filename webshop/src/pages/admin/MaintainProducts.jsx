import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"; // ../../ <-- läheb 2 kausta üles
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = () => {
    // KOJU: Kustuta toode
    // Testimiseks: mine avalehele ja vaata kas sealt on ka kustunud
    // Refreshiga ilmub tagasi
  }

  return (
    <div>
      {products.map(product => 
          <div key={product.id}>
            <img src={product.image} alt="" />
            <div>{product.id}</div>
            <div>{product.image}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.category}</div>
            <div>{product.active}</div>
            <Button variant="danger">Delete</Button>
            <Button as={Link} to={"/admin/edit-product/" + product.id} variant="warning">Edit</Button>
          </div>
        )}
    </div>
  )
}

export default MaintainProducts