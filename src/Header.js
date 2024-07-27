/*import react from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from './Navbar.js';
import No from './No.js';

const Show=createUseStyles({
header:{
	display:'flex',
	background:'lightgray',
	width:'99%',
	height:'40px',
	padding:'10px',
	},
subheader:{
	background:'lightgray',
	width:'48%',
	height:'35px',
	padding:'5px',	
	margin:'0px 10px 0px 0px',
	}


});

function Header(){
	const newShow=Show();
return(
<div className={newShow.header}>
<div className={newShow.subheader}>
<No />
</div>
<div className={newShow.subheader}>
<Navbar />
</div>
</div>
);
}
export default Header*/import React from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from './Navbar.js';
import No from './No.js';

const Show = createUseStyles({
  header: {
    display: 'flex',
    background: 'lightgray',
    width: '99%',
    height: '40px',
    padding: '10px',
  },
  subheader: {
    background: 'lightgray',
    width: '48%',
    height: '35px',
    padding: '5px',
    margin: '0px 10px 0px 0px',
  }
});

function Header() {
  const newShow = Show();
  return (
    <div className={newShow.header}>
      <div className={newShow.subheader}>
        <No />
      </div>
      <div className={newShow.subheader}>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
