import React from 'react';
import Pic from '../../Assets/login.jpg';
import styled from 'styled-components';
import Head from '../../Head';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { PASSWORD_RESET } from '../../api';
import useFecth from '../../useFecth';
import Título from '../Título';
import { useNavigate } from 'react-router-dom';

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
  margin-top: -12rem;
  align-self: center;
  justify-self: center;
  display: flex;
  width: 100%;
  padding-right: 2rem;
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
const LoginReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const [newPass, setNewPass] = React.useState('');
  const { error, load, request } = useFecth();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (newPass) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: newPass,
      });
      const { response } = await request(url, options);
      console.log(response);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <Container style={{ marginTop: '4rem' }}>
      <Head title="Cadastro" />
      <Dogs src={Pic} alt="" />
      <Form onSubmit={handleSubmit}>
        <Título text="Resete a senha" />
        <Input
          label="Nova senha"
          type="password"
          name="password"
          onChange={({ target }) => setNewPass(target.value)}
          value={newPass}
          setValue={setNewPass}
        />
        {load ? (
          <Button disable={true} text="Resetando..." />
        ) : (
          <Button text="Resetar" />
        )}
      </Form>
    </Container>
  );
};

export default LoginReset;
