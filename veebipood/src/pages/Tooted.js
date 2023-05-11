import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisa = (element) => {
    ostukorvFailist.push(element);
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const hindKasvavalt = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const hindKahanevalt = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  const filtreeriB = () => {
    const vastus = tootedFailist.filter(yksToode => yksToode.nimi.startsWith("B"));
    uuendaTooted(vastus);
  }

  const filtreeriN = () => {
    const vastus = tootedFailist.filter(yksToode => yksToode.nimi.startsWith("N"));
    uuendaTooted(vastus);
  }

  const filtreeriT = () => {
    const vastus = tootedFailist.filter(yksToode => yksToode.nimi.startsWith("T"));
    uuendaTooted(vastus);
  }

  const filtreeri = (esitaht) => {
    const vastus = tootedFailist.filter(yksToode => yksToode.nimi.startsWith(esitaht));
    uuendaTooted(vastus);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={hindKasvavalt}>Sorteeri hind kasvavalt</button>
      <button onClick={hindKahanevalt}>Sorteeri hind kahanevalt</button>
      <br />
      <button onClick={filtreeriB}>B</button>
      <button onClick={filtreeriN}>N</button>
      <button onClick={filtreeriT}>T</button>
      <button onClick={() => filtreeri("B")}>B</button>
      <button onClick={() => filtreeri("N")}>N</button>
      <button onClick={() => filtreeri("T")}>T</button>
      {tooted.map((element, index) => 
        <div>
          <Link to={"/toode/" + index}>
            <img className="pilt" src={element.pilt} alt="" />
            {element.nimi} {element.hind} €
          </Link> 
          <button onClick={() => lisa(element)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted