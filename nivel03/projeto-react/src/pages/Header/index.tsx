import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Bar } from './styles';
import logoImg from '../../assets/logogithub.svg';

interface HeaderProps {
  back?: boolean;
}

const Header: React.FC<HeaderProps> = ({ back }) => {
  return (
    <Bar>
      <Link to="/">
        <img src={logoImg} alt="Logo Github Explorer" />
      </Link>
      {back ? (
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      ) : (
        false
      )}
    </Bar>
  );
};
export default Header;
