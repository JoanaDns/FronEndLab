
import React, { useState } from 'react'

function Filme() {
    const [inputAntigo, setInputAntigo] = useState('')
    const [inputNovo, setInputNovo] = useState('')
    const [inputResultado, setInputResultado] = useState('Digite os preços e aperte o botão')

    function calcularFilme() {

        let A = Number(inputAntigo.replace(',', '.'));
        let B = Number(inputNovo.replace(',', '.'));

        let porcentagem = ((B - A) / A) * 100;

        setInputResultado(porcentagem.toFixed(2) + '%');

    }

    return (
        <div className='filme'>
            <h1>O Filme</h1>

            <label htmlFor="">Preço antigo</label>

            <input
                type="text"
                value={inputAntigo}
                onChange={(e) => setInputAntigo(e.target.value)}
            />

            <label htmlFor="">Preço novo</label>

            <input
                type="text"
                value={inputNovo}
                onChange={(e) => setInputNovo(e.target.value)}
            />

            <button onClick={calcularFilme}>
                Calcular aumento
            </button>

            <p>{inputResultado}</p>

        </div>
    )
}

export default Filme
