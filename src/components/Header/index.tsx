import { Link } from 'react-router-dom'
import { HeaderBar, CartButton, Links } from './styles'
import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.png'
import planoFundo from '../../assets/images/plano_fundo_header.png'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div style={{ backgroundImage: `url(${planoFundo})` }}>
      <HeaderBar>
        <nav>
          <Links>
            <li>
              <a href="#">Restaurantes</a>
            </li>
          </Links>
        </nav>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <CartButton onClick={openCart}>
          0 - produto(s)
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderBar>
    </div>
  )
}
export default Header
