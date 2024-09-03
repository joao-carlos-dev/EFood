import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/insta-logo.png'
import face from '../../assets/images/face-logo .png'
import twitter from '../../assets/images/twitter-logo.png'
import {
  Container,
  FooterSection,
  Links,
  LinkSocial,
  TextoFooter
} from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <FooterSection>
        <Links>
          <li>
            <LinkSocial>
              <img src={insta} alt="instagran" />
            </LinkSocial>
          </li>
          <li>
            <LinkSocial>
              <img src={face} alt="facebook" />
            </LinkSocial>
          </li>
          <li>
            <LinkSocial>
              <img src={twitter} alt="twitter" />
            </LinkSocial>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <TextoFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </TextoFooter>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
