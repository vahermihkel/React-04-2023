import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
//import productsFromFile from "../../data/products.json"; //../../ läheb 2 kausta üles
// import cartFromFile from "../../data/cart.json";
import "../../css/HomePage.css";
import { useTranslation } from "react-i18next";
import config from "../../data/config.json";

function Homepage() {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setLoading(false);
      });

    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const AZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  };

  const ZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  };

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  // const filterByCategoryTent = () => {
  //   const result = productsFromFile.filter((product) =>
  //     product.category.includes("tent")
  //   );
  //   setProduct(result);
  // };

  // const filterByCategoryCamping = () => {
  //   const result = productsFromFile.filter((product) =>
  //     product.category.includes("camping")
  //   );
  //   setProduct(result);
  // };

  // const filterByCategoryMotors = () => {
  //   const result = productsFromFile.filter((product) =>
  //     product.category.includes("motors")
  //   );
  //   setProduct(result);
  // };

  // const filterByCategoryMotorcycle = () => {
  //   const result = productsFromFile.filter((product) =>
  //     product.category.includes("motorcycle")
  //   );
  //   setProduct(result);
  // };

   const filterByCategory = (categoryClicked) => {
    // HILJEM MUUTMA ---> products
    // products 240 toodet  ---> filterdatakse kõik mootorrattad (61 tk jääb alles)
    // products 61 toodet (kõik on mootorrattad) --> filterdatakse kõik telgid (0 jääb alles)
    const result = products.filter((product) =>
      product.category.includes(categoryClicked)
    );
    setProducts(result);
  };

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
  };

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <button onClick={AZ}>{t("Sort A-Z")}</button>
      <button onClick={ZA}>{t("Sort Z-A")}</button>
      <button onClick={sortPriceAsc}>{t("Price Ascending")}</button>
      <button onClick={sortPriceDesc}>{t("Price Descending")}</button>
      {/* <button onClick={() => filterByCategory("tent")}>{t("Category Tent")}</button>
      <button onClick={() => filterByCategory("camping")}>{t("Category Camping")}</button>
      <button onClick={() => filterByCategory("motors")}>{t("Category Motors")}</button>
      <button onClick={() => filterByCategory("motorcycle")}>
        {t("Category Motorcycle")}
      </button> */}
      {categories.map(category => 
        <button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}
        </button>
      )}
      <div>{products.length}</div>
      <div className="products">
        {products.filter(e => e.active === true).map((product, id) => (
          <div key={product.id} className="product">
            <Link to={"/product/" + product.id}>
              <img src={product.image} alt="" />
              <div className="name">{product.name}</div>
              <div>{product.price} €</div>
            </Link>
            <button onClick={() => add(product)}>{t("Add to cart")}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
