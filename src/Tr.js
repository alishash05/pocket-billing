/*import React from 'react';
import { createUseStyles } from 'react-jss';
import Td from './td';

const Rdata = createUseStyles({
  rowitem: {
	display: 'flex',
    flexFlow: 'nowrap',
    width: '100%',
	flexDirection: 'row', 
    height: '34px',
    background: 'white',
    marginInline: 'auto',
	fontSize: '18px',
    alignItems:'center',
	paddingBottom:'0px',
    '@media (max-width: 500px)': {
      flexDirection: 'row',
    },

	
},

 rowitem1: {
	display: 'flex',
    flexFlow: 'nowrap',
    width: '100%',
    height: '30px',
    background: 'lightgray',
    marginInline: 'auto',
	fontSize: '18px',
    alignItems:'center',
	paddingBottom:'9px',
	
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
      width: '0.1%',
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
  },

rowitem_2: {
	//backgroundColor:'black',
	flexGrow: 1,
    '&:nth-child(1)': {
      width: '12%',
	 
	  },
    '&:nth-child(2)': {
      width: '5%',
    },
    '&:nth-child(3)': {
      width: '13%',
    },
	'&:nth-child(4)': {
      width: '1%',
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
      width: '13%',
    },
  },
  });
  

function Tr(props) {
  const newRdata = Rdata();
  const tdData =(Object.keys(props.content));
  console.log(tdData);
  console.log(props.content);


if(props.evenOdd){
	return (

<div className={newRdata.rowitem}>
{tdData.map((item, index)=>{
	

	return(
		<div  className={newRdata.rowitem_1} key={index} >
<div>< Td data={item} value = {props.content} hoc2={props.hoc1} hoc1={props.hoc2}/></div>
		</div>);

})}
        	<button variant="contained" style={{backgroundColor:'#00bcd4d6' , height:'25px',border:'none',borderRadius:'6px'}} onClick={() => props.deleteRow(props.index)}>Delete</button>

</div>
  );
}else{
return (

<div className={newRdata.rowitem1}>
{tdData.map((item, index)=>{
	console.log(item,">>>item");

	return(
		<div className={newRdata.rowitem_1}   key={index} >
		<div>< Td data={item} value = {props.content}  order2={props.order1} /></div>
		</div>);
})}
        	<button variant="contained" style={{backgroundColor:'#00bcd4d6' , height:'25px',border:'none',borderRadius:'25px'}} onClick={() => props.deleteRow(props.index)}>Delete</button>

</div>
  );
}
}
export default Tr*/
import React from 'react';
import { createUseStyles } from 'react-jss';
import Td from './td';

const useStyles = createUseStyles({
  rowitem: {
    display: 'flex',
    flexFlow: 'nowrap',
    width: '100%',
    flexDirection: 'row',
    height: '34px',
    background: 'white',
    marginInline: 'auto',
    fontSize: '18px',
    alignItems: 'center',
    paddingBottom: '0px',
    '@media (max-width: 500px)': {
      flexDirection: 'row',
    },
  },
  rowitem1: {
    display: 'flex',
    flexFlow: 'nowrap',
    width: '100%',
    height: '30px',
    background: 'lightgray',
    marginInline: 'auto',
    fontSize: '18px',
    alignItems: 'center',
    paddingBottom: '9px',
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
      width: '0.1%',
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
  },
  rowitem_2: {
    flexGrow: 1,
    '&:nth-child(1)': {
      width: '12%',
    },
    '&:nth-child(2)': {
      width: '5%',
    },
    '&:nth-child(3)': {
      width: '13%',
    },
    '&:nth-child(4)': {
      width: '1%',
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
      width: '13%',
    },
  },
  button: {
    backgroundColor: 'lightgray',
    height: '25px',
    border: 'none',
    borderRadius: '6px',
    marginRight: '5px',
	border: '1 px solid gray',
		
  },
});

function Tr(props) {
  const classes = useStyles();

  return (
    <div className={props.evenOdd ? classes.rowitem : classes.rowitem1}>
      {Object.keys(props.content).map((item, index) => (
        <div className={classes.rowitem_1} key={index}>
          <Td data={item} value={props.content} order2={props.order1} />
        </div>
      ))}
      <button className={classes.button} onClick={() => props.deleteRow(props.index)}>
        Delete
      </button>
    </div>
  );
}

export default Tr;
