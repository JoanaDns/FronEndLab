import React, { useState } from 'react'

function Jaula() {
    const[teste, setTeste] = useState()

  function calcularLiberacao() {
        let visitantesNaArea = Number(prompt("Quantos visitantes estão na área?"))
        let horaAtual = Number(prompt("Qual é a hora atual? (0 a 23)"))

        if (visitantesNaArea === 0 && (horaAtual < 8 || horaAtual >= 18)) {
            setTeste("Liberação autorizada. Abrindo jaula.")
        } else {
            setTeste("Liberação negada. Área em uso ou fora do horário permitido.")
        }
    }

  return (
    <div className='jaula'>
        <h3> jaulas automatizadas</h3>
        <button onClick={calcularLiberacao}>Junin</button>
        {teste}
    </div>
  )
}

export default Jaula