import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { getTotalPrice, parseToBrl } from '../../utils'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CarItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <S.NameDish>{item.nome}</S.NameDish>
                <S.PricesDish>{parseToBrl(item.preco)}</S.PricesDish>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CarItem>
          ))}
        </ul>
        <S.PricesTotal>
          Valor total <span>{parseToBrl(getTotalPrice(items))}</span>
        </S.PricesTotal>
        <S.ButtonCart onClick={goToCheckout}>
          Continuar para a entrega
        </S.ButtonCart>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
