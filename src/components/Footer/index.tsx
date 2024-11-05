import { Link } from 'react-router-dom'

import * as S from './styles'

import soon from '../../assets/images/logo.png'
import insta from '../../assets/images/insta-logo.png'
import face from '../../assets/images/face-logo .png'
import twitter from '../../assets/images/twitter-logo.png'

const Footer = () => (
  <S.Container>
    <div className="container">
      <Link to="/">
        <img src={soon} alt="EFOOD" />
      </Link>
      <S.FooterSection>
        <S.Links>
          <li>
            <S.LinkSocial>
              <img src={insta} alt="instagran" />
            </S.LinkSocial>
          </li>
          <li>
            <S.LinkSocial>
              <img src={face} alt="facebook" />
            </S.LinkSocial>
          </li>
          <li>
            <S.LinkSocial>
              <img src={twitter} alt="twitter" />
            </S.LinkSocial>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.TextFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.TextFooter>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
