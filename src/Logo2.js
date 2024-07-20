/*import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
container: {
    width: '180px',
    height: '65px',
  },
logo:{
  width: '130px',
    height: '59px',
    backgroundImage: 'url(//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohologowhitebg.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'white',
	   // maxWidth: '1380px',   
		//minWidth:'768px'
  }

});

function Logo2() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}></div>
    </div>
  );
}

export default Logo2*/

/*import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '180px',
    height: '65px',
    '@media (min-width: 30em) and (max-width: 50em)': {
      width: '230px', 
      height: '99px',
    },
  },
  logo: {
    width: '130px',
    height: '59px',
    backgroundImage: 'url(//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohologowhitebg.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    '@media (min-width: 30em) and (max-width: 50em)': {
      width: '230px', 
      height: '99px',
    },
  },
});

function Logo2() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}></div>
    </div>
  );
}

export default Logo2
*/
/*import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
container: {
    width: '180px',
    height: '65px',
  },
logo:{
  width: '130px',
    height: '59px',
    backgroundImage: 'url(//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohologowhitebg.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'white',
	   // maxWidth: '1380px',   
		//minWidth:'768px'
  }

});

function Logo2() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}></div>
    </div>
  );
}

export default Logo2*/

import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '180px',
    height: '65px',
  },
  logo: {
    width: '130px',
    height: '59px',
    backgroundImage: 'url(//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohologowhitebg.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'white',
    backgroundSize: 'contain', 
  },
  '@media only screen and (max-width: 600px)': {
    container: {
      width: '100%',
      height: '95px', 
    },
    logo: {
      width: '100%', 
      height: '95px', 
    },
  },
});

function Logo2() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}></div>
    </div>
  );
}

export default Logo2;
