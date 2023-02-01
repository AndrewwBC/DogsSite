import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_PARAM_GET } from '../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFecth from '../useFecth';
import PhotoContent from './PhotoContent';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 50rem;
  margin-top: 2rem;
  margin: 0 auto;
`;

const Photo = () => {
  const { id } = useParams();
  const { data, load, error, request } = useFecth();

  React.useEffect(() => {
    const { url, options } = PHOTO_PARAM_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (load) return <Loading />;
  if (data)
    return (
      <Section>
        <PhotoContent data={data} style="1fr" heigth="auto" />
      </Section>
    );
  else {
    return null;
  }
};

export default Photo;
