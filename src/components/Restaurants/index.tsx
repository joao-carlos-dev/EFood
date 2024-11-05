import { Link } from 'react-router-dom'

import { getDescription } from '../../utils'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.png'

import { ButtonContainer } from '../Button/styles'
import * as S from './styles'

export type Props = {
  id: number
  titulo: string
  descricao: string
  infos: string[]
  image: string
  avaliacao: string
  tipo?: string
}

const Restaurants = ({
  id,
  titulo,
  descricao,
  infos,
  image,
  avaliacao
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt="Imagem do restaurante" />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Border>
        <S.Title>
          {titulo}
          <S.Grade>
            <S.Assessment>{avaliacao}</S.Assessment>
            <img src={estrela} alt="estrela" />
          </S.Grade>
        </S.Title>
        <S.Description>{getDescription(descricao)}</S.Description>
        <ButtonContainer>
          <Link to={`/perfil/${id}`}>Saiba mais</Link>
        </ButtonContainer>
      </S.Border>
    </S.Card>
  )
}

export default Restaurants
