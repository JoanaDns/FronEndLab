import { useState } from 'react'

function OracaoEnd() {

  const[resultado, setEnd] = useState(1)
  return (
    <div className="OracaoEnd">

<h3>
Ave CSS, cheia de bugs,

O framework é convosco,

Bendita sois vós entre as telas,

E bendito é o fruto do vosso DOM: o pixel perfeito.

Santa Documentação, mãe da UI,

Rogai por nós, devs visuais,

Agora e na hora do push final.

Hover.</h3>
      {resultado}
    </div>
  )
}

export default OracaoEnd
