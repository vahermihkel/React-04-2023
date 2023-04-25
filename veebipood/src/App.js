// import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import { useState } from 'react';

function App() {

   // if else
  // Firebase serverisse kood üles
  // dünaamiline CSS klass
  // useState kordamine

  // vasakul on muutuja
                  // paremal on funktsioon mis muudab vasakpoolset muutujat

  // const [login, setLogin] = useState();

  // tumesinine - JS function, const, true, false, let, undefined - liigitus, neid me ei vali
              //  HTML liigitus, tag:   div, button, img, input, label
  // tavaline sinine - muutuja JS ja HTML-s, ise oleme nad loonud,   useState vasakul pool
  // helesinine - sissekirjutatud muutujad või omadused
  //              JS    localStorage, sessionStorage, console, JSON
  //              HTML atribuudid - className, alt, src, onClick, type, path, element
  // kollane - funktsioonid nii HTML-s kui JS-s, sulg lõpus kui võtame kasutusele
  // punased/oranžid - jutumärkides väärtused
  // valge HTMLs väljakuvatav tekst
  // lillakad JS-s on sissekirjutatud koodisõna: import, if, else, return
  // {{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}

  // {} - JS: koodiblokk
  //      HTML-s: dünaamika ehk JavaScripti kasutusega
  // [] - useState võrdusmärgist vasakul pool   [MUUTUJA, FUNKTSIOON_MIS_MUUDAB_MUUTUJAT] = useState(_algväärtus_)
  // () - funktsioonide jaoks
  // = - annan väärtust
  // === - kontrollin kas vasak ja parem pool on võrdsed  5-5 === 0    luger.current.value === ""    laigitud === true
  // !== - kontrollib kas EI VÕRDU
  // ! - keerab väärtuseid tagurpidi     !true --> false      !false --> true
  // > - suurem    >=   suurem võrdne    < väiksem    <= väiksem võrdne
  // ; - rea lõpetamiseks, vabatahtlik
  // () => tähistab funktsiooni
  // && - kui on eespool tõde, siis näitab vasakpoolset
  // ?   :   - kui küsimärgist eestpool on tõde, siis tee küsimärgist parem pool, kui väär, 
  //                  siis koolonist parem pool
  // "" vs '' - JavaScriptis erinevust pole, kuid kui tahan kasutada sõna sees jutumärke pean vaatama, 
  //     et nad oleksid erinevad välimistest    " kirjuta välja 'a' täht "     ' kirjuta välja nimi "Mihkel" '

  const [logimiseTekst, uuendaLogimiseTekst] = useState('Log In');
  const [teema, uuendaTeema] = useState("hele-leht");

  const logIn = () => {
    if (logimiseTekst === "Log In") {
      uuendaLogimiseTekst('Log Out'); 
    } else {
      uuendaLogimiseTekst('Log In'); 
    }
  }

  return (
    <div className={teema}>
      <button onClick={() => logIn()}>{logimiseTekst}</button>
      {/* <button>Log Out</button> */}
      {teema === "hele-leht" && <button onClick={() => uuendaTeema("tume-leht")}>Tume leht</button>}
      {teema === "tume-leht" && <button onClick={() => uuendaTeema("hele-leht")}>Hele leht</button>}

      <Link to="/">
        <img className="pilt" src="https://nobecars.com/wp-content/uploads/2022/01/Untitled-2-5-1024x473.png" alt="" />
      </Link>
      
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      {/* telia.ee    <div></div> */}
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
      </Routes>
    </div>
  );
}

export default App;

// ctrl + ä on kommentaar, mis nö kustutab koodi,
//    aga jätab meile alles et hiljem vaadata

// algus ja lõpu tagiga: div, span, button, h1, p, h2, h3, Routes
// isesulguv self-closing: img, input, Route

// KÕIK mis on HTMLs suure tähega ja rohelisega, peab importima
