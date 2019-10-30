import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Links = styled(Link)`
  text-decoration: none;
  color: grey;
  font-size: 1.6rem;
  padding: 1%;
  border: 2px solid grey;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Links to='/'>Home</Links>
      <Links to='/about'>About</Links>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
