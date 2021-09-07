import React from 'react'
import { fadeIn } from '@mono/styled-styles';
import { animationTime } from '@mono/constants';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  
  animation: ${fadeIn} ${animationTime} ease-in both;
  animation-duration: ${animationTime};
  animation-timing-function: ease-in;
  opacity: 0;
`;

export const A = () => {
  return (<Title>ComponentA</Title>)
}