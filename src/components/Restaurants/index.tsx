import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

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
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
    <ButtonContainer>saiba mais</ButtonContainer>
  </Card>
)

export default Restaurants
