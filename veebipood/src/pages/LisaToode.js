import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef(); // ref -- loeb inputi seest väärtusi
  // const nimiRef = useRef();
  // const nimiViide = useRef();
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();

  // function lisa() {}

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Toodet ei saa tühja nimega lisada!");
    } else {
      uuendaSonum("Toode lisatud, nimega: " + inputiLuger.current.value);
      // document.getElementById("name").value <-- läheb kõikidest kohtadest otsima
      // useRef <-- vaatab ainult siin failis, siin componendis
      //tootedFailist.push(inputiLuger.current.value); // [].push() <--- lisab lõppu juurde selle, mis on sulgude vahel
      // tootedFailist.push("Cats", "Dogs", "Horses"); 
      // tootedFailist.push("Cats");
      // tootedFailist.push("Dogs");
      // tootedFailist.push("Horses");

      const uusToode = {
        "nimi": inputiLuger.current.value, 
        "hind": Number(hindViide.current.value), 
        "aktiivne": aktiivneViide.current.checked, 
        "pilt": piltViide.current.value
      }
      tootedFailist.push(uusToode);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Uue toote hind</label> <br />
      <input ref={hindViide} type="number" /> <br />
      <label>Uue toote pilt</label> <br />
      <input ref={piltViide} type="text" /> <br />
      <label>Uue toote aktiivsus</label> <br />
      <input ref={aktiivneViide} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode