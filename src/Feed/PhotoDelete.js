import React from 'react';
import styled from 'styled-components';
import { PHOTO_DELETE } from '../api';
import useFecth from '../useFecth';

const DeleteButton = styled.button`
  border-radius: 0.2rem;
  background-color: #c9c9c9;
  padding: 0.2rem 0.6rem;
  color: #303030;
  border: none;
  font-family: 'Poppins';
  font-size: 0.9rem;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #202020;
    color: white;
  }
`;

const PhotoDelete = ({ id }) => {
  const { load, request } = useFecth();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return <DeleteButton onClick={handleClick}>Deletar</DeleteButton>;
};

export default PhotoDelete;
