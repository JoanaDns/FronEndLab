import React, { useState } from 'react'

function Demo() {
    const[inputNota1, setInputNota1] = useState('')
    const[inputNota2, setInputNota2] = useState('')
    const[resultado, setResultado] = useState('Digite suas notas e aperte o Botão')
    function calcularMedia(){
        let nota1 = Number(inputNota1)
        let nota2 = Number(inputNota1)
        let media = (nota1 + nota2) / 2
        setResultado(media)
    }

  return (
    <div className='demo'>
      <h1>Demo - Médias</h1>

    <label htmlFor="">Nota 1</label>
    <input type="text"
    value={inputNota1}
    onChange={(e) => setInputNota1(e.target.value)}
    /> 

    <label htmlFor="">Nota 2</label>
    <input type="text"
    value={inputNota2}
    onChange={(e) => setInputNota2(e.target.value)}
         
    />       
    <button onClick={calcularMedia}>Média</button>

    <p>
            {resultado}
    </p>

    </div>
  )

}
export default Demo
