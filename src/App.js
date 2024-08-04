import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
<<<<<<< HEAD
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

=======
import NextPage from './NextPage.js';
import store from './store/store.js';
import Login from './view/login/login.js';
import SignIn from './view/login/signIn.js';
import DashBoard from "./view/dashboard/dashboard.js";
import LandingPage from "./view/landingPage/LandingPage.js";
import { setupInterceptor } from "./util/http.js";
//import  UnstyledInputIntroduction from "./view/landingPage/input.js";

const useStyles = createUseStyles({
  color: {
   /// background: 'linear-gradient(135deg, #3b88f7 0%, #8b8bf9 100%)',
    maxWidth: '100%',
    minWidth: '350px',
    height:"100%",
    border: '1px solid white',
  },
});
setupInterceptor(store);
>>>>>>> feature-alisha-changes
function App(props){
const classes = useStyles();

return(
<div className={classes.color}>
    <Provider store={store}>
        <Router>
				<Routes> 
<<<<<<< HEAD
				<Route path="/" element={<Input />} />
				<Route path="/next" element={<NextPage />} />
				<Route path="/SignOut" element={<SignOut />} />
=======
				<Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
				<Route path="/next" element={<NextPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
			{/*<Route path="/input" element={< UnstyledInputIntroduction />}/>*/}
        {/* <Route path="/SignOut" element={<SignOut />} /> */}
>>>>>>> feature-alisha-changes
			</Routes> 
        </Router>
    </Provider>
</div>
);
}

export default App