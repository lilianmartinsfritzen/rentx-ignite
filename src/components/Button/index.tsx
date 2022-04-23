import React from 'react'
import { ActivityIndicator } from 'react-native'
import theme from '../../styles/theme'

import {
  Container,
  Title,
} from './styles'

interface Props {
  title: string
  color?: string
  onPress: () => void
  enabled?: boolean
  loading?: boolean
  light?: boolean
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false
}: Props) {
  return (
    <Container
      color={color}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
    >
      {
        loading
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Title light={light}>{title}</Title>
      }
    </Container>
  )
}