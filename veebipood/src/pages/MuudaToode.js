import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { jrknr } = useParams();
  const leitud = tootedFailist[jrknr];
  const nimiViide = useRef();
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    const uuendatudToode = {
      "nimi": nimiViide.current.value, 
      "hind": Number(hindViide.current.value), // hindViide.current.value ---> "1231321"    Number("31") -> 31
      "aktiivne": aktiivneViide.current.checked, 
      "pilt": piltViide.current.value
    };
    tootedFailist[jrknr] = uuendatudToode;
    navigate("/halda");
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input type="text" ref={nimiViide} defaultValue={leitud.nimi} /> <br />
      <label>Toote hind</label> <br />
      <input type="number" ref={hindViide} defaultValue={leitud.hind} /> <br />
      <label>Toote pilt</label> <br />
      <input type="text" ref={piltViide} defaultValue={leitud.pilt} /> <br />
      <label>Toote aktiivsus</label> <br />
      <input type="checkbox" ref={aktiivneViide} defaultChecked={leitud.aktiivne} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode