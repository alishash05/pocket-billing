/*
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Username, Password} from '../service/alishaSlice.js';

const UserStyle = createUseStyles({
    user: {
        borderRadius: '5px',
        display: 'flex',
        padding: '8px 5%', 
        minWidth: '30px',
        maxWidth: '360px',
        marginTop: '2%',
        marginLeft: '2%',
        background: 'white',
        color: 'black',
        width: '90%', 
        boxSizing: 'border-box',
    },
    error: {
        borderColor: 'red', 
    },
});

function UserInput(props){
    const newUser = UserStyle();
    const dispatch = useDispatch();
    
    const onChange = (e) => {
        props.onChange(e.target.value);
        if (props.id === 'username') {
            dispatch(Username(e.target.value)); 
        } else if (props.id === 'password') {
            dispatch(Password(e.target.value)); 
        }
    }


    return (
        <input
            id={props.id}
            className={`${newUser.user} ${props.error ? newUser.error : ''}`} 
            type={props.type}
            onChange={onChange}
            placeholder={props.placeholder}
            error={props.error}
        />
    );
}
export default UserInput*/
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Username, Password } from '../service/loginSlice';

const useStyles = createUseStyles({
  user: {
    borderRadius: '5px',
    display: 'flex',
    padding: '8px 5%',
    minWidth: '30px',
    maxWidth: '360px',
    marginTop: '2%',
    marginLeft: '2%',
    background: 'white',
    color: 'black',
    width: '90%',
    boxSizing: 'border-box',
  },
  error: {
    borderColor: 'red',
  },
});

function UserInput(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    props.onChange(e.target.value);
    if (props.id === 'username') {
      dispatch(Username(e.target.value));
    } else if (props.id === 'password') {
      dispatch(Password(e.target.value));
    }
  };

  return (
    <input
      id={props.id}
      className={`${classes.user} ${props.error ? classes.error : ''}`}
      type={props.type}
      onChange={handleChange}
      placeholder={props.placeholder}
      error={props.error}
    />
  );
}

export default UserInput