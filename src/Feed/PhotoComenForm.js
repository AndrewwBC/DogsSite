import React from 'react';
import styled from 'styled-components';
import { COMMENT_POST } from '../api';
import { ReactComponent as Enviar } from '../Assets/enviar.svg';
import Button from '../Componentes/Form/Button';
import useFecth from '../useFecth';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1.4rem;

  gap: 1rem;
  @media (max-width: 1000px) {
    height: fit-content;
    bottom: 0rem;
  }
`;

const Comment = styled.textarea`
  & {
    display: block;
    border-radius: 4px;
    padding: 0.7rem;
    width: 100%;
    margin-bottom: 1rem;
    background-color: #e9e9e9;
    border: 2px solid #e9e9e9;
    transition: 0.3s;
    resize: none;
  }
  &:hover,
  &:focus {
    outline: none;
    background-color: white;
    border-color: #fb1;
    box-shadow: 0 0 0 2px #fea;
  }
`;

const Latir = styled.button`
  @keyframes Latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  border: none;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 1rem;
  color: #333;
  overflow: hidden;

  &:focus svg path,
  &:hover svg path {
    fill: #fea;
    stroke: #fb1;
  }
  &:focus svg g,
  &:hover svg g {
    animation: Latir 0.6s infinite;
  }
`;

const PhotoComenForm = ({ id, setMsg }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFecth();

  async function handleSubmit(event) {
    setComment('');
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setMsg((comments) => [...comments, json]);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Comment
        placeholder="Faça um elogio..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <Latir>
        <Enviar />
      </Latir>
    </Form>
  );
};

export default PhotoComenForm;
