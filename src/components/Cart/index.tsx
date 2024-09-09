import { BotaoModel } from '../Produtos/styles'
import {
  CarItem,
  CartContainer,
  NomePrato,
  Overlay,
  PricesPrato,
  PricesTotal,
  Sidebar
} from './styles'
import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  // const getTotalPrice = () => {
  //   return items.reduce((acumulador, valorAtual) => {
  //     return (acumulador += valorAtual.prices.current!)
  //   }, 0)
  // }

  // const removeItem = (id: number) => {
  //   dispatch(remove(id))
  // }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CarItem>
            <img src={pizza} />
            <div>
              <NomePrato>Pizza Protuguesa</NomePrato>
              <PricesPrato>R$ 60,90</PricesPrato>
            </div>
            <button type="button" />
          </CarItem>
          <CarItem>
            <img src={pizza} />
            <div>
              <NomePrato>Pizza Protuguesa</NomePrato>
              <PricesPrato>R$ 60,90</PricesPrato>
            </div>
            <button type="button" />
          </CarItem>
        </ul>
        <PricesTotal>
          Valor total <span>R$ 182</span>
        </PricesTotal>
        <BotaoModel>Continuar para a entrega</BotaoModel>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
