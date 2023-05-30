import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import cartFromFile from "../../data/cart.json";
// import { t, use } from "i18next";
import { useTranslation } from "react-i18next";
// import omnivaFromFile from "../../data/omniva.json";
import "../../css/Cart.css";

function Cart() {
  // use <--- Reacti hookid
  // useSuperPower() Reacti erikood, mis teeb kõik nende hinnangul selgelt lihtsamaks
  // useTranslation, useState, useRef, useParams, useNavigate, useEffect, useContext
  // use lõpus on alati sulud
  // use peab olema muutujaga ehk võrdusmärk selle ees ja const mingi muutuja nimi
  //        kui on loogelised sulud, siis arv pole piiratud: võib olla 1 või rohkem
  //        kui on kandilised sulud, siis arv on määratletud: ei saa rohkem ega vähem olla
  //        kui kumbagi sulgu pole, siis on täpselt 1 muutuja
  // use ei tohi olla loodud mõne funktsiooni sees või if abil
  // kõik use-d peavad olema importitud

  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);
  const searchedRef = useRef();

  // uef
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json") // 0.5sekundit aega
      .then(res => res.json())
      .then(json => setParcelMachines(json))
  }, []);

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0) {
      removeFromCart(index); // kutsun teise funktsiooni välja
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach((element) => (sum = sum + element.product.price * element.quantity));
    return sum;
  };

  const emptyCart = () => {
    setCart([]); // muudab HTMLi
    localStorage.setItem("cart", JSON.stringify([])); // muudab salvestust
  };

  const searchFromPMs = () => {
    const result = parcelMachines.filter(pm => 
      pm.NAME.toLowerCase().replace("õ", "o")
        .includes(searchedRef.current.value.toLowerCase().replace("õ", "o")));
    setParcelMachines(result);
  }

  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t("empty-cart")}</button>}
      {cart.length === 1 && (
        <div>
          {t("there-is")} 1 {t("item-in-the-cart")}.
        </div>
      )}
      {cart.length >= 2 && (
        <div>
          {t("there-are")} {cart.length} {t("items-in-the-cart")}.
        </div>
      )}
      {cart.map((element, index) => (
        <div className="cart-product" key={index}>
          <img className="image" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} €</div>
          <div className="quantity">
            <img className="button" onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <div>{element.quantity} pcs</div>
            <img className="button" onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className="total">{element.product.price * element.quantity} €</div>
          <img className="button" onClick={() => removeFromCart(index)} src="/remove.png" alt="" />
        </div>
      ))}

      {cart.length > 0 && 
        <div>
          <div>{t("total")}: {calculateCartSum()} €.</div>
          <input type="text" ref={searchedRef} onChange={searchFromPMs}  />
          <select>
            {parcelMachines
              .filter(pm => pm.ZIP !== "96331")
              .filter(pm => pm.A0_NAME === "EE")
              .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
          </select>
        </div>}

      {cart.length === 0 && (
        <div>
          {t("shopping-cart-is-empty")}. <Link to="/">{t("add-products")}</Link>{" "}
          <br /> <img src="images.jpeg" alt="" />
        </div>
      )}
      <br /> <br />
    </div>
  );
}

export default Cart;
