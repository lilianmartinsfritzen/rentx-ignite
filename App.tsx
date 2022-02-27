import React from 'react'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import { SchedulingComplete } from './src/screens/SchedulingComplete'
import theme from './src/styles/theme'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'


export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SchedulingComplete />
    </ThemeProvider>
  )
}
