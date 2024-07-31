import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'
// import Prod from '../../components/Models/Prod'
import ProdutoList from '../../components/ProdutosList'
import pizza from '../../assets/images/pizza.png'
import { Rest } from '../Home'

const restaurantes: Rest[] = []

const Perfil = () => (
  <>
    <Header />
    <Apresentacao />
    <ProdutoList rests={restaurantes} />
  </>
)

export default Perfil
