import { useState } from 'react'
import './App.css'
import OracaoDeploy from './components/OracaoDeploy'
import OracaoEnd from './components/OracaoEnd'
import OracaoAprendiz from './components/OracaoAprendiz'
import OracaoProgramar from './components/OracaoProgramar'
import OracaoFull from './components/OracaoFull'

function App() {
  const [pagina, setPagina] = useState(1)
  
  return (  
    <div className="App">
      <nav>
        <button onClick={() => setPagina (0)}>Oração do Deploy</button>
        <button onClick={() => setPagina (1)}>Oração do Aprendiz</button>
        <button onClick={() => setPagina (2)}>Oração do FrontEnd</button>
        <button onClick={() => setPagina (3)}>Oração do Programador</button>
        <button onClick={() => setPagina (4)}>Oração do Fullstack</button>
      </nav>
      
      <h1>Orações do Dev Cansado</h1>
       {pagina == 0  &&  <OracaoDeploy />}
       {pagina == 1  &&  <OracaoAprendiz />}
       {pagina == 2  &&  <OracaoEnd />}
       {pagina == 3  &&  <OracaoProgramar />}
       {pagina == 4  &&  <OracaoFull />}
    </div>
   
  )
}

export default App
