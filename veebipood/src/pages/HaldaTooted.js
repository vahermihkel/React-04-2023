import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      {tooted.map((element, index) => 
        <div className={element.aktiivne === true ? "aktiivne" : "mitteaktiivne"}>
          <img className="pilt" src={element.pilt} alt="" />
          <div>{element.nimi}</div>
          <div>{element.hind}</div>
          <div>{element.pilt}</div>
          <div>{element.aktiivne}</div>
          <button onClick={() => kustuta(index)}>x</button>
          <Link to={"/muuda/" + index}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

export default HaldaTooted