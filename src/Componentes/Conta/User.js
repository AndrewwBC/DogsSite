import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Conta from './Conta';
import Graphics from './Graphics';
import Post from './Post';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section>
      <Routes>
        <Route path="/conta/*" element={<Conta user={data.id} />} />
        <Route path="/conta/graphics" element={<Graphics />} />
        <Route path="/conta/post" element={<Post />} />
      </Routes>
    </section>
  );
};

export default User;
