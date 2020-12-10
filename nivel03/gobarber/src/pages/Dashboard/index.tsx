import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Header } from './styles';
import Logo from '../../assets/logo.svg';
import User from '../../assets/user.png';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  return (
    <Header>
      <div>
        <img src={Logo} alt="Logo GoBarber" />

        <div>
          <img src={User} alt="" />
          <div>
            <span>Bem vindo,</span>
            <p>{user.name}</p>
          </div>
        </div>
        <button type="button" onClick={() => signOut()}>
          <FiLogOut size={20} />
        </button>
      </div>
    </Header>
  );
};
export default Dashboard;
