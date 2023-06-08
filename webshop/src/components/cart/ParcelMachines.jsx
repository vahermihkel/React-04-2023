import React, { useEffect, useRef, useState } from "react";

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]); // 5, 10, 100, 15, 90, 40
  const [dbParcelMachines, setDbParcelMachines] = useState([]); // 1209
  const searchedRef = useRef();

  // uef
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json") // 0.5sekundit aega
      .then(res => res.json())
      .then(json => {
        setParcelMachines(json || []);
        setDbParcelMachines(json || []);
      })
  }, []);

  const searchFromPMs = () => {
    const result = dbParcelMachines.filter(pm => 
      pm.NAME.toLowerCase().replace("õ", "o")
        .includes(searchedRef.current.value.toLowerCase().replace("õ", "o")));
    setParcelMachines(result);
  }

  return (
    <div>
      <input type="text" ref={searchedRef} onChange={searchFromPMs}  />
      <select>
        {parcelMachines
          .filter(pm => pm.ZIP !== "96331")
          .filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
    </div>
  )
}

export default ParcelMachines