import React from 'react';
import {useSelector} from 'react-redux';
import Header from './Header.js';
import Header2 from './Header2.js';
import Table from './Table.js';
import Gridtable from './gridtable.js';

function NextPage(){
	const selector=useSelector((state)=>state.login);
	console.log(selector,"test");
	
return(
<>
	<Header2 />	
	<div>
<Gridtable />	
</div>
</>
);
}

export default NextPage