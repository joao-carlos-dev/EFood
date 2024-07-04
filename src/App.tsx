import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Apresentacao from './components/Apresentacao'
// import Header from './components/Header'
import { EstiloGlobal } from './styles'
import RestaurantsList from './components/RestaurantsList'
import Hero from './components/Hero'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <RestaurantsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <div>
        <RouterProvider router={rotas} />
        {/* <Apresentacao /> */}
      </div>
    </>
  )
}

export default App
