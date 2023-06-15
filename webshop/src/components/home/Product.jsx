import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../../css/HomePage.module.css";
import { toast } from "react-toastify";
import { CartSumContext } from '../../store/CartSumContext';
import { Button } from '@mui/material';

            //    props
function Product({product}) {

  const { t } = useTranslation();
  const { setCartSum } = useContext(CartSumContext);

  const add = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) { 
      cartLS[index].quantity = cartLS[index].quantity + 1;
    } else {
      cartLS.push({"product": productClicked, "quantity": 1});
    }
    localStorage.setItem("cart", JSON.stringify(cartLS) );
    toast.success("Product added!");
    // setCartSum(cartSum + productClicked.price);
    let sum = 0;
    cartLS.forEach((element) => (sum = sum + element.product.price * element.quantity));
    setCartSum(sum);
  };


  return ( // props.product
    <div className={styles.product}>
      <Link to={"/product/" + product.id}>
        <img src={product.image} alt="" />
        <div className={styles.name}>{product.name}</div>
        <div>{product.price} €</div>
      </Link>
      <Button variant="contained" onClick={() => add(product)}>{t("Add to cart")}</Button>
    </div>
  )
}

export default Product