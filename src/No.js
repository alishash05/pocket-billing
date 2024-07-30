/*import React from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from './Navbar.js';

const useStyles = createUseStyles({
  no: {
    display: 'flex',
    height: '38px',
    width: '200px',
    backgroundColor: 'lightgray',
    margin: '0px 0px 0px 60px',
    alignItems: 'center',
	fontSize: '14px',
    color: 'blue',
  },
  img: {
    height: '37px',
    width: '40px',
    backgroundColor: 'lightgray',
  //  backgroundImage: `url("https://i.pinimg.com/736x/62/af/2d/62af2d09356db4adfbc75146cc09e067.jpg")`, 
    backgroundImage: `url("https://png.pngitem.com/pimgs/s/268-2684180_grey-phone-icon-png-clipart-png-download-grey.png")`, 
    backgroundSize: 'cover',
    color: 'blue',
  },
});

function No() {
  const classes = useStyles(); 
  return (
    <>
      <div className={classes.no}> 
	  <div className={classes.img}></div> 
	  +91 8971923442
      </div>
    </>
  );
}

export default No*/
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  no: {
    display: 'flex',
    height: 'auto', 
 //   backgroundColor: 'blue',
    alignItems: 'center',
    fontSize: '14px',
    color: 'blue',
    padding: '10px', 
	margin:'-14px 0px',
  },
  img: {
    height: '40px',
    width: '40px',
    backgroundColor: 'lightgray',
    backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/027/179/401/small/telephone-phone-call-icon-symbol-free-png.png")`,
    backgroundSize: 'cover',
    marginRight: '10px', 
  },
});

function No() {
  const classes = useStyles();
  return (
    <div className={classes.no}>
      <div className={classes.img}></div>
      +91 8971923442
    </div>
  );
}

export default No;
