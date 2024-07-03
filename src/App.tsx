import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Apresentacao from './components/Apresentacao'
import Header from './components/Header'
import { EstiloGlobal } from './styles'
import RestaurantsList from './components/RestaurantsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
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
