import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 8px 32px;
  margin-top: 12px;
  background-color: #fb1;
  color: #303030;
  border: 3px solid #fb1;
  font-size: 18px;
  font-family: 'Roboto';
  border-radius: 4px;
  cursor: pointer;
  color: black;
  max-width: max-content;
  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    box-shadow: 0 0 0 4px #fea;
  }
  &:disabled {
    background-color: #404040 !important;
    color: white;
    border-color: #202020;
    cursor: wait;
  }
`;

const Button = ({ text, disabled }) => {
  return <Btn disabled={disabled}>{text}</Btn>;
};

export default Button;
