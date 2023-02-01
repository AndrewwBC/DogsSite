import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-family: 'Noto Serif Toto', serif;
  font-size: 28px;
  margin-bottom: 24px;
  color: #303030;
  position: relative;
  letter-spacing: 0.1rem;

  &::before {
    content: ' ';
    height: 6px;
    width: 60px;
    top: 36px;
    left: -4px;
    z-index: -1;
    border-radius: 4px;
    background-color: #c9c9c9;
    position: absolute;
  }
`;

const TítuloH2 = ({ text }) => {
  return <H2>{text}</H2>;
};

export default TítuloH2;
