import React from 'react';
import { createUseStyles } from 'react-jss';

const ButtonStyle = createUseStyles({
  btn: {
    //display: 'block',
    borderRadius: '15px',
    height: '38px',
    width: '90%',
    maxWidth: '360px', 
    background: '#03a9f4',
    color: 'white',
    marginTop: '15px',
    marginLeft: 'auto', 
    marginRight: 'auto',
    textAlign: 'center',
  },
});

function Button(props){
  const newButtonStyle = ButtonStyle();

return(
<button className={newButtonStyle.btn} onClick={props.onClick}>
    <b>Login</b>
</button>
);
}

export default Button