import React, { useState } from 'react'

function Poed() {
  const [poed, uuendaPoed] = useState(["Ülemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.localeCompare(b)); // SAAB TEHA KA DEFAULTI
    uuendaPoed(poed.slice());
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

  // suurem/võrdne kui 7 tähte

  // võrdne 9 tähega

  const filtreeriSisaldabIsLyhendit = () => {
    const vastus = poed.sort(yksPood => yksPood.includes("is")); 
    uuendaPoed(vastus);
  }

  const filtreeriKolmasTahtI = () => {
    const vastus = poed.sort(yksPood => yksPood[2] === "i"); 
    uuendaPoed(vastus);
  }

  const filtreeriL6pebEga = () => {
    const vastus = poed.sort(yksPood => yksPood.endsWith("e")); 
    uuendaPoed(vastus);
  }

  // iga kord peab refreshi tegema kui teete ära

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      {poed.map(yksPood => <div>{yksPood}</div>)}
    </div>
  )
}

export default Poed