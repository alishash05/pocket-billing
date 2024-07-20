import React from 'react';
import { createUseStyles } from 'react-jss';

const SecondShow = createUseStyles({
picture:{
    display: 'flex',
    background:'white',
    height: '50%',
    marginLeft: '110px',
},
picture_1:{
    background: 'white',
    borderRadius: '50%',
    backgroundSize: 'cover',
    height: '50px',
    width: '50px',
    marginTop: '20px',
   },
});

function Logo(){
const newSecondShow = SecondShow();
  
return(
<div className={newSecondShow.picture}>
      <div 
		className={newSecondShow.picture_1}
        style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePCn5nc4icjzDmiqLoHivArAx0rfWhKCOrfDnAu19KqSDKcEaBsd1JxzvFkHj0sY_Exw&usqp=CAU")` }}
      ></div>

      <div
        className={newSecondShow.picture_1}
        style={{ backgroundImage: `url("https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png")` }}
      ></div>

      <div
        className={newSecondShow.picture_1}
        style={{ backgroundImage: `url("https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png")` }}
      ></div>
</div>
);
}

export default Logo
