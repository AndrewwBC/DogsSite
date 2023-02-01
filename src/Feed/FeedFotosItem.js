import React from 'react';
import styled from 'styled-components';
import Image from '../Helper/Image';
import PhotoContent from './PhotoContent';

const ImgCon = styled.div`
  border-radius: 4px;
  grid-area: 1/1;
  object-fit: cover;
  transition: 0.3s;
`;

const Span = styled.span`
  display: none;
  grid-area: 1/1;
  justify-self: center;
  align-self: center;
  color: white;
`;

const Item = styled.li`
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
  & ${ImgCon}:hover {
    opacity: 0.92;
    transition: 0.5s;
  }
  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }
  @media (max-width: 768px) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

const FeedFotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <>
      <Item onClick={handleClick}>
        <ImgCon>
          <Image src={photo.src} alt={photo.title} />
        </ImgCon>

        <Span>{photo.acessos}</Span>
      </Item>
    </>
  );
};

export default FeedFotosItem;
