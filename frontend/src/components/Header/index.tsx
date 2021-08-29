import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'small' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/Stockmarket">Stockmarket</Link>
      </nav>
    </header>
  </Container>
);

export default Header;