import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import { Car } from '../../components/Car'

import Logo from '../../assets/logo.svg'

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles'

export function Home() {
  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }

  // const carDataTwo = {
  //   brand: 'porsche',
  //   name: 'Panamera',
  //   rent: {
  //     period: 'ao dia',
  //     price: 340
  //   },
  //   thumbnail: 'https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png'
  // }

  return (
    <Container>
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

      <CarList 
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData}/>}
      />

    </Container>
  )
}