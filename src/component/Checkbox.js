import React from 'react';
import { createUseStyles } from 'react-jss';

const CheckboxStyle = createUseStyles({
Checkbox:{
    display: 'flex',
    height: '35px',
    marginTop: '15px',
	marginLeft:'10px',
  
},
box:{
    height: '30px',
    width: '48%',
    color: 'gray',
	
},
forgotPassword:{
	color: '#03a9f4',
	textAlign:'right',
	marginLeft:'5px',
},
});

function Checkbox(props){

const newCheckboxStyle = CheckboxStyle();

return(
<div className={newCheckboxStyle.Checkbox}>
	<div className={newCheckboxStyle.box}>
       <input type="checkbox" />Remember me
    </div>
    <div className={newCheckboxStyle.forgotPassword}><b>Forgot password?</b></div>
</div>
);
}

export default Checkbox
