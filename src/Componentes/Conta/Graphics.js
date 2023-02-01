import React from 'react';
import Head from '../../Head';
import UserNav from './UserNav';
import styled from 'styled-components';
import Título from '../Título';
import useFecth from '../../useFecth';
import { STATS_GET } from '../../api';
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';

const UserStats = React.lazy(() => import('./UserStats'));

const Container = styled.section`
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  margin-bottom: auto;
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

const Graphics = () => {
  const { load, data, error, request } = useFecth();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      const response = await request(url, options);
      console.log(response);
    }
    getData();
  }, [request]);

  if (load) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Graphics" />
        <Container>
          <Menu>
            <Título text="Gráficos" />
            <UserNav />
          </Menu>
        </Container>
        <UserStats data={data} />
      </React.Suspense>
    );
  else {
    return null;
  }
};

export default Graphics;
