import {
  BotaoCart,
  CarItem,
  CartContainer,
  NomePrato,
  Overlay,
  PricesPrato,
  PricesTotal,
  Sidebar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Produtos'

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
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CarItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <NomePrato>{item.nome}</NomePrato>
                <PricesPrato>{formataPreco(item.preco)}</PricesPrato>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CarItem>
          ))}
        </ul>
        <PricesTotal>
          Valor total <span>{formataPreco(getTotalPrice())}</span>
        </PricesTotal>
        <BotaoCart>Continuar para a entrega</BotaoCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
