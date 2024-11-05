import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { parseToBrl } from '../../utils'

import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
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
          Valor total <span>{parseToBrl(getTotalPrice())}</span>
        </S.PricesTotal>
        <S.ButtonCart>Continuar para a entrega</S.ButtonCart>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
