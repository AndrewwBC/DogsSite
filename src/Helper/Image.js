import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
`;

const Img = styled.img`
  grid-area: 1/1;
  opacity: 0;
  border-radius: 0.4rem;
  transition: 0.2s;
`;

const Skeleton = styled.div`
  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;
`;

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton />}
      <Img onLoad={handleLoad} src="" alt={alt} {...props} />
    </Wrapper>
  );
};

export default Image;
