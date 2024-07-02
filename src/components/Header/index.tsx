import { HeaderBar, LinkCarrinho, Links } from './styles'
import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.png'
import planoFundo from '../../assets/images/plano_fundo_header.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${planoFundo})` }}>
    <nav>
      <Links>
        <li>
          <a href="#">Restaurantes</a>
        </li>
      </Links>
    </nav>
    <img src={logo} alt="EFOOD" />
    <LinkCarrinho href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCarrinho>
  </HeaderBar>
)

export default Header
