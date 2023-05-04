import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef(); // ref -- loeb inputi seest väärtusi
  // const nimiRef = useRef();
  // const nimiViide = useRef();

  // function lisa() {}

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Toodet ei saa tühja nimega lisada!");
    } else {
      uuendaSonum("Toode lisatud, nimega: " + inputiLuger.current.value);
      // document.getElementById("name").value <-- läheb kõikidest kohtadest otsima
      // useRef <-- vaatab ainult siin failis, siin componendis
      tootedFailist.push(inputiLuger.current.value); // [].push() <--- lisab lõppu juurde selle, mis on sulgude vahel
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode