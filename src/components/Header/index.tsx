import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import soon from '../../assets/images/logo.png'
import cart from '../../assets/images/carrinho.png'
import background from '../../assets/images/plano_fundo_header.png'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <S.HeaderBar>
        <nav>
          <S.Links>
            <li>
              <a href="/">Restaurantes</a>
            </li>
          </S.Links>
        </nav>
        <Link to="/">
          <h1>
            <img src={soon} alt="EFOOD" />
          </h1>
        </Link>
        <S.CartButton onClick={openCart}>
          {items.length} - produto(s)
          <img src={cart} alt="carrinho" />
        </S.CartButton>
      </S.HeaderBar>
    </div>
  )
}
export default Header
