import Loader from '../Loader'

import * as S from './styles'

export type Props = {
  rests: Rest | undefined
  isLoading: boolean
}

const Apresentacao = ({ rests, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

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
