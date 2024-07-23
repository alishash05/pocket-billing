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
  loginPage: {
    width: "360px",
    padding: "8% 0 0",
    margin: "auto",
  },


  form: {
    position: "relative",
    zIndex: 1,
    background: "#FFFFFF",
    maxWidth: "360px",
    margin: "0 auto 100px",
    padding: "45px",
    textAlign: "center",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
    "& input": {
      fontFamily: "sans-serif",
      outline: "0",
      background: "#f2f2f2",
      width: "100%",
      border: "0",
      margin: "0 0 15px",
      padding: "15px",
      boxSizing: "border-box",
      fontSize: "14px",
    },
    "& button": {
      fontFamily:"sans-serif",
      textTransform: "uppercase",
      outline: "0",
      background: "#4CAF50",
      width: "100%",
      border: "0",
      padding: "15px",
      color: "#FFFFFF",
      fontSize: "14px",
      webkitTransition: "all 0.3 ease",
      transition: "all 0.3 ease",
      cursor: "pointer",
    },

    "& button:hover, & button:active, & button:focus": {
      background: "#43A047",
    },
    message:{
      margin: "15px 0 0",
      color: "#b3b3b3",
      fontSize: "12px",
      "& a": {
        color: "#4CAF50",
        textDecoration: "none",
      }
    },
   registerForm: {
      display: "none",
    },
  },
  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "300px",
    margin: "0 auto",

    "& :before, :after":{
      content: "",
      display: "block",
      clear: "both",
    },
    info: {
      margin: "50px auto",
      textAlign: "center",
      "& h1": {
        margin: "0 0 15px",
        padding: 0,
        fontSize: "36px",
        fontWeight: "300",
        color: "#1a1a1a",
      },
      "& span": {
        color: "#4d4d4d",
        fontSize: "12px",
        fa: {
          color: "#EF3B3A"
        },
        "& a":{
          color: "#000000",
          textDecoration: "none",
        }
      }
    },
  },
  body:{
    background: "#76b852", /* fallback for old browsers */
    background: "rgb(141,194,111)",
    background: "linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%)",
    fontFamily: "sans-serif",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",     
  }
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
      setUsernameError(value.length < 5 || value.length > 30);
    }
    if(id === 'password'){
      setPassword(value);
      setPasswordError(value.length < 5 || value.length > 30);
    }
  }

  const handleLogin =()=>{
    if (usernameError || passwordError){
      alert('Username and password must be between 6 and 10 characters');
      return;
    }
 
 // const axios = require('axios');
  
    axios.post('http://localhost:8080/auth/login', {
  	"email":"alisha.shaikh@billing.com",
    "password": "alisha"
})
    .then ( res => {
	//	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      
	  console.log(res.data);
	  
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
  
axios.get("http://localhost:8080/api/v1//product/water")
	
.then((response) => console.log(response.data,'test'))
.catch((error) => console.log(error));


  return (
<>
<div className={classes.body}>
<div className={classes.loginPage}>
<div className={classes.form}>
<form className={classes.registerForm}>
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className={classes.message}>Already registered? <a href="#">Sign In</a></p>
    </form>

    <form className={classes.loginForm} >
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className={classes.message}>Not registered? <a href="#">Create an account</a></p>
    </form> 
</div>
</div>
</div>
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
	
</>
  );
}

export default Input
