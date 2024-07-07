import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/insta-logo.png'
import face from '../../assets/images/face-logo .png'
import twitter from '../../assets/images/twitter-logo.png'
import {
  Container,
  FooterSection,
  Link,
  Links,
  LogoFooter,
  TextoFooter
} from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <LogoFooter src={logo} alt="EFOOD" />
      <FooterSection>
        <Links>
          <li>
            <Link>
              <img src={insta} alt="instagran" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={face} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="twitter" />
            </Link>
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
