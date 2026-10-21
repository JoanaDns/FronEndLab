import { useState } from 'react'
import './App.css'
import OracaoDeploy from './components/OracaoDeploy'
import OracaoEnd from './components/OracaoEnd'
import OracaoAprendiz from './components/OracaoAprendiz'
import OracaoProgramar from './components/OracaoProgramar'
import OracaoFull from './components/OracaoFull'

function App() {
  const [pagina, setPagina] = useState(0)

  return (  
    <div className="app-container">
      {/* Florzinhas caindo na lateral esquerda */}
      <div className="flowers-container left">
        <span className="flower">🌸</span>
        <span className="flower">🌺</span>
        <span className="flower">🌸</span>
        <span className="flower">🌺</span>
        <span className="flower">🌸</span>
      </div>

      {/* Florzinhas caindo na lateral direita */}
      <div className="flowers-container right">
        <span className="flower">🌸</span>
        <span className="flower">🌺</span>
        <span className="flower">🌸</span>
        <span className="flower">🌺</span>
        <span className="flower">🌸</span>
      </div>

      {/* Navegação de Botões */}
      <nav className="nav-buttons">
        <button 
          className={pagina === 0 ? 'active' : ''} 
          onClick={() => setPagina(0)}
        >
          Oração do Deploy
        </button>
        <button 
          className={pagina === 1 ? 'active' : ''} 
          onClick={() => setPagina(1)}
        >
          Oração do Aprendiz
        </button>
        <button 
          className={pagina === 2 ? 'active' : ''} 
          onClick={() => setPagina(2)}
        >
          Oração do FrontEnd
        </button>
        <button 
          className={pagina === 3 ? 'active' : ''} 
          onClick={() => setPagina(3)}
        >
          Oração do Programador
        </button>
        <button 
          className={pagina === 4 ? 'active' : ''} 
          onClick={() => setPagina(4)}
        >
          Oração do Fullstack
        </button>
      </nav>

      {/* Título Principal */}
      <h1 className="app-title">
        Orações do Dev <span className="highlight-pink">Cansado</span>
      </h1>

      {/* Cartão de Conteúdo */}
      <main className="prayer-card">
        {pagina === 0 && <OracaoDeploy />}
        {pagina === 1 && <OracaoAprendiz />}
        {pagina === 2 && <OracaoEnd />}
        {pagina === 3 && <OracaoProgramar />}
        {pagina === 4 && <OracaoFull />}

        {/* Indicador de página circular */}
        <div className="prayer-footer">
          {pagina + 1}
        </div>
      </main>
    </div>
  )
}

export default App