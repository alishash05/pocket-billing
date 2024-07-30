import React from 'react';
import { createUseStyles } from 'react-jss';
//import Hoc from './hoc.js';

const Thdata = createUseStyles({
  item: {
    display: 'flex',
   // border: '1px solid gray',
    width: '100%',
  //  height: '100%',
    background: 'lightgray',
    marginInline: 'auto',
	color:'gray',
	alignItems:'center',
	//padding:'3px',
	//paddingLeft:'0px',
 },
});

function Th(props) {
  const newTdata = Thdata();
  const hvalue = props.heading[props.value]; 
  console.log(hvalue);
  
return (
<>
<div className={newTdata.item}><h6>{hvalue} {props.check2}
</h6>
</div> 
</>
  
);
}

export default Th

