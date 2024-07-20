/*import React from 'react';
import { createUseStyles } from 'react-jss';
//import Hoc from './hoc.js';

const Tdata = createUseStyles({
item: {
    display: 'flex',
   //border: '1px solid gray',
    width: '100%',
  //  height: '34px',
 //  background: 'gray',
	color:'gray',
	alignItems:'center',
	fontSize: '15px',
	padding:'3px',
	paddingBottom:'0px',
  },
});

function Td(props) {

const newTdata = Tdata();
const value = props.value[props.data];
console.log(props.tableComp,"props.tableComp");
console.log(props.hoc2,"checking the value of hoc1");

return (
    <div className={newTdata.item}>
        {value}
		{props.order2}
		{props.check}
	</div>
);
}

export default Td
*/
import React from 'react';
import { createUseStyles } from 'react-jss';

const Tdata = createUseStyles({
item:{
    display: 'flex',
    width: '100%',
	color:'gray',
	alignItems:'center',
	fontSize: '15px',
	padding:'3px',
	paddingBottom:'0px',
},
});

function Td({ data, value, order2 }){
const newTdata = Tdata();
console.log(data,'data');
console.log(value,'value');
console.log(order2,'order2');

return(
    <div className={newTdata.item}>
		{value[data]}
    </div>
  );
}

export default Td;
