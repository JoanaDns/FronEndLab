
import React, { useState } from "react";


function Pneu() {
  const [inputN, setInputN] = useState("");
  const [inputM, setInputM] = useState("");
  const [resultado, setResultado] = useState(
    "Digite as pressões e aperte o botão"
  );

  function calcularDiferenca() {
    if (inputN === "" || inputM === "") {
      setResultado("Preencha as duas pressões.");
      return;
    }

    const N = Number(inputN);
    const M = Number(inputM);
    const diferenca = N - M;

    setResultado(`Diferença: ${diferenca}`);
  }

  return (
    <div className="pneu">
      <h1>0081 - Pneu</h1>

      <label htmlFor="pressaoDesejada">
        Pressão desejada
      </label>
      <input
        id="pressaoDesejada"
        type="number"
        step="any"
        value={inputN}
        onChange={(e) => setInputN(e.target.value)}
      />

      <label htmlFor="pressaoLida">
        Pressão lida
      </label>
      <input
        id="pressaoLida"
        type="number"
        step="any"
        value={inputM}
        onChange={(e) => setInputM(e.target.value)}
      />

      <button type="button" onClick={calcularDiferenca}>
        Calcular diferença
      </button>

      <p aria-live="polite">{resultado}</p>
    </div>
  );
}

export default Pneu;
