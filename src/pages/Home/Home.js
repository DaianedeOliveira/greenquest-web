import React from 'react';
import { Menu } from './components/Menu.js';
import { Toolbar } from '../../shared/index.js';
import { Hero } from './components/Hero.js';
import styled from 'styled-components';

const Container = styled.main `
  
`

export function Home () {
  return (
    <Container>
      <Toolbar />
      <Hero />
      <Menu/>
    </Container>
  )
}; 
