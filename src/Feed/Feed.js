import React from 'react';
import FeedFotos from './FeedFotos';
import FeedModal from './FeedModal';
import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 50rem;
  margin: 0 auto;
  gap: 1rem;
  justify-items: center;
  margin-top: 8rem;
  margin-bottom: 8rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow-y: scroll;
    gap: 1rem;
    padding: 1rem 2rem;
  }
`;

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  React.useEffect(() => {
    let wait = false;
    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <Container>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedFotos
          key={page}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </Container>
  );
};

export default Feed;
