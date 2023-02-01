import React from 'react';
import styled from 'styled-components';
import Pic from '../../Assets/login.jpg';
import Título from '../Título';
import TítuloH2 from '../TítuloH2';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import LostPass from './LostPass';
import Head from '../../Head';
import Register from './Register';
// import Post from '../Conta/Post';
import { UserContext } from '../../UserContext';
// import { TOKEN_POST, USER_GET } from '../../api';
import LoginReset from './LoginReset';
import Error from '../../Helper/Error';

const Container = styled.div`
  display: grid;
  max-width: 90rem;
  grid-template-columns: 2fr 1fr;
  min-height: 100vh;
  gap: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  align-self: center;
  justify-self: center;
  display: flex;
  width: 100%;
  padding-right: 2rem;
  margin-top: 1.2rem;
  margin-bottom: 4rem;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0rem 2rem 0rem 2rem;
    box-sizing: border-box;
    margin-bottom: 0;
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem 0rem 2rem;
    box-sizing: border-box;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LostPassword = styled.p`
  font-size: 1.2rem;
  margin-top: 3rem;
  padding-bottom: 0.3rem;
  margin-bottom: 1.3rem;
  font-family: 'Roboto';
  color: #303030;
  border-bottom: 0.2rem solid rgba(0, 0, 0, 0.1);
  max-width: max-content;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    scale: calc(1.08);
  }
`;

const Dogs = styled.img`
  object-fit: cover;
  min-height: 100vh;
  margin-top: -100px;
  background-size: cover;
  cursor: pointer;
  @media (max-width: 520px) {
    display: none;
  }
`;

const Login = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { userLogin, error, load, login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  async function handleSubmit(event) {
    event.preventDefault();
    if (user && password) {
      userLogin(user, password);
    }
  }

  return (
    <>
      <Head title="Login" />
      <Routes>
        <Route path="lostpass" element={<LostPass />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<LoginReset />} />
        <Container>
          <Dogs src={Pic} alt="" />

          <Form onSubmit={handleSubmit}>
            <Título text="Login" />
            <Input
              label="Usuário"
              type="text"
              onChange={({ target }) => setUser(target.value)}
              value={user}
              setValue={setUser}
            />
            <Input
              label="Senha"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              setValue={setPassword}
            />
            {load ? (
              <Button disabled="disabled" text="Carregando..." />
            ) : (
              <Button text="Entrar" />
            )}
            {<Error error={error} />}
            <Infos>
              <LostPassword>
                {' '}
                <NavLink to="lostpass">Perdeu a senha?</NavLink>
              </LostPassword>
              <TítuloH2 text="Cadastre-se" />
              <NavLink to="register">
                <Button text="Cadastro" />
              </NavLink>
            </Infos>
          </Form>
        </Container>
      </Routes>
    </>
  );
};

export default Login;
