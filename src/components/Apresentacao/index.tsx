import { Imagem, TipoComida, Titulo } from './styles'
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
