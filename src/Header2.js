import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo2 from './Logo2';
import HeaderSign from './HeaderSign';
import Searchbar from './Searchbar.js';

const useStyles = createUseStyles({
header:{
	display: 'flex',
    background: 'white',
    width: '100%',
    height: '90px',
    border: '1px solid lightgray',
},
subheader:{
    position: 'relative',
    width: '100%',
    padding: '0px 30px',
    height: '72px',
},
divider:{
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1380px',
    margin: '0 auto',
},
question_mark:{
    width: '28px',
    height: '26px',
    backgroundImage: `url(https://thumbs.dreamstime.com/z/question-mark-icon-vector-illustration-123772096.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '95%',
    marginLeft: '10px',
},
'@media only screen and (max-width: 600px)':{ 
header:{
    width: '100%', 
    height: '95px', 
},
subheader:{
    width: '100%', 
    height: '95px', 
},
divider:{
    width: '100%', 
    height: '95px', 
},
question_mark:{
    width: '100%',
    height: '95px', 
},
},
});

function Header2() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.subheader}>
        <div className={classes.divider}>
          <Logo2 />
          <Searchbar />    
          <div className={classes.question_mark}></div>
          <HeaderSign  />
        </div>
      </div>
    </div>
  );
}

export default Header2