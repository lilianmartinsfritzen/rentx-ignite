import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { format } from 'date-fns'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { 
  Calendar, 
  DayProps, 
  generateInterval,
  MarkedDateProps
} from '../../components/Calendar'

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
import { getPlatformDate } from '../../utils/getPlatformDate'

interface RentalPeriod {
  start: number
  startFormatted: string
  end: number
  endFormatted: string
}

export function Scheduling() {
  const [
    lastSelectedDate, 
    setLastSelectedDate
  ] = useState<DayProps>({} as DayProps)

  const [
    markedDates, 
    setMarkedDates
  ] = useState<MarkedDateProps>({} as MarkedDateProps)

  const [
    rentalPeriod, 
    setRentalPeriod
  ] = useState<RentalPeriod>({} as RentalPeriod)

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

  function handleChangeDate(
    date: DayProps
  ) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })
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
              selected={!!rentalPeriod.startFormatted}
            >
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue
              selected={!!rentalPeriod.endFormatted}
            >
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleScheduling} />
      </Footer>
    </Container>
  )
}