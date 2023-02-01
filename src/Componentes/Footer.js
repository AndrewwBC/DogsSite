import React from 'react';
import styled from 'styled-components';
import dog from '../Assets/dogs.svg';

const Foot = styled.footer`
  background-color: #fb1;
  padding: 32px;
  display: flex;
  align-content: flex-end;
  justify-content: center;
  max-width: 100vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Img = styled.img`
  display: block;
  height: 1.5rem;
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-size: 18px;
`;

const Footer = () => {
  return (
    <Foot>
      <Content>
        <Img src={dog}></Img>
        <Text>Dogs. Alguns direitos reservados</Text>
      </Content>
    </Foot>
  );
};

export default Footer;
