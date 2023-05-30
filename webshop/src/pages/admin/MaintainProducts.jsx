import React, { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json"; // ../../ <-- läheb 2 kausta üles
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/MaintainProducts.css";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => { // KODUS: TÕSTUTUNDLIKKUS ÄRA KAOTADA
    const result = productsFromFile.filter(element => element.name.includes(searchedRef.current.value));
    setProducts(result);
  }

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <span>{products.length} tk</span>
      <table>
        <thead>
          <tr>
            <th>Pilt</th>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
              <tr key={product.id} className={ product.active === true ? "active" : "inactive" }>
                <td><img className={product.active === true ? "image" : "image-blurred"} src={product.image} alt="" /></td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                <Button onClick={() => deleteProduct(index)} variant="danger">Delete</Button>
                <Button as={Link} to={"/admin/edit-product/" + product.id} variant="warning">Edit</Button>
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default MaintainProducts