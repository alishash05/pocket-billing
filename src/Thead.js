/*import React from 'react';
import { createUseStyles } from 'react-jss';
import Th from './Th.js';
//import Hoc from './hoc.js';

const Theaddata = createUseStyles({
  rowitem: {
    display: 'flex',
    flexFlow: 'nowrap',
    width: '100%',
    height: '45px',
    background: 'pink',
    marginInline: 'auto',
	fontSize: '18px',
    alignItems:'center',
	paddingBottom:'8px',
	
  },
  
  rowitem_1: {
    flexGrow: 1,
    '&:nth-child(1)': {
      width: '24%',

    },
    '&:nth-child(2)': {
      width: '35%',
	  
    },
    '&:nth-child(3)': {
      width: '2%',
    },
	'&:nth-child(4)': {
      width: '20%',
    },
    '&:nth-child(5)': {
      width: '5%',
    },
    '&:nth-child(6)': {
      width: '6%',
    },
	    '&:nth-child(7)': {
      width: '6%',
    },
	    '&:nth-child(8)': {
      width: '2%',
    },
	    '&:nth-child(9)': {
      width: '19%',
    },
  }
  });
function Thead(props) {
  const newTheaddata = Theaddata();
  const thData = Object.keys(props.heading);
  console.log(props.heading);
  console.log(props.newtest);
  

return (
  <div className={newTheaddata.rowitem}>
 
    {thData.map((item, index) => (
      <div className={newTheaddata.rowitem_1}  key={index} >
        <div><Th heading={props.heading} value={item} check2={props.check1}/></div>
      </div>
    ))}
		 
	
  </div>
);
}
export default Thead
*/
import React from 'react';
import { createUseStyles } from 'react-jss';
import Th from './Th.js';
//import Hoc from './hoc.js';

const Theaddata = createUseStyles({
  rowitem: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    height: '45px',
    background: 'pink',
    marginInline: 'auto',
	fontSize: '18px',
    alignItems:'center',
	paddingBottom:'8px',
	
  },
  
  rowitem_1: {
    flexGrow: 1,
    '&:nth-child(1)': {
      width: '0.1%',

    },
    '&:nth-child(2)': {
      width: '0.1%',
	  
    },
    '&:nth-child(3)': {
      width: '0.1%',
    },
	'&:nth-child(4)': {
      width: '6.1%',
    },
    '&:nth-child(5)': {
      width: '0.1%',
    },
    '&:nth-child(6)': {
      width: '0.1%',
    },
	    '&:nth-child(7)': {
      width: '0.1%',
    },
	    '&:nth-child(8)': {
      width: '0.1%',
    },
	    '&:nth-child(9)': {
      width: '0.1%',
    },
  }
  });
function Thead(props) {
  const newTheaddata = Theaddata();
  const thData = Object.keys(props.heading);
  console.log(props.heading);
  console.log(props.newtest);
  

return (
  <div className={newTheaddata.rowitem}>
 
    {thData.map((item, index) => (
      <div className={newTheaddata.rowitem_1}  key={index} >
        <div><Th heading={props.heading} value={item} check2={props.check1}/></div>
      </div>
    ))}
		 
	
  </div>
);
}
export default Thead






