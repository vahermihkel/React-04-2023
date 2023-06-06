import React, { useEffect, useRef, useState } from 'react'
// import productsFromFile from "../../data/products.json"; // ../../ <-- läheb 2 kausta üles
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/MaintainProducts.css";
import config from "../../data/config.json";

function MaintainProducts() {
  const [products, setProducts] = useState([]); // kõikuv suurus --> kord on 3 toodet, kord on 60 toodet, 244 toodet, 10 toodet
  const [dbProducts, setDbProducts] = useState([]); // SIIN ON ALATI SAMA PALJU KUI ANDMEBAASIS
  const searchedRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []); // siia pannakse 244 toodet
        setDbProducts(json || []); // siia pannakse 244 toodet
        setLoading(false);
      });
  }, []);

  const deleteProduct = (product) => {
    const index = dbProducts.findIndex(element => element.id === product.id);
    dbProducts.splice(index,1);
    setDbProducts(dbProducts.slice()); // 244 ---> 243    andmebaasitoodete uuendus mida ma siin lehel kasutan
    //setProducts(dbProducts.slice()); // visuaali uuendus    10 ---> 243   visuaali uuendus mida kasutaja näeb
    searchFromProducts();
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)});
  }

  const searchFromProducts = () => { // KODUS: TÕSTUTUNDLIKKUS ÄRA KAOTADA
          // 244tk ---> 4
    const result = dbProducts.filter(element => element.name.includes(searchedRef.current.value));
    setProducts(result);
  }

  if (loading === true) {
    return <div>Loading...</div>
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
                <Button onClick={() => deleteProduct(product)} variant="danger">Delete</Button>
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