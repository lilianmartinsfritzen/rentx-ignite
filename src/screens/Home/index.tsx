import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler'
import { useNavigation, CommonActions, useFocusEffect } from '@react-navigation/native'
import { useNetInfo } from '@react-native-community/netinfo'

import { synchronize } from '@nozbe/watermelondb/sync'
import { database } from '../../database'
import { Car as ModelCar } from '../../database/model/Car'
import api from '../../services/api'

import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring
} from 'react-native-reanimated'

import { Car } from '../../components/Car'
import { LoadAnimation } from '../../components/LoadAnimation'

import { CarDTO } from '../../dtos/carDTO'
import Logo from '../../assets/logo.svg'

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles'

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export function Home() {
  const [cars, setCars] = useState<ModelCar[]>([])
  const [loading, setLoading] = useState(true)

  const theme = useTheme()
  const netInfo = useNetInfo()
  const navigation = useNavigation()
  const synchronizing = useRef(false)

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(event, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX
      positionY.value = ctx.positionY + event.translationY
    },
    onEnd() {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }
    
  })

  function handleOpenMyCars() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'MyCars'
      })
    )
  }

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

  async function offlineSynchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api
        .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`)
        
        const { changes, latestVersion } = response.data
        return { changes, timestamp: latestVersion }        
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users
        if (user.updated.length > 0) {
          await api.post('/users/sync', user)
        }
      }
    })
    await fetchCars()
  }

    async function fetchCars() {
      try {
        const carCollection = database.get<ModelCar>('cars')
        const cars = await carCollection.query().fetch()
        setCars(cars)

      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      fetchCars()
    }

    return () => {
      isMounted = false
    }
  }, [])

  useFocusEffect(useCallback(() => {
    const syncChanges = async () => {
      if (netInfo.isConnected && !synchronizing.current) {
        synchronizing.current = true

        try {
          await offlineSynchronize()
        }
        catch (err) {
          console.log(err)
        }
        finally {
          synchronizing.current = false
        }
      }
    }

    syncChanges()
  }, [netInfo.isConnected]))

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
          {
            !loading &&
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          }
        </HeaderContent>
      </Header>

      {loading ? <LoadAnimation /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car data={item} onPress={() => handleCarDetails(item)} />
          }
        />
      }
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 13,
              right: 22
            }
          ]}
        >
          <ButtonAnimated 
            onPress={handleOpenMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons 
              name='ios-car-sport'
              size={32}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})