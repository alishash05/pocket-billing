import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from "../../service/loginSlice";
import axios from 'axios';

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
    "& .error_input": {
      fontFamily: "sans-serif",
      outline: "0",
      background: "#f2f2f2",
      width: "100%",
      border: "1px solid red",
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
      cursor: "pointer",
    },
    "& button:hover, & button:active, & button:focus": {
      background: "#43A047",
    },
    message: {
      margin: "15px 0 0",
      color: "#b3b3b3",
      fontSize: "12px",
      fontFamily:"sans-serif",
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
    "& :before, :after": {
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
        "& a": {
          color: "#000000",
          textDecoration: "none",
        }
      }
    },
  },
  body: {
    fontFamily: "sans-serif",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  errorMessage: {
    color: 'red',
    margin: '15px 0',
  },
});

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const onChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUserInput(value);
    } else if (id === "password") {
      setPassInput(value);
    }
    setError('');
  }

  const login = async () => {
    if (!userInput.match(isValidEmail) || passInput === '') {
      setError("Please Enter Correct Email and Password.");
      return;
    }
    try {
    //  await dispatch(fetchLogin(userInput, passInput));
      navigate('/dashboard');
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <div className={classes.loginPage}>
      <div className={classes.form}>
        <form className={classes.loginForm}>
          <input  type="text"  id="username"  value={userInput}  onChange={onChange}  placeholder="Username"  className={error && !userInput.match(isValidEmail) ? 'error_input' : ''}  />
          <input  type="password"  id="password"  value={passInput}  onChange={onChange}  placeholder="Password"  className={error && passInput === '' ? 'error_input' : ''} />
          {error && <p className={classes.errorMessage}>{error}</p>}
          <button type="button" onClick={login}>Login</button>
          <p className={classes.message}>Not registered? <a href="signIn#">Create an account</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
