import background from '../../assets/images/plano_fundo_header.png'
import soon from '../../assets/images/logo.png'

import * as S from './styles'

const Hero = () => {
  return (
    <S.Header style={{ backgroundImage: `url(${background})` }}>
      <S.Soon src={soon} alt="EFOOD" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.Header>
  )
}

export default Hero
