import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(12);
  const [laigitud, uuendaLaigitud] = useState(false); // 0
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

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
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <span>{laigitud + 0}</span>
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>

      <br /><br />

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button onClick={vahenda}>-</button>
  {/* <span className={kogus >= 15 && "kuldne"}>kogus: {kogus} tükki</span> */}
      <span className={kogus >= 15 ? "kuldne" : undefined}>kogus: {kogus} tükki</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}
// ? : on ternary operator ja tegemist on lühendatud if/else kujuga
// if (kogus >=15) {võta kasutusele "kuldne"} else { võta kasutusele tühjus ehk undefined }
//    kogus >= 15 ?        "kuldne"            :       undefined

export default Avaleht

// 25.04   26.04 -- 3ak/h   27.04 
// 25.04   26.04 -- 3ak/h   27.04 