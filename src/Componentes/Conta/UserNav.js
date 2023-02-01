import React from 'react';
import Título from '../Título';
import Adicionar from '../../Assets/adicionar.svg';
import Estatisticas from '../../Assets/estatisticas.svg';
import Feed from '../../Assets/feed.svg';
import Sair from '../../Assets/sair.svg';
// import Post from './Post';
// import User from './User';
// import Graphics from './Graphics';
import styled from 'styled-components';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Container = styled.section`
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/-1;
  justify-content: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 18px;
  margin-top: -18px;
`;

const Icons = styled.img`
  display: block;
  max-width: 100%;
  padding: 12px;
  background-color: #e9e9e9;
  border: 1px solid #e9e9e9;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #c9c9c9;
    border: 1px solid grey;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
`;

const UserNav = () => {
  const { userLogout } = React.useContext(UserContext);
  return (
    <Menu>
      <Nav>
        <NavLink to="/conta">
          <Icons src={Feed}></Icons>
        </NavLink>
        <NavLink to="/conta/graphics">
          <Icons src={Estatisticas}></Icons>
        </NavLink>
        <NavLink to="/conta/post">
          <Icons src={Adicionar}></Icons>
        </NavLink>

        <Icons onClick={userLogout} src={Sair}></Icons>
      </Nav>
    </Menu>
  );
};

export default UserNav;
