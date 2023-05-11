import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json";

function YksikToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];
              // ["Nobe", "Tesla", "BMW"][0]

  return (
    <div>
      <img className="pilt" src={leitud.pilt} alt="" />
      <div>Nimetus: {leitud.nimi}</div>
      <div>Hind: {leitud.hind}</div>
      <div>Järjekorranumber: {index}</div>
      <div>Kirjeldus: ...</div>
      <div>Koostisosad: ...</div>
      <div>Omadused: ...</div>
    </div>
  )
}

export default YksikToode