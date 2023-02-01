import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../Feed/Feed';
import Título from '../Título';
import Conta from './Conta';
import styled from 'styled-components';

const ProfileCont = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Profile = () => {
  const { user } = useParams();

  return (
    <ProfileCont>
      <Conta prof={user} />
    </ProfileCont>
  );
};

export default Profile;
