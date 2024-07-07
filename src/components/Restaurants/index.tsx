import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Border, Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  titulo: string
  descricao: string
  infos: string[]
  image: string
}

const Restaurants = ({ titulo, descricao, infos, image }: Props) => (
  <Card>
    <img src={image} alt={titulo} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Border>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <ButtonContainer>
        <Link to="/perfil">Saiba maisl</Link>
      </ButtonContainer>
    </Border>
  </Card>
)

export default Restaurants
