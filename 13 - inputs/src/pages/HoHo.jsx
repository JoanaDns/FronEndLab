import React, { useState } from 'react'

function HoHo() {
 const[inputHo, setInputHo] = useState('')
 const[inputResultado, setInputResultado] = useState('Digite a quantidade e aperte o botão')

    function calcularHo(){
        
     let N = Number(inputHo);
     let frase = "";

      for (let i = 0; i < N; i++) {
         if (i === N - 1) {
            frase += "Ho!";
         } else {
            frase += "Ho";
         }
    }

        setInputResultado(frase);
    }

  return (
    <div className='hoho'>
        <h1>Papai Noel</h1>
        <label htmlFor="">Quantidade de Ho</label>

        <input type="text" 
        value={inputHo}
        onChange={(e) => setInputHo(e.target.value)}
        />

        <button onClick={calcularHo}>Ver quantos Ho's</button>

        <p>
            {inputResultado}
        </p>

    </div>
  )
}

export default HoHo


