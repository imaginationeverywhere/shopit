import React from 'react';
import Search from './Search.jsx';
import Image from 'next/dist/client/image';
import shopitLogo from '../images/shopit_logo.png';

const Header = () => {
  return (
    <nav className="header">
      <Image src={shopitLogo}/>
      <Search />
    </nav>
  );
};

export default Header;