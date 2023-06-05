import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";
import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";

function AddProduct() {
  const [message, setMessage] = useState("Add new product!");

  const idRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const add = () => {
    if (idRef.current.value === "") {
      setMessage("Product can't add with empty id!");
      return;
    }
    if (nameRef.current.value === "") {
      setMessage("Product can't add with empty name!");
      return;
    }
    if (priceRef.current.value === "") {
      setMessage("Product can't add with empty price!");
      return;
    }
    if (Number(priceRef.current.value) <= 0) {
      setMessage("Product can't add with empty price!");
      return;
    }
    // if (nameRef.current.value === "") {
    //   setMessage("Product can t add with empty name!");
    // } else {
      setMessage("Product add: " + nameRef.current.value);
      productsFromFile.push({
        "id": Number(idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked
      });
      toast.success("New product added!");
      idRef.current.value = "";
      imageRef.current.value = "";
      nameRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      categoryRef.current.value = "";
      activeRef.current.checked = false;
    // }
  };

  const [idUnique, setIdUnique] = useState(true);

  const checkIdUniqueness = () => {
    const index = productsFromFile.findIndex(element => Number(idRef.current.value) === element.id);
    if (index === -1) {
      setIdUnique(true);
      setMessage("");
    } else {
      setIdUnique(false);
      setMessage("Inserted ID is not available!");
    }
  }

  return (
    <div>
      <div>{message}</div>
      <label>New Id</label> <br />
       <input onChange={checkIdUniqueness} ref={idRef}  type="number"  /> <br />
       <label>New Name</label> <br />
       <input ref={nameRef} type="text"  /> <br />
       <label>New Price</label> <br />
       <input ref={priceRef} type="number" /> <br />
       <label>New Description</label> <br />
       <input ref={descriptionRef} type="text"  /> <br />
       <label>New Image</label> <br />
       <input ref={imageRef} type="text" /> <br />
       <label>New Category</label> <br />
       {/* <input ref={categoryRef} type="text"  /> <br /> */}
       <select ref={categoryRef}>
          {categories.map(category => <option key={category.name}>{category.name}</option>)}
       </select> <br />
       <label>Active</label> <br />
       <input ref={activeRef} type="checkbox"  /> <br />
       <Button onClick={add} disabled={idUnique === false}>Add Product</Button>
       <ToastContainer 
       position="bottom-right"
       />
      </div>
  )
}

export default AddProduct
