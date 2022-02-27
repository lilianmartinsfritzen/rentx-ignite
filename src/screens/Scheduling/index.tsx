import React from 'react'
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'

import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
} from './styles'

export function Scheduling() {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => { }}
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
    </Container>
  )
}