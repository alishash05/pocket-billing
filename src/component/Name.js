import react from  'react';
import {createUseStyles} from 'react-jss';

const Box=createUseStyles({
login:{	
		textAlign:'center',
},
});

function Name(){
const newBox=Box();

return(
<div className={newBox.login}>
<h1>Login</h1>
</div>	
);
}
export default Name