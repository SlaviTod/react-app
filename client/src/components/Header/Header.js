import { useLocation } from 'react-router-dom';

import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navgation';
import { Buttons } from './Buttons/Buttons';
import { UserNav } from './UserNav/UserNav';
import { useScroolEvent } from '../../hooks/useScroolEvent';
import { useAuthContext } from '../../contexts/AuthContext';

import './Header.css';

export const Header = () => {

  const { isAuthenticated } = useAuthContext();

  const location = useLocation();

  const scroolAction = useScroolEvent();

  return (
    <header id="header" className={`fixed-top${location.pathname !== '/' ? ' bg-dark' : ''}
      ${scroolAction ? ' header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-lg-between">
        <Logo />

        <Navigation />

        <Buttons  />
        {isAuthenticated && <UserNav />}
      </div>
    </header>
  );
};