import React from 'react';
import Head from '../../Head';
import styled from 'styled-components';
// import Título from '../Título';
// import Adicionar from '../../Assets/adicionar.svg';
// import Estatisticas from '../../Assets/estatisticas.svg';
// import Feed from '../../Assets/feed.svg';
// import Sair from '../../Assets/sair.svg';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { UserContext } from '../../UserContext';
// import { Link, Route, Routes } from 'react-router-dom';
// import Conta from './Conta';
// import Graphics from './Graphics';
import UserNav from './UserNav';
import Título from '../Título';
import useFecth from '../../useFecth';
import { PHOTO_POST } from '../../api';

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
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

const Forms = styled.form`
  grid-column: 1;
  margin-top: 32px;
  @media (max-width: 768px) {
    grid-column: 1/-1;
    margin: 0 auto;
    align-self: center;
  }
`;

const Post = () => {
  const [nomePost, setNomePost] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState({});
  const { userLogout } = React.useContext(UserContext);
  const { data, error, load, request } = useFecth();

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nomePost);
    formData.append('peso', peso);
    formData.append('idade', idade);
    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
    setNomePost('');
    setPeso('');
    setIdade('');
    setImg('');
  }

  return (
    <>
      <Head title="Postagem" />

      <Container>
        <Menu>
          <Título text="Poste sua foto" />
          <UserNav />
        </Menu>

        <Forms onSubmit={handleSubmit}>
          <Input
            label="Nome"
            type="text"
            value={nomePost}
            onChange={({ target }) => setNomePost(target.value)}
          />
          <Input
            label="Peso"
            type="number"
            value={peso}
            onChange={({ target }) => setPeso(target.value)}
          />
          <Input
            label="Idade"
            type="number"
            value={idade}
            onChange={({ target }) => setIdade(target.value)}
          />
          <Input name="img" id="img" type="file" onChange={handleImgChange} />
          <Button text="Enviar" />
        </Forms>
      </Container>
    </>
  );
};

export default Post;
