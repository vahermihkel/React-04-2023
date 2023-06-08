import React from 'react'

function FilterButtons(props) {
  
  const filterByCategory = (categoryClicked) => {
    // HILJEM MUUTMA ---> products
    // products 240 toodet  ---> filterdatakse kõik mootorrattad (61 tk jääb alles)
    // products 61 toodet (kõik on mootorrattad) --> filterdatakse kõik telgid (0 jääb alles)
    const result = props.dbProducts.filter((product) =>
      product.category.includes(categoryClicked)
    );
    props.setProducts(result);
  };

  return (
    <div>
       {props.categories.map(category => 
        <button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}
        </button>
      )}
    </div>
  )
}

export default FilterButtons