/*import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserInput from '../component/UserInput.js';
import Button from '../component/Button.js';
import Name from '../component/Name.js';
import Checkbox from '../component/Checkbox.js';
import SignIn from '../signin/SignIn.js';
import Logo from '../component/Logo.js';
import { useDispatch } from 'react-redux';
import { Email,FirstName,Gender,Id,Image,LastName,Token,Username} from '../service/loginSlice.js';


const ButtonStyle = createUseStyles({
  show:{
    borderRadius: '25px',
    background: 'white',
    width: '90%',
    maxWidth: '380px',
    margin: '50px auto',
    padding: '20px',
    boxSizing: 'border-box', 
	},
box:{
    background: 'white',
    color: 'white',
    textAlign: 'center',
	},
});

function Input(){
	
	const newButtonStyle = ButtonStyle();
	const navigate = useNavigate();
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [userError, setUserError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	    const dispatch = useDispatch();

const uservalue =(id,val)=>{
    if(id ==='username'){
		setUser(val);
		setUserError(val.length < 6 || val.length > 10);
    }
    if(id ==='password'){
		setPassword(val);
		setPasswordError(val.length < 6 || val.length > 10); 
    }
	}

const logbutton =()=>{
    if (userError || passwordError){ 
		alert('Username and password must be between 6 and 10 characters');
		return;
    }
    
	axios.post('https://dummyjson.com/auth/login',{
    username: user,
    password: password, 
    })
    .then(res =>{
		 dispatch(res.data); 
		console.log(res.data);
		navigate('/next');
    })
	}

return(
<div className={newButtonStyle.show}>
	<Name />
    <UserInput
        onChange={(value) => uservalue('username', value)}
        type={'text'}
        id={'username'}
        placeholder={'Username or Email'}
        className={newButtonStyle.box}
        error={userError} />
	<UserInput
        onChange={(value) => uservalue('password', value)}
        type={'password'}
        id={'password'}
        placeholder={'Enter your Password'}
        className={newButtonStyle.box}
        error={passwordError} />
    <Checkbox />
    <Button onClick={logbutton} />
    <SignIn />
    <Logo />
</div>
);
}
export default Input
*/
//username: 'kminchelle',
//password: '0lelplR',

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserInput from '../component/UserInput';
import Button from '../component/Button';
import Name from '../component/Name';
import Checkbox from '../component/Checkbox';
import SignIn from '../signin/SignIn';
import Logo from '../component/Logo';
import { useDispatch } from 'react-redux';
import { Username, Email, FirstName, Gender, Id, Image, LastName, Token } from '../service/loginSlice';

const useStyles = createUseStyles({
  show: {
    borderRadius: '25px',
    background: 'white',
    width: '90%',
    maxWidth: '380px',
    margin: '50px auto',
    padding: '20px',
    boxSizing: 'border-box',
  },
  box: {
    background: 'white',
    color: 'black',
    textAlign: 'center',
  },
});

function Input() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange =(id, value) =>{
    if(id === 'username'){
      setUsername(value);
      setUsernameError(value.length < 20 || value.length > 30);
    }
    if(id === 'password'){
      setPassword(value);
      setPasswordError(value.length < 10 || value.length > 30);
    }
  }

  const handleLogin =()=>{
    if (usernameError || passwordError){
      alert('Username and password must be between 6 and 10 characters');
      return;
    }

    axios.post('https://recruitment-api.pyt1.stg.jmr.pl/login', {
      username: username,
      password: password,
    })
    .then(res => {
      const userData = res.data;
      dispatch(Username(userData.username));
      dispatch(Email(userData.email));
      dispatch(FirstName(userData.firstName));
      dispatch(Gender(userData.gender));
      dispatch(Id(userData.id));
      dispatch(Image(userData.image));
      dispatch(LastName(userData.lastName));
      dispatch(Token(userData.token));
      console.log(userData);
      navigate('/next');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className={classes.show}>
      <Name />
      <UserInput
        onChange={(value) => handleInputChange('username', value)}
        type={'text'}
        id={'username'}
        placeholder={'Username or Email'}
        className={classes.box}
        error={usernameError}
      />
      <UserInput
        onChange={(value) => handleInputChange('password', value)}
        type={'password'}
        id={'password'}
        placeholder={'Enter your Password'}
        className={classes.box}
        error={passwordError}
      />
      <Checkbox />
      <Button onClick={handleLogin} />
      <SignIn />
      <Logo />
    </div>
  );
}

export default Input
   
//    username: 'emilys',
//  password: 'emilyspass',


 