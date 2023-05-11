// rfce

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {                        
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const kustuta = (index) => {
    ostukorvFailist.splice(index,1);               // [].sort()    [].filter()   [].slice()   [].map()    [].splice()
    uuendaOstukorv(ostukorvFailist.slice());
    // uuendaOstukorv([...ostukorv]);
  }

  const arvutaKokku = () => {
    let summa = 0;
    ostukorvFailist.forEach(element => summa = summa + element.hind);
    return summa;
  }

  return (  // sort((a,b) => )
    <div>
      {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div>}
      {ostukorv.map((toode, index) => 
        <div>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <button onClick={() => kustuta(index)}>x</button> 
        </div>)}
      {ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
      <div>Kokku: {arvutaKokku()}</div>
    </div>
  )
}

export default Ostukorv