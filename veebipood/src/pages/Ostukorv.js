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

  return (  // sort((a,b) => )
    <div>
      {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div>}
      {ostukorv.map((toode, index) => <div>{toode} <button onClick={() => kustuta(index)}>x</button> </div>)}
      {ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/">Tooteid lisama</Link></div>}
    </div>
  )
}

export default Ostukorv