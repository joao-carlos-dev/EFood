import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'
import { open, clear } from '../../store/reducers/cart'

import Card from '../../components/Card'

import { Overlay } from '../../components/Cart/styles'
import * as S from './styles'

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkoutForm = () => {
    setIsOpenCart(true)
    onClose()
    navigate('/')
  }

  const form = useFormik({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresYear: '',
      expiresMonth: '',
      fullName: '',
      address: '',
      city: '',
      cep: '',
      numberHome: '',
      complementHome: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numberHome: Yup.number().required('O campo é obrigatório'),
      complementHome: Yup.string(),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            city: values.city,
            number: Number(values.numberHome),
            zipCode: values.cep,
            complement: values.complementHome
          }
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: Number(values.cardNumber),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const openCart = () => {
    dispatch(open())
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  const deliveryDetails = () => {
    form.setTouched({
      fullName: true,
      address: true,
      city: true,
      cep: true,
      numberHome: true
    })

    const isDeliveryValid =
      !form.errors.fullName &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.numberHome &&
      form.values.fullName !== '' &&
      form.values.address !== '' &&
      form.values.city !== '' &&
      form.values.cep !== '' &&
      form.values.numberHome !== ''

    if (isDeliveryValid) {
      setPayWithCard(true)
    }
  }

  const comeBackFormDelivery = () => {
    setIsOpenCart(true)
    onClose()
    openCart()
  }

  return (
    <S.EncapsuladorCard>
      <Overlay />
      {!isOpenCart && isSuccess && data ? (
        <Card title={`Pedido realizado - ${data.orderId}`}>
          <>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-top">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="margin-top">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="margin-top">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.ButtonCard
              onClick={checkoutForm}
              type="submit"
              className="margin-top"
              title="clique aqui para confirmar seu pedido"
            >
              Concluir
            </S.ButtonCard>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {payWithCard ? (
            <Card
              title={`Pagamento - Valor a pagar ${parseToBrl(
                getTotalPrice(items)
              )}`}
            >
              <>
                <S.InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardDisplayName"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('cardDisplayName') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.Row columnGap="30px">
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.ButtonCard
                  title="Clique aqui para finalizar o pagamento"
                  className="margin-top"
                >
                  {isLoading
                    ? 'Finalizando a compra...'
                    : 'Finalizar pagamento'}
                </S.ButtonCard>
                <S.ButtonCard
                  onClick={() => setPayWithCard(false)}
                  title="Clique aqui para voltar para edição do endereço"
                >
                  Voltar para edição do endereço
                </S.ButtonCard>
              </>
            </Card>
          ) : (
            <Card title="Entrega">
              <>
                <S.InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputCepNumber maxWidth="155px">
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </S.InputCepNumber>
                  <S.InputCepNumber maxWidth="155px">
                    <label htmlFor="numberHome">Número</label>
                    <input
                      id="numberHome"
                      type="number"
                      name="numberHome"
                      value={form.values.numberHome}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('numberHome') ? 'error' : ''
                      }
                    />
                  </S.InputCepNumber>
                </S.Row>
                <S.InputGroup>
                  <label htmlFor="complementHome">Complemento (opcional)</label>
                  <input
                    id="complementHome"
                    type="text"
                    name="complementHome"
                    value={form.values.complementHome}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('complementHome') ? 'error' : ''
                    }
                  />
                </S.InputGroup>

                <S.ButtonCard
                  onClick={deliveryDetails}
                  className="margin-top"
                  title="Clique aqui para continuar para o pagamento"
                >
                  Continuar com o pagamento
                </S.ButtonCard>
                <S.ButtonCard
                  onClick={comeBackFormDelivery}
                  title="Clique voltar para o carrinho"
                >
                  Voltar para o carrinho
                </S.ButtonCard>
              </>
            </Card>
          )}
        </form>
      )}
    </S.EncapsuladorCard>
  )
}

export default Checkout
