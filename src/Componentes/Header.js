import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import dog from '../Assets/dogs.svg';
import user from '../Assets/usuario.svg';
import { UserContext } from '../UserContext';

const Container = styled.header`
  padding: 20px 0px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 20px 40px 20px 40px;
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 50rem;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Poppins';
`;

// const LinkTo = styled.a`
//   font-size: 1rem;
//   font-family: 'Poppins';
// `;

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <Container>
      <Content>
        <Link to="home">
          <img src={dog} alt="Logo do site" />
        </Link>
        <Menu href="/">
          {data ? (
            <Link to="/conta">{data.nome}</Link>
          ) : (
            <Link to="/login">Login / Criar</Link>
          )}
          <img src={user} alt="" />
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
