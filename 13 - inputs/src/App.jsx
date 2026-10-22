
import Home from './pages/home'
import './App.css'
import Demo from './pages/Demo'
import Pneu from './pages/Ex0081'

function App() {
  return (
    <div className="app">
      <div className="flores-laterais">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} style={{
            left: `${i % 2 === 0 ? 1 + (i * 3) % 8 : 89 + (i * 3) % 8}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + (i % 5)}s`
          }}>
            ❀
          </span>
        ))}
      </div>

      <Demo />
      <Home />
      <Pneu />
    </div>
  )
}

export default App
