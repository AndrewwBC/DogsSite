import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import './App.css';
import Login from './Componentes/Login/Login';
import Footer from './Componentes/Footer';
import { UserStorage } from './UserContext';
import Post from './Componentes/Conta/Post';
import Conta from './Componentes/Conta/Conta';
import ProtectedRoute from './Helper/ProtectedRoute';
import User from './Componentes/Conta/User';
import UserNav from './Componentes/Conta/UserNav';
import Feed from './Feed/Feed';
import styled from 'styled-components';
import Photo from './Feed/Photo';
import Profile from './Componentes/Conta/Profile';

const Apps = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
`;

const AppsBody = styled.main`
  flex: 1;
`;

const App = () => {
  return (
    <Apps>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <AppsBody>
            <Routes>
              <Route path="/home" element={<Feed />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<Profile />} />
            </Routes>
          </AppsBody>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </Apps>
  );
};

export default App;
