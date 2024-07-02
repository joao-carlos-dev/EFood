import { Imagem, TipoComida, Titulo } from './styles'
import bannerImg from '../../assets/images/imagem_apre_rest.png'

const Apresentacao = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <TipoComida>Italiana</TipoComida>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Apresentacao
