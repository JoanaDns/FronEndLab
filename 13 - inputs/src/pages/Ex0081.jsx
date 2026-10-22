import React, { useState } from 'react'

function Pneu() {
    const [inputN, setInputN] = useState('')
    const [inputM, setInputM] = useState('')
    const [resultado, setResultado] = useState('Digite as pressões e aperte o botão')

    function calcularDiferenca() {
        let N = Number(inputN)
        let M = Number(inputM)
        let diferenca = N - M

        setResultado(diferenca)
    }

    return (
        <div className='pneu'>
            <h1>0081 - Pneu</h1>

            <label>Pressão desejada</label>
            <input
                type="number"
                value={inputN}
                onChange={(e) => setInputN(e.target.value)}
            />

            <label>Pressão lida</label>
            <input
                type="number"
                value={inputM}
                onChange={(e) => setInputM(e.target.value)}
            />

            <button onClick={calcularDiferenca}>
                Calcular diferença
            </button>

            <p>{resultado}</p>
        </div>
    )
}

export default Pneu
