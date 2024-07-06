import { BrowserRouter } from 'react-router-dom'
import { EstiloGlobal } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <div>
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
