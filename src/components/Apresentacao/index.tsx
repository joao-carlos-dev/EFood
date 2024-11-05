import { Rest } from '../../pages/Home'

import * as S from './styles'

export type Props = {
  rests: Rest | undefined
}

const Apresentacao = ({ rests }: Props) => {
  return (
    <S.Image style={{ backgroundImage: `url(${rests?.capa})` }}>
      <div className="container">
        <S.typeOfFood>{rests?.tipo}</S.typeOfFood>
        <S.Title>{rests?.titulo}</S.Title>
      </div>
    </S.Image>
  )
}

export default Apresentacao
