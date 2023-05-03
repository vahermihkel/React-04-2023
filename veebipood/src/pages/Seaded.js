import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel")); // null    ja   undefined    on tühjused
  const aadressViide = useRef();
  const emailViide = useRef();
  const telefonViide = useRef();

  // https://www.npmjs.com/package/react-toastify
  // if / else
  const salvestaAadress = () => {
// salvestan brauseri vahemällu: VÕTI,    VÄÄRTUS
    if (aadressViide.current.value === "") {
      toast.error("Tühja aadressi ei saa salvestada!");
      return; // funktsioon siit kohast enam edasi ei lähe
    }  // Tammsaare         t                       ===       t  /   T
    if (aadressViide.current.value[0].toLowerCase() ===  aadressViide.current.value[0]) {
      toast.error("Väikse algustähega aadressi ei saa salvestada!");
      return;
    }
    localStorage.setItem("aadress", aadressViide.current.value);
    toast.success("Aadress salvestatud!");
  }

  const salvestaEmail = () => {
    if (emailViide.current.value === "") {
      toast.error("Tühja emaili ei saa salvestada!");
      return;
    } 
    if (emailViide.current.value.includes("@") === false) {
      toast.error("Kontrolli e-maili õigsust!");
      return;
    }
    localStorage.setItem("email", emailViide.current.value);
    toast.success("Email salvestatud!");
  }

  const salvestaTelefon = () => {
    if (telefonViide.current.value === "") {
      toast.error("Tühja telefoni ei saa salvestada!");
      return;
    } 
    if (/^[0-9]*$/.test(telefonViide.current.value) === false) {
      toast.error("Telefoninumber peab koosnema numbritest!");
      return;
    }
    localStorage.setItem("telefon", telefonViide.current.value);
    toast.success("Telefon salvestatud!");
  }

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est");
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  }

  return (
    <div>
      <div>
        <label>Aadress</label>
        <input ref={aadressViide} type="text" />
        <button onClick={salvestaAadress}>Salvesta</button>
        <br /><br />

        <label>Email</label>
        <input ref={emailViide} type="text" />
        <button onClick={salvestaEmail}>Salvesta</button>
        <br /><br />

        <label>Telefon</label>
        <input ref={telefonViide} type="text" />
        <button onClick={salvestaTelefon}>Salvesta</button>
        <br /><br />
      </div>

      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>To English</button>
      <button onClick={muudaKeelRus}>Pycckkuj</button>
      {keel === null && <div>Vali keel!</div>}
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Pycckuj rsõk</div>}
      <ToastContainer 
        position="bottom-right"
      />
    </div>
  )
}

export default Seaded

// Järgmisena:
// https://www.codecademy.com/learn/introduction-to-javascript
// https://www.udacity.com/course/intro-to-javascript--ud803
// Nende kahe puhul palun mitte korraga vaadata ühte algusest lõpuni vaid nii, et teete ühes teema ära ja siis vaatate teises sama teemat. Ise teeksin nii:
// CodeAcademy peatükid 1-2
// Udacity peatükid 1-2
// CodeAcademy peatükk 3
// Udacity peatükk 3
// CodeAcademy peatükk 4,5
// Udacity peatükk 5 (4 jääb vahele!)
// CodeAcademy peatükk 6
// Udacity peatükk 6 <-----
// CodeAcademy peatükk 7 <-----
// Udacity peatükk 4 (!) <-----
// CodeAcademy lõpuni ehk peatükid 8,9,10
// Udacity lõpuni ehk peatükk 7