import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Noto Serif Toto', serif;
  font-size: 3rem;
  color: #303030;
  margin-bottom: 24px;
  position: relative;
  letter-spacing: 0.1rem;
  z-index: 1;
  &::before {
    content: ' ';
    height: 24px;
    width: 24px;
    top: 20px;
    left: -4px;
    z-index: -1;
    border-radius: 4px;
    background-color: #fb1;
    position: absolute;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const Título = ({ text }) => {
  return <Title>{text}</Title>;
};

export default Título;
