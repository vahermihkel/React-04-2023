import React, { useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");

  // function lisa() {}    täpselt sama mis alumine

  const lisa = () => {
    uuendaSonum("Toode lisatud!");
  }

  return (
    <div>
      <div>{sonum}</div>
      <button onClick={lisa}>Lisa toode</button>
    </div>
  )
}

export default LisaToode