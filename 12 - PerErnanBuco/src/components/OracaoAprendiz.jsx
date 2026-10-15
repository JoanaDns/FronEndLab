import { useState } from 'react'

function OracaoAprendiz() {

    const[resultado, setOra] = useState()

  return (
    <div  className="OracaoAprendiz">

<h3>
Oh Grande Sintaxe,

que tudo vê e tudo espera,

ensinai-me a diferença entre `==` e `===`,

entre `let`, `var`, e `const`,

entre o que parece funcionar

e o que realmente funciona.

Dai-me humildade para perguntar,

curiosidade para explorar,

e persistência para continuar

quando tudo der `undefined`.

Pois estou apenas começando,

mas já sou parte do repositório da evolução.

**Commit inicial. Amém.**</h3>
        {resultado}
    </div>
  )
}

export default OracaoAprendiz
