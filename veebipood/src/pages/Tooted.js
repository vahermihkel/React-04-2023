import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisa = (element) => {
    ostukorvFailist.push(element);
  }

  return (
    <div>
      {tooted.map(element => <div>{element} <button onClick={() => lisa(element)}>Lisa ostukorvi</button></div>)}
    </div>
  )
}

export default Tooted