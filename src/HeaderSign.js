<<<<<<< HEAD
/*import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sign: {
    backgroundColor: 'white',
    width: '45px',
    height: '45px',
    backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Eo_circle_pink_white_letter-e.svg/1024px-Eo_circle_pink_white_letter-e.svg.png)`,
    backgroundSize: 'cover',
	marginLeft:'20px',
	'@media (min-width: 30em) and (max-width: 50em)': {
      width: '280px', 
      height: '95px',
	}
  },
});

function HeaderSign() {
  const classes = useStyles();
  return (
    <div className={classes.sign}></div>
  );
}

export default HeaderSign
*/
=======
>>>>>>> feature-alisha-changes
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sign: {
    backgroundColor: 'white',
    width: '45px',
    height: '45px',
    backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Eo_circle_pink_white_letter-e.svg/1024px-Eo_circle_pink_white_letter-e.svg.png)`,
    backgroundSize: 'cover',
    marginLeft: '20px',
  },
  '@media only screen and (max-width: 600px)': { 
    sign: {
      width: '100%',
      height: '95px', 
      marginLeft: '0', 
    },
  },
});

function HeaderSign() {
  const classes = useStyles();
  return (
    <div className={classes.sign}></div>
  );
}

export default HeaderSign;
