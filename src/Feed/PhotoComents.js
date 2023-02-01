import React from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../UserContext';
import PhotoComenForm from './PhotoComenForm';

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 1rem;
  padding: 0.2rem;
  position: relative;
  &::-webkit-scrollbar {
    border-radius: 50px;
    width: 0.6rem;
    background-color: #e9e9e9;

    color: red;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c9c9c9;
    border-radius: 4rem;
    height: 0.2rem;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-family: 'Poppins';
  line-height: 1.4rem;
  color: #303030;
`;

const PhotoComents = ({ comments, id }) => {
  const { login } = React.useContext(UserContext);
  const [msg, setMsg] = React.useState(() => comments);

  return (
    <>
      <Container>
        {msg.map((item) => (
          <>
            <Text key={item.id}>
              {item.comment_author}: {item.comment_content}
            </Text>
          </>
        ))}
      </Container>
      {login && <PhotoComenForm id={id} setMsg={setMsg} />}
    </>
  );
};

export default PhotoComents;
