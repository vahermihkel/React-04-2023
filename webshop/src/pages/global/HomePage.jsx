import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import styles from "../../css/HomePage.module.css";
import config from "../../data/config.json";
import FilterButtons from "../../components/home/FilterButtons";
import SortButtons from "../../components/home/SortButtons";
import Product from "../../components/home/Product";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      });

    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

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

  if (loading === true) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <SortButtons 
        products={products}
        setProducts={setProducts}
      />
      {/* <button onClick={() => filterByCategory("tent")}>{t("Category Tent")}</button>
      <button onClick={() => filterByCategory("camping")}>{t("Category Camping")}</button>
      <button onClick={() => filterByCategory("motors")}>{t("Category Motors")}</button>
      <button onClick={() => filterByCategory("motorcycle")}>
        {t("Category Motorcycle")}
      </button> */}
     <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
     />
      <div>{products.length}</div>
      <div className={styles.products}>
        {products.filter(e => e.active === true).map((product, id) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
