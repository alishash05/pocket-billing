import React from 'react';
import { createUseStyles } from 'react-jss';

const CheckboxStyle = createUseStyles({
box:{
    display: 'flex',
    height: '30px',
    width: '230px',
    marginTop: '25px',
    marginLeft: '75px',
    color: 'gray',
},
forgotPassword:{
    type: 'button',
    color: '#03a9f4',
},
lineBox:{
    display:'flex',
    marginLeft: '40px',
},
line:{
    display: 'block',
    height: '2px',
    width: '101px',
    background: 'gray',
    marginTop: '10px',
    textAlign:'center',
},
});

function SignIn(props){
const newCheckboxStyle = CheckboxStyle();

return(
<>
      <div className={newCheckboxStyle.box}>
        Don't have an account?<a className={newCheckboxStyle.forgotPassword}>Sign up</a>
      </div>
	  
      <div className={newCheckboxStyle.lineBox}>
      <div className={newCheckboxStyle.line}></div>

      or connect with
      <div className={newCheckboxStyle.line}></div>
	  </div>
</>
);
}

export default SignIn

