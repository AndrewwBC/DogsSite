import React from 'react';
import Head from '../../Head';
import styled from 'styled-components';
import { UserContext } from '../../UserContext';
// import { Routes, Route, Link } from 'react-router-dom';

import UserNav from './UserNav';
import Título from '../Título';
import { PHOTOS_GET } from '../../api';
import useFecth from '../../useFecth';
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';
import Image from '../../Helper/Image';
import { useParams } from 'react-router-dom';

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
  }
`;

const GridPhotos = styled.section`
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  margin-left: auto;
  margin-right: auto;
  gap: 2rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 4rem;
    grid-template-columns: 1fr;
  }
`;

const Conta = ({ user, prof }) => {
  const { data, load, error, request } = useFecth();
  const [userImgs, SetUserImgs] = React.useState(null);
  React.useEffect(() => {
    async function fecthPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user,
      });
      const { response, json } = await request(url, options);
      SetUserImgs(json);
    }
    fecthPhotos();
  }, [request, user]);

  if (error) return <Error error={error} />;
  if (load) return <Loading />;
  console.log(user);
  return (
    <>
      {prof ? <Head title="Meu Perfil" /> : <Head title="Meus Posts" />}

      <Container>
        <Menu>
          {prof ? <Título text={prof} /> : <Título text="Meus Posts" />}
          {prof ? null : <UserNav />}
        </Menu>
      </Container>
      <GridPhotos>
        {userImgs &&
          userImgs.map((item) => <Image key={item.id} src={item.src} />)}
      </GridPhotos>
    </>
  );
};

export default Conta;
