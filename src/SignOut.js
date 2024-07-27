/*import React from 'react';
import {useSelector} from 'react-redux';
function SignOut(){
const selector=useSelector((state)=>state.login);
console.log(selector,"user data");
return(
<div>
<h1>Sign Out</h1>
</div>
);
}
export default SignOut*/

import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header.js';

function SignOut(){

const {email,firstName,gender,id,image,lastName,token,username}=useSelector((state)=>state.login);
console.log(email,"email");
console.log(username,"username");
	
	{/*var A=[1,2,3];
var B=['a','b','c'];
var c=[...A,...B];
console.log(c,"spreadoperator");

var a={key:'two',firstname:'alisha'}
var b={key:'one',lastname:'shaikh',age:21}
var c={...a,...b}
console.log(c,"testttttttt");
	*/}
	
return(
<div>
<Header />
    <h1>Sign Out</h1>
	<div>
        <p>email:{email}</p>
        <p>firstName:{firstName}</p>
        <p>gender:{gender}</p>
        <p>id:{id}</p>
        <p>image:{image}</p>
        <p>lastName:{lastName}</p>
        <p>token:{token}</p>
        <p>username:{username}</p>
    </div>
</div> 
);
}
export default SignOut