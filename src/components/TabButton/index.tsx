import React from 'react';
import { Feather } from '@expo/vector-icons'

import { Container } from './styles';
import { useTheme } from 'styled-components';

interface Props {
  size: number;
  focused: boolean;
}

export function TabButton({ focused, size }: Props){
  const theme = useTheme();

  return (
    <Container focused={focused}>
      <Feather focused={focused} name="chevrons-up" size={size} color={theme.colors.white}/>
    </Container>
  );
}