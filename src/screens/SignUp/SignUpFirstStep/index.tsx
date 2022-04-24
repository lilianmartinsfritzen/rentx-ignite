import React from 'react'
import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles'

export function SignUpFirstStep() {
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  function handleNextStep() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SignUpSecondStep'
      })
    )
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <Container>
          <Header>
            <BackButton onPress={handleBack}/>
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'}conta
          </Title>
          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input 
              iconName='user'
              placeholder='Nome'
            />
            <Input 
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
            />
            <Input 
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
            />
          </Form>

          <Button 
            onPress={handleNextStep}
            title='Próximo'
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}