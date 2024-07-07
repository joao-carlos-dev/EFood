import RestaurantsList from '../../components/RestaurantsList'
import Rest from '../../models/Rest'
import japonesa from '../../assets/images/rest.japones.png'
import italiana from '../../assets/images/rest.italiano.png'
import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'

const restaurantes: Rest[] = [
  {
    id: 7,
    titulo: 'Hioki Sushi',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa
  },
  {
    id: 8,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italiana
  },
  {
    id: 9,
    titulo: 'Hioki Sushi',
    avaliacao: 4.6,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa'],
    image: japonesa
  },
  {
    id: 10,
    titulo: 'Hioki Sushi',
    avaliacao: 4.6,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa'],
    image: japonesa
  },
  {
    id: 11,
    titulo: 'Hioki Sushi',
    avaliacao: 4.6,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa'],
    image: japonesa
  },
  {
    id: 12,
    titulo: 'Hioki Sushi',
    avaliacao: 4.6,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa'],
    image: japonesa
  }
]
const Perfil = () => (
  <>
    <Header />
    <Apresentacao />
    <RestaurantsList rests={restaurantes} />
  </>
)

export default Perfil
