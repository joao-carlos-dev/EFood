import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import {
  Avaliacao,
  Border,
  Card,
  Descricao,
  Infos,
  Nota,
  Titulo
} from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  titulo: string
  descricao: string
  infos: string[]
  image: string
  avaliacao: number
}

const Restaurants = ({ titulo, descricao, infos, image, avaliacao }: Props) => (
  <Card>
    <img src={image} alt={titulo} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Border>
      <Titulo>
        {titulo}
        <Nota>
          <Avaliacao>{avaliacao}</Avaliacao>
          <img src={estrela} alt="estrela" />
        </Nota>
      </Titulo>
      <Descricao>{descricao}</Descricao>
      <ButtonContainer>
        <Link to="/perfil">Saiba mais</Link>
      </ButtonContainer>
    </Border>
  </Card>
)

export default Restaurants
