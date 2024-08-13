import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import { Card, Descricao, Titulo } from './styles'

export type Props = {
  titulo: string
  descricao: string
  image: string
}

// export const formataPreco = (preco: number) => {
//   return new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   }).format(preco)
// }

const Produtos = ({ titulo, descricao, image }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt="Foto restaurante" />
      <Titulo>{titulo}</Titulo>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <ButtonContainer>
        <Link to="#">Adiconar ao carinho</Link>
      </ButtonContainer>
    </Card>
  )
}

export default Produtos
