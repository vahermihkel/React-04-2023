import React, { useState } from 'react'

// Array, List, Massiiv   ----> elementidest (mis on komaga eristatud)
// "JavaScript Massiiv"
// "Massiiv"

// [].map()   [].slice()    [].sort()   "".toLowerCase()     "".includes()     [].includes()

function Tootajad() {
  const [tootajad, uuendaTootajad] = useState(["Maret Maripuu", "Meeli Miidla-Vanatalu", "Vadim Ivanov", "Kristel Abel", "Kristin Rammus", "Teele Sihtmäe", "Kristina Kukk"]);
  const [kogusumma, uuendaKogusumma] = useState(0); // HTMLi muutmiseks

  const sorteeriAZ = () => {
    tootajad.sort();   // A-Z esitähe järgi
    uuendaTootajad(tootajad.slice());     
  }

  const filtreeriKellelOnRohkemKui12Tahte = () => {
    const vastus = tootajad.filter(e => e.length > 12);  // kui on true, siis jätab alles
    uuendaTootajad(vastus);
  }

  const arvutaKoikTahedKokku = () => {
    let summa = 0;  // const on muutuja, millele ma teist korda ei saa võrdusmärgiga väärtust anda
                    //   let on muutuja, millele ma teist korda saan võrdusmärgiga väärtust anda
    //  [,,]    "Maret"=>   5   =   0   +  5
    //  [,,]    "Meeli"=>  10   =   5   +  5
    //  [,,]    "Vadim"=>  15   =  10   +  5
    //  [,,]  "Kristel"=>  22   =  15   +  7
    tootajad.forEach(e => summa = summa + e.length);
    uuendaKogusumma(summa);
  }

  return (
    <div>
      <div>Kõik tähed kokku: {kogusumma} tk</div>
      <button onClick={arvutaKoikTahedKokku}>Arvuta</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={filtreeriKellelOnRohkemKui12Tahte}>Jäta alles kellel on rohkem kui 12 tähte</button>
      { tootajad.map(e => <div>{e}</div>) }
      {/* <div>Maret Maripuu</div>
      <div>Meeli Miidla-Vanatalu</div>
      <div>Vadim Ivanov</div>
      <div>Kristel Abel</div>
      <div>Kristin Rammus</div>
      <div>Teele Sihtmäe</div>
      <div>Kristina Kukk</div> */}
    </div>
  )
}

export default Tootajad