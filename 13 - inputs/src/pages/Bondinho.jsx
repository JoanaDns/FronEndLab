import React, { useState } from 'react'

function Bondinho(){
  const [alunos, setAlunos] = useState("");
  const [monitores, setMonitores] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularpessoas() {
    const total = Number(alunos) + Number(monitores);

    if (total <= 50) {
      setResultado("S");
    } else {
      setResultado("N");
    }
  }

  return (
    <div className='bondinho'>
        <h1>Excursão de Bondinho</h1>
        <label htmlFor="">Quantidade Alunos</label>

        <input type="text" 
        value={alunos}
        onChange={(e) => setAlunos(e.target.value)}
        />

        <label htmlFor="">Quantidade Instrutores</label>

        <input type="text" 
        value={monitores}
        onChange={(e) => setMonitores(e.target.value)}
        />

        <button onClick={calcularpessoas}>Ver Resultado</button>

        <p>
            {resultado}
        </p>
    </div>
  )
}

export default Bondinho