import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"; // ../../ <-- läheb 2 kausta üles
import "../../css/HomePage.css"

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = () => {
    // Lisage ostukorvi:
    // * Tehke uus fail, nt cart.json
    // * Lisage sinna sisse

    // NING TEHKE VALMIS KA Cart.jsx fail nagu tehtud eesti keelses
  }

  return (
    <div>
      {/* sorteerimine:
        sortAZ
        sortZA
        sortPriceAsc
        sortPriceDesc
        ----------------------
        filtreerimine:
        filterByCategoryTent
        filterByCategoryCamping
        filterByCategoryMotors
        filterByCategoryMotorcycle
      */}
      <div className="products">
        {products.map(product => 
            <div key={product.id} className="product">
              <img src={product.image} alt="" />
              <div className="name">{product.name}</div>
              <div>{product.price}</div>
              <button>Add to cart</button>
            </div>
          )}
      </div>
    </div>
  )
}

export default HomePage