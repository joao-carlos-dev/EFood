import { Logo, Titulo, Cabecalho } from './styles'
import planoFundo from '../../assets/images/plano_fundo_header.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <Cabecalho style={{ backgroundImage: `url(${planoFundo})` }}>
    <Logo src={logo} alt="EFOOD" />
    <Titulo>Viva experiências gastronômicasno conforto da sua casa</Titulo>
  </Cabecalho>
)

export default Hero
