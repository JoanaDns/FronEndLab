
import React, { useState } from 'react'

function Pum() {
    const [inputPum, setInputPum] = useState('')
    const [inputResultado, setInputResultado] = useState('Digite a quantidade e aperte o botão')

    function calcularPum() {

        let N = Number(inputPum);
        let frase = "";

        for (let i = 0; i < N; i++) {

            let numero = i * 4 + 1;

            frase += `${numero} ${numero + 1} ${numero + 2} Bomba\n`;
        }

        setInputResultado(frase);
    }

    return (
        <div className='pum'>
            <h1>PUM</h1>

            <label htmlFor="">Quantidade de linhas</label>

            <input
                type="text"
                value={inputPum}
                onChange={(e) => setInputPum(e.target.value)}
            />

            <button onClick={calcularPum}>Calcular PUM</button>

            <p style={{ whiteSpace: 'pre-line' }}>
                {inputResultado}
            </p>

        </div>
    )
}

export default Pum


