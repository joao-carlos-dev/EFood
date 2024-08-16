import { Imagem, TipoComida, Titulo } from './styles'
import bannerImg from '../../assets/images/imagem_apre_rest.png'
import { Rest } from '../../pages/Home'

export type Props = {
  rests: Rest | undefined
}

const Apresentacao = ({ rests }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${rests?.capa})` }}>
      <div className="container">
        <TipoComida>{rests?.tipo}</TipoComida>
        <Titulo>{rests?.titulo}</Titulo>
      </div>
    </Imagem>
  )
}

export default Apresentacao
