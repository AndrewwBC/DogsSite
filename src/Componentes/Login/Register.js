import React from 'react';
import styled from 'styled-components';
import Pic from '../../Assets/login.jpg';
import Título from '../Título';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Head from '../../Head';
import useFecth from '../../useFecth';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
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
  }
`;

const Form = styled.form`
  align-self: center;
  justify-self: center;
  display: flex;
  width: 100%;
  padding-right: 2rem;
  margin-bottom: 4rem;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0rem 2rem 0rem 2rem;
    box-sizing: border-box;
    margin-bottom: 0;
  }
`;

const Dogs = styled.img`
  object-fit: cover;
  min-height: 100vh;
  margin-top: -100px;
  @media (max-width: 520px) {
    display: none;
  }
`;

const Register = () => {
  const [user, setUser] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { load, error, request } = useFecth();
  const { userLogin } = React.useContext(UserContext);
  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: user,
      email: email,
      password: password,
    });
    const response = await request(url, options);
    if (response.ok) userLogin(user, password);
  }

  return (
    <Container>
      <Head title="Cadastro" />
      <Dogs src={Pic} alt="" />
      <Form onSubmit={handleSubmit}>
        <Título text="Cadastre-se!" />
        <Input
          label="Usuário"
          type="text"
          onChange={({ target }) => setUser(target.value)}
          value={user}
          setValue={setUser}
        />
        <Input
          label="Email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Senha"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          setValue={setPassword}
        />
        {load ? (
          <Button disabled="disabled" text="Cadastrando..." />
        ) : (
          <Button text="Cadastrar" />
        )}
        <Error error={error} />
      </Form>
    </Container>
  );
};

export default Register;
