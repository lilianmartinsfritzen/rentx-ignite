import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation, CommonActions } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { Car } from '../../components/Car'
import { Load } from '../../components/Load'

import { CarDTO } from '../../dtos/carDTO'
import api from '../../services/api'
import Logo from '../../assets/logo.svg'

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  MyCarsButton,
} from './styles'

export function Home() {
  const theme = useTheme()
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  function handleCarDetails(car: CarDTO) {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'CarDetails',
        params: {
          car
        }
      })
    )
  }

  function handleOpenMyCars() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'MyCars'
      })
    )
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      {loading ? <Load /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car data={item} onPress={() => handleCarDetails(item)} />
          }
        />
      }
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons 
          name='ios-car-sport'
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  )
}