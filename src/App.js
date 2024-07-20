import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import Input from './login/Input.js';
import NextPage from './NextPage.js';
import SignOut from './SignOut.js'; 
import store from './store/store.js';
import Header from './Header.js';

const useStyles = createUseStyles({
  color: {
    background: 'linear-gradient(135deg, #3b88f7 0%, #8b8bf9 100%)',
    maxWidth: '1400px',
    minWidth: '350px',
    border: '1px solid white',
  },
});

function App(props){
const classes = useStyles();

return(
<div className={classes.color}>
    <Provider store={store}>
        <Router>
				<Routes> 
				<Route path="/" element={<Input />} />
				<Route path="/next" element={<NextPage />} />
				<Route path="/SignOut" element={<SignOut />} />
			</Routes> 
        </Router>
    </Provider>
</div>
);
}

export default App