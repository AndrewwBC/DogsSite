import React from 'react';
import { PHOTOS_GET } from '../api';
import Loading from '../Helper/Loading';
import useFecth from '../useFecth';
import FeedFotosItem from './FeedFotosItem';
import Error from '../Helper/Error';

const FeedFotos = ({ setModalPhoto, page, setInfinite }) => {
  const { data, load, error, request } = useFecth();
  React.useEffect(() => {
    async function fecthPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user: 0,
      });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fecthPhotos();
  }, [request, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (load) return <Loading />;
  if (data)
    return (
      <>
        {data.map((photo) => (
          <FeedFotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </>
    );
  else return null;
};

export default FeedFotos;
