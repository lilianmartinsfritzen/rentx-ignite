import React from 'react'
import { useTheme } from 'styled-components'
import { useNavigation, CommonActions } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles'

export function Scheduling() {
  const theme = useTheme()
  const navigation = useNavigation()

  function handleScheduling() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SchedulingDetails'
      })
    )
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}
        // style={{ marginTop: 49 }}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue
              selected={false}
            >
              18/06/2021
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue
              selected={false}
            >
              20/06/2021
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleScheduling} />
      </Footer>
    </Container>
  )
}