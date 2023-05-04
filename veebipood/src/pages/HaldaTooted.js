import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      {tooted.map((element, index) => <div>{element} <button onClick={() => kustuta(index)}>x</button></div>)}
    </div>
  )
}

export default HaldaTooted