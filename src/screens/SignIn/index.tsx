import React, { useState } from 'react'

import { 
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'

import { CommonActions, useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import * as Yup from 'yup'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { PasswordInput } from '../../components/PasswordInput'

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer
} from './styles'

export function SignIn() {

  const theme = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()
  const { signIn } = useAuth()

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha obrigatória')
      })
  
      await schema.validate({ email, password })
      Alert.alert('Tudo certo!')

      signIn({ email, password })
      
    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
  }

  function handleNewAccount() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SignUpFirstStep'
      })
    )
  }

  return (
    <KeyboardAvoidingView
      behavior='position'
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar 
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <Title>
              Estamos{'\n'}quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input 
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'              
              onChangeText={setEmail} // onChangeText={value => setEmail(value)} forma não resumida
              value={email}
            />

            <PasswordInput 
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button 
              title='Login'
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button 
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              light
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}