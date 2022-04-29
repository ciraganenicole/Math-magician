/* eslint-disable jsx-quotes */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

const Header = () => {
  const data = [
    {
      id: 1,
      name: 'Home',
      url: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      url: '/calculator',
    },
    {
      id: 3,
      name: 'Quotes',
      url: '/quotes',
    },
  ];
  return (
    <header className='header'>
      <span className='span'>Math magician</span>
      <ul className='list'>
        {data.map(({ id, name, url }) => (
            <NavLink key={id} to={url}>
            <li>{name}</li>
          </NavLink>
        ))}
      </ul>
      <span className='hidden menu'>Menu</span>
    </header>
  );
};

export default Header;
