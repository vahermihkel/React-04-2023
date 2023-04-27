import React from 'react'

function Meist() {
  const aadress = localStorage.getItem("aadress");
  const email = localStorage.getItem("email");
  const telefon = localStorage.getItem("telefon");

  return (
    <div>
      <div>Meie aadress: {aadress}</div>
      <div>Meie email: {email}</div>
      <div>Meie telefon: {telefon}</div>
    </div>
  )
}

export default Meist