import React from 'react';
import { PHOTO_GET } from '../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFecth from '../useFecth';
import PhotoContent from './PhotoContent';
import styled from 'styled-components';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, load, error, request } = useFecth();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const Modal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
    @media (max-width: 768px) {
      padding: 0rem calc(2rem + 15px) 2rem 2rem;
    }
  `;

  function handleOutSide(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <Modal onClick={handleOutSide}>
      {error && <Error error={error} />}
      {load && <Loading />}
      {data && <PhotoContent data={data} style="36rem 20rem" heigth="36rem" />}
    </Modal>
  );
};

export default FeedModal;
