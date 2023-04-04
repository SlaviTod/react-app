import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navgation';
import { Buttons } from './Buttons/Buttons';

import './Header.css';

export const Header = () => {

  const [isLogged, setIsLogged] = useState();

  const location = useLocation();

  return (
    <header id="header" className={`fixed-top${location.pathname !== '/' ? ' bg-dark' : ''}`}>
      <div className="container d-flex align-items-center justify-content-lg-between">
        <Logo />

        <Navigation isLogged={isLogged} />

        <Buttons isLogged={isLogged} />
      </div>
    </header>
  );
};