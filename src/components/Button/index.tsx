import React from 'react'

import {
  Container,
  Title,
} from './styles'

interface Props {
  title: string
  color?: string
  onPress: () => void
}

export function Button({
  title,
  color,
  onPress
}: Props) {
  return (
    <Container color={color} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  )
}