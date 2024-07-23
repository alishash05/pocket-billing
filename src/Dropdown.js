import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	dropodown:{
	height:'26px',
	backgroundColor:'white',
	width:'24%',
	maxwidth:'319px',
	border:'1px solid white',
	},
});

function Dropdown({value, onChange,options}){
	const classes= useStyles();
return(
	<select
	className={classes.dropodown}
	value={value}
	obChange={onchange}
	>
	<option value="">Items :</option>
	{options.map((option, index)=>(
	<option key={index} value={option}>
		{option}
	</option>
	))}
	</select>
);
}
export default Dropdown;