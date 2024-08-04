import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    rowItem:{
        display: 'flex',
        width: '100%',
        height: '34px',
        fontSize: '18px', 
        border: '1px solid darkgray', 
        alignItems: 'center',
        '@media (max-width: 1200px)':{
            fontSize: '16px',
        },
        '@media (max-width: 900px)':{
            fontSize: '14px',
        },
        '@media (max-width: 600px)':{
            fontSize: '12px',
        },
    },
    td:{
        flex: 1, 
        color: 'gray',
        backgroundColor: '#80808036', 
        padding: '10px',
        textAlign: 'left',
        fontWeight: 'bold',
        '@media (max-width: 1200px)':{
            fontSize: '16px',
        },
        '@media (max-width: 900px)':{
            fontSize: '14px',
        },
        '@media (max-width: 600px)':{
            fontSize: '12px',
        },
    },
});

function Tr({ box }){
    const classes = useStyles();

    return (
        <div className={classes.rowItem}>
            {box.map((item, index) => (
            <div key={index} className={classes.td}>
                  {item}
            </div>
            ))}
        </div>
    );
}

export default Tr;
