import React from 'react';
import { HeaderContainer } from './styles';
import Logo from '../Logo';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <Router>
        <Logo />
      </Router>
    </HeaderContainer>
  );
};

export default Header;
