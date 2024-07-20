/*
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const menustyle = createUseStyles({
  nav: {
    display: 'flex',
    width: '70%',
    height: '25px',
    padding: 5,
    marginLeft: '20%',
  },
  box: {
    display: 'inline-block',
    height: '28px',
    width: 'auto',
    margin: '0 10px',
    color: 'darkgray', 
	fontSize: '14px',   },
  space: {
    color: 'darkgray', 
    margin: '0 5px',
  },
});

function Navbar() {
  const newmenustyle = menustyle();
  
  const items = [
    { name: 'WELCOME', path: '/welcome' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'V', path: '/v' },
    { name: 'BLOG', path: '/blog' },
    { name: 'SIGN OUT', path: '/SignOut' }, 
  ];

  return (
    <div id='item' className={newmenustyle.nav}>
      {items.map((item, index) => (
        <div key={index}>
          <div className={newmenustyle.box}>
            <Link to={item.path}>{item.name}</Link>
          </div>
          {index !== items.length - 1 && ( 
            <span className={newmenustyle.space}>|</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Navbar;*/
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  nav: {
    display: 'flex',
    justifyContent: 'center', 
    flexWrap: 'wrap', 
  },
  box: {
    display: 'inline-block',
    height: '28px',
    margin: '0 10px',
    color: 'darkgray',
    fontSize: '14px',
  },
  space: {
    color: 'darkgray',
    margin: '0 5px',
  },
});

function Navbar() {
  const classes = useStyles();

  const items = [
    { name: 'WELCOME', path: '/welcome' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'V', path: '/v' },
    { name: 'BLOG', path: '/blog' },
    { name: 'SIGN OUT', path: '/SignOut' }, 
  ];

  return (
    <div className={classes.nav}>
      {items.map((item, index) => (
        <div key={index} className={classes.box}>
          <Link to={item.path}>{item.name}</Link>
          {index !== items.length - 1 && <span className={classes.space}>|</span>}
        </div>
      ))}
    </div>
  );
}

export default Navbar