import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json"
import { Button } from 'react-bootstrap';
import config from "../../data/config.json";

function EditProduct() {
  const { id } = useParams(); // "35422021"
  const [products, setProducts] = useState([]);

  // const leitud = tootedFailist[index];         35422021  === "35422021"
  const found = products.find(product => product.id === Number(id)); // tuleb üks toode
  // const tulem = tootedFailist.filter(toode => toode.id === id); tuleb []
  const index = products.findIndex(product => product.id === Number(id));
  
  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState(true);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const changeProduct = () => {
    if (idRef.current.value === "") {
      return;
    }
    if (nameRef.current.value === "") {
      return;
    }
    if (priceRef.current.value === "") {
      return;
    }
    if (Number(priceRef.current.value) <= 0) {
      return;
    }
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "image": imageRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked,
    }
    products[index] = updatedProduct;
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(products)})
      .then(() => navigate("/admin/maintain-products"));
  }

  const checkIdUniqueness = () => {
    // const result = productsFromFile.filter(element => element.id === Number(idRef.current.value));
    // if (result.length === 0) {
    //   setIdUnique(true);
    // } else {
    //   setIdUnique(false);
    // }

    // const found = productsFromFile.find(element => element.id === Number(idRef.current.value));
    // if (found === undefined) {
    //   setIdUnique(true);
    // } else {
    //   setIdUnique(false);
    // }

    if (idRef.current.value === id) {
      setIdUnique(true);
      return;
    }

    const index = products.findIndex(element => element.id === Number(idRef.current.value));
    if (index === -1) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }

  }

  if (loading === true) {
    return <div>Loading...</div>
  }

  // kui .find() ei leia, siis tagastatakse "undefined" 
  return (
    <div>
      {found !== undefined && 
      <div>
        {idUnique === false && <div>Inserted ID is not unique!</div>}
        <label>Id</label> <br />
        <input onChange={checkIdUniqueness} ref={idRef} type="number" defaultValue={found.id} /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} type="text" defaultValue={found.name} /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
        <label>Category</label> <br />
        {/* <input ref={categoryRef} type="text" defaultValue={found.category} /> <br /> */}
        <select ref={categoryRef} defaultValue={found.category}>
            {categories.map(category => <option key={category.name}>{category.name}</option>)}
        </select> <br />
        <label>Active</label> <br />
        <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
        <Button disabled={idUnique === false} onClick={changeProduct}>Change</Button>
      </div>}
      {found === undefined && <div>Product not found!</div>}
    </div>
  )
}

export default EditProduct