import './App.css'
import Jogo from './components/Jogo'
import Pousada from './components/Pousada'
import Eleicao from './components/Eleicao'
import Peso from './components/Peso'
import Maca from './components/Maca'

function App() {

  return (
     <div className="App">
        <h1>03 estados e components</h1>

        <Jogo />
        <Pousada/>
        <Eleicao/>
        <Peso/>
        <Maca/>

    </div>
    
  )
}

export default App
