import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Card from '../../components/Card'

import { usePurchaseMutation } from '../../services/api'

import { Overlay } from '../../components/Cart/styles'
import * as S from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

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
      cardNumber: Yup.number().when((values, schema) =>
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
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <div className="container">
      <Overlay />
      {isSuccess ? (
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
            <Card title="Pagamento - Valor a pagar R$ 190,90">
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
                  />
                  <small>
                    {getErrorMessage(
                      'cardDisplayName',
                      form.errors.cardDisplayName
                    )}
                  </small>
                </S.InputGroup>
                <S.Row columnGap="30px">
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="number"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="number"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </S.InputGroup>
                </S.Row>
                <S.Row>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Mês de vencimento</label>
                    <input
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Ano de vencimento</label>
                    <input
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </S.InputGroup>
                </S.Row>
                <S.ButtonCard
                  title="Clique aqui para finalizar o pagamento"
                  className="margin-top"
                >
                  Finalizar pagamento
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
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
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
                  />
                  <small>
                    {getErrorMessage('address', form.errors.address)}
                  </small>
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
                  />
                  <small>{getErrorMessage('city', form.errors.city)}</small>
                </S.InputGroup>
                <S.Row>
                  <S.InputCepNumber maxWidth="155px">
                    <label htmlFor="cep">CEP</label>
                    <input
                      id="cep"
                      type="text"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage('cep', form.errors.cep)}</small>
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
                    />
                    <small>
                      {getErrorMessage('numberHome', form.errors.numberHome)}
                    </small>
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
                  />
                  <small>
                    {getErrorMessage(
                      'complementHome',
                      form.errors.complementHome
                    )}
                  </small>
                </S.InputGroup>

                <S.ButtonCard
                  onClick={() => setPayWithCard(true)}
                  className="margin-top"
                  title="Clique aqui para continuar para o pagamento"
                >
                  Continuar com o pagamento
                </S.ButtonCard>
                <S.ButtonCard title="Clique voltar para o carrinho">
                  Voltar para o carrinho
                </S.ButtonCard>
              </>
            </Card>
          )}
        </form>
      )}
    </div>
  )
}

export default Checkout
