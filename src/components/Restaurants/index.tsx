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
import { Rest } from '../../pages/Home'

export type Props = {
  titulo: string
  descricao: string
  infos: string[]
  image: string
  avaliacao: string
  tipo?: string
}

const Restaurants = ({ titulo, descricao, infos, image, avaliacao }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} alt="Imagem do restaurante" />
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
        <Descricao>{getDescricao(descricao)}</Descricao>
        <ButtonContainer>
          <Link to={`/perfil/`}>Saiba mais</Link>
        </ButtonContainer>
      </Border>
    </Card>
  )
}

export default Restaurants
