import React from 'react';
import styled from 'styled-components';
import Pic from '../../Assets/login.jpg';
import Título from '../Título';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Head from '../../Head';
import useFecth from '../../useFecth';
import { PASSWORD_LOST } from '../../api';
import Error from '../../Helper/Error';
import { Navigate } from 'react-router-dom';

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

const LostPass = () => {
  const [recover, setRecover] = React.useState('');
  const { data, load, error, request } = useFecth();

  async function handleSubmit(event) {
    event.preventDefault();

    if (recover) {
      const { url, options } = PASSWORD_LOST({
        login: recover,
        url: window.location.href.replace('lostpass', 'reset'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <Container>
      <Head title="Recuperar Senha" />
      <Dogs src={Pic} alt="" />

      <Form onSubmit={handleSubmit}>
        <Título text="Perdeu a senha?" />
        <Input
          label="Email / Usuário"
          type="text"
          onChange={({ target }) => setRecover(target.value)}
          value={recover}
          setValue={setRecover}
        />
        {load ? (
          <Button text="Enviando" disabled={true} />
        ) : (
          <Button text="Recuperar" />
        )}
        {data ? (
          <p style={{ color: '#4c1', fontSize: '24px', marginTop: '2rem' }}>
            {data}
          </p>
        ) : null}
      </Form>

      <Error error={error} />
    </Container>
  );
};

export default LostPass;
