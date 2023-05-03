import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([64, 12, 52, 5, 87, 552, 123, 15]);
  const [kogusumma, uuendaKogusumma] = useState(0);

  const sorteeriKasvavalt = () => {
    //         64  12  => 64-12= pluss   vaheta koht
    //         12  52  => 12-52= miinus  ära vaheta kohta
    hinnad.sort((a, b) => a - b); // siin me ei tee default sorteerimist, seega täidan sulud
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriVaiksemKui100 = () => {
    const vastus = hinnad.filter(el => el < 100); // siin ma ei kirjuta .length, el ise on väiksem kui 100
    uuendaHinnad(vastus);
  }

  const arvutaKoikKokku = () => {
    let summa = 0;
    hinnad.forEach(el => summa = summa + el);
    uuendaKogusumma(summa);
  }

  return (
    <div>
      <div>Kogusumma: {kogusumma} €</div>
      <button onClick={arvutaKoikKokku}>Arvuta</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={filtreeriVaiksemKui100}>Jäta alles väiksemad kui 100</button>
      { hinnad.map(el => <div>{el}</div>) }
    </div>
  )
}

export default Hinnad