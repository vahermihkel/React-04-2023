import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const tagasi = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.localeCompare(b)); // SAAB TEHA KA DEFAULTI
    uuendaPoed(poed.slice()); // [].slice() koopia tegemiseks -> mälukoha kustutamiseks
    // uuendaPoed([...poed]);  [...[]] koopia tegemiseks -> mälukoha kustutamiseks
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a));
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKasv = () => {
    poed.sort((a,b) => a.length - b.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.length - a.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTahtAZ = () => {              // 012
    poed.sort((a,b) => a[2].localeCompare(b[2]) );  // Ülemiste
    uuendaPoed(poed.slice());
  }

  // const filtreeri = () => {
  //       // ["Nobe", "Tesla"]       ["Nobe", "Tesla", "BMW"]      
  //   const vastus = poed.filter(yksPood => ); 
  //   uuendaPoed(vastus);
  // }

  // suurem/võrdne kui 7 tähte

  // võrdne 9 tähega

  const filtreeriSisaldabIsLyhendit = () => {
    const vastus = poed.filter(yksPood => yksPood.includes("is")); 
    uuendaPoed(vastus);
  }

  const filtreeriKolmasTahtI = () => {
    const vastus = poed.filter(yksPood => yksPood[2] === "i"); 
    uuendaPoed(vastus);
  }

  const filtreeriL6pebEga = () => {
    const vastus = poed.filter(yksPood => yksPood.endsWith("e")); 
    uuendaPoed(vastus);
  }

  // iga kord peab refreshi tegema kui teete ära
  const kustuta = (jrknr) => {
    poed.splice(jrknr, 1);
    uuendaPoed(poed.slice());
  }

  return (
    <div>
      <br />
      <button onClick={tagasi}>Reseti filtrid</button>
      <div>Poode on: {poed.length} tk</div>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      <br /><br />
      <button onClick={filtreeriSisaldabIsLyhendit}>Jäta alles kellel on sõnas 'is'</button>
      <button onClick={filtreeriKolmasTahtI}>Jäta alles kellel on kolmas täht 'i'</button>
      <button onClick={filtreeriL6pebEga}>Jäta alles kes lõpeb 'e'ga</button>
      {poed.map((yksPood, jrknr) => <div>{yksPood} <button onClick={() => kustuta(jrknr)}>x</button> </div>)}
    </div>
  )
}

export default Poed