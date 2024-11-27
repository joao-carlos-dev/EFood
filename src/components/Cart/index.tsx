import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

import { getTotalPrice, parseToBrl } from '../../utils'
import { close, remove } from '../../store/reducers/cart'

import Checkout from '../../pages/Checkout'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCheckout, setShowCheckout] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setShowCheckout(true)
    closeCart()
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        {!showCheckout && <S.Overlay onClick={closeCart} />}
        <S.Sidebar>
          {items.length > 0 ? (
            <>
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
            </>
          ) : (
            <p className="empty-text">O carrinho está vazio.</p>
          )}
        </S.Sidebar>
      </S.CartContainer>

      {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
    </>
  )
}

export default Cart
