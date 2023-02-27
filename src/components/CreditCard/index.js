import {useState} from 'react'

import {
  MainContainer,
  CreditContainer,
  Text,
  HLine,
  OutputContainer,
  Heading,
  H,
  Para,
  Paragraph,
  FormContainer,
  InputField,
  NameInputField,
  SubContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, setCardNo] = useState('')
  const [name, setName] = useState('')

  const onChangeCardNo = event => {
    setCardNo(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditContainer>
        <Text>CREDIT CARD</Text>
        <HLine />
        <OutputContainer data-testid="creditCard">
          <Heading>{cardNo}</Heading>
          <Para>CARDHOLDER NAME</Para>
          <Paragraph>{name}</Paragraph>
        </OutputContainer>
      </CreditContainer>
      <SubContainer>
        <FormContainer>
          <H>Payment Method</H>
          <InputField
            placeholder="Card Number"
            type="text"
            value={cardNo}
            onChange={onChangeCardNo}
          />
          <NameInputField
            placeholder="Cardholder Name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </FormContainer>
      </SubContainer>
    </MainContainer>
  )
}
export default CreditCard
