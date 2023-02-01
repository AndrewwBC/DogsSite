import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Título from '../Componentes/Título';
import PhotoComents from './PhotoComents';
import { UserContext } from '../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, style, heigth }) => {
  const Container = styled.div`
    display: grid;
    margin-top: 8rem;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: ${style};
    height: ${heigth};
    color: black;
    overflow: hidden;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      overflow-y: scroll;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    &::-webkit-scrollbar {
      border-radius: 1rem;
      width: 0.6rem;
      background-color: #404040;

      color: red;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #fb1;
      border-radius: 1rem;
      height: 0.2rem;
    }
  `;

  const Description = styled.div`
    background-color: white;
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 36rem;
    padding: 2rem 2rem 0rem 2rem;
  `;

  const UnList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
  `;

  const ListItem = styled.li`
    font-size: 1.2rem;
    font-family: 'Roboto';
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 1rem;
    &::before {
      content: '';
      height: 1.2rem;
      background-color: #202020;
      width: 0.2rem;
      left: -1rem;
      position: absolute;
    }
  `;

  const LinkList = styled.div`
    margin-bottom: 2rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
  `;
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <Container>
      <Image src={photo.src} alt={photo.title} />

      <Description>
        <div>
          <LinkList>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link
                style={{ color: 'grey', fontFamily: 'poppins' }}
                to={`/perfil/${photo.author}`}
              >
                @{photo.author}
              </Link>
            )}
            <span style={{ color: 'grey', fontFamily: 'poppins' }}>
              {photo.acessos}
            </span>
          </LinkList>

          <Link to={`/foto/${photo.id}`}>
            <Título text={photo.title} />
          </Link>
          <UnList>
            <ListItem>{photo.peso} kg</ListItem>
            <ListItem>{photo.idade} anos</ListItem>
          </UnList>
        </div>
        <PhotoComents id={photo.id} comments={comments} />
      </Description>
    </Container>
  );
};

export default PhotoContent;
