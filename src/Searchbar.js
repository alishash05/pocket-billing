/*import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo2 from './Logo2';
import HeaderSign from './HeaderSign';

const useStyles = createUseStyles({
  nav:{
//	  backgroundColor: 'pink',
   display: 'inline-flex',
    alignItems: 'center',
	width:'78%',
    padding:' 10px 6px',
    position:' relative',
	    border: '1px solid lightgray',
		'@media (min-width: 10em) and (max-width: 20em)': {
      width: '280px', 
      height: '95px',
    },
},
search_bar: {
    width: '20px',
    height: '20px',
    backgroundImage: `url(https://cdn-icons-png.freepik.com/512/9135/9135995.png)`,
    backgroundSize: 'cover',
	'@media (min-width: 10em) and (max-width: 20em)': {
      width: '280px', 
      height: '95px',
    },
  },
 
});

function Searchbar() {
  const classes = useStyles();

  return (
   <div className={classes.nav}>
   <div className={classes.search_bar}></div>
       search across zoho(ctrl+l)
        </div>
  );
}

export default Searchbar
*/import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nav: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '78%',
    padding: '10px 6px',
    position: 'relative',
    border: '1px solid lightgray',
  },
  search_bar: {
    width: '20px',
    height: '20px',
    backgroundImage: `url(https://cdn-icons-png.freepik.com/512/9135/9135995.png)`,
    backgroundSize: 'cover',
  },
  '@media only screen and (max-width: 600px)': { 
  nav: {
      width: '100%', 
      height: '95px', 
    },
    search_bar: {
      width: '100%', 
      height: '95px', 
    },
  },
});

function Searchbar() {
  const classes = useStyles();

  return (
   <div className={classes.nav}>
     <div className={classes.search_bar}></div>
     search across zoho(ctrl+l)
   </div>
  );
}

export default Searchbar;
