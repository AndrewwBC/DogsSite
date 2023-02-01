import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p style={{ color: '#f31', margin: '1rem 0', fontSize: '1.2rem' }}>
      {error}
    </p>
  );
};

export default Error;
