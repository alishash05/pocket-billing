import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import NextPage from './NextPage.js';
import store from './store/store.js';
import Login from './view/login/login.js';
import SignIn from './view/login/signIn.js';
import DashBoard from "./view/dashboard/dashboard.js";
import { setupInterceptor } from "./util/http.js";
import Header from './component/header/header.js';

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
function App(props){
const classes = useStyles();

return(
<div className={classes.color}>
    <Provider store={store}>
    <Header />
        <Router>
				<Routes> 
				<Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
				<Route path="/next" element={<NextPage />} />
			</Routes> 
        </Router>
    </Provider>
</div>
);
}

export default App