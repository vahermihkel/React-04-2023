import React, { useState } from 'react'

function Meist() {
  const aadress = localStorage.getItem("aadress");
  const email = localStorage.getItem("email");
  const telefon = localStorage.getItem("telefon");
  const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);

  return (
    <div>
      <div>Meie aadress: {aadress}</div>
      <div>Meie email: 
        { n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>Näita e-maili</button> }
        { n2itaEmaili === true && <span> {email}</span>}
      </div>
      <div>Meie telefon: {telefon}</div>
    </div>
  )
}

export default Meist