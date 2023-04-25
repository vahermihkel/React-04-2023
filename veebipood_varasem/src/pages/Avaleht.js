import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(7);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");
  const [laigitud, uuendaLaigitud] = useState(false);

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
  }

  return (
    <div>
      {laigitud === false && <div>x</div>}
      {laigitud === true && <div>v</div>}
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>
      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button onClick={vahenda}>-</button>
      {kogus}
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht