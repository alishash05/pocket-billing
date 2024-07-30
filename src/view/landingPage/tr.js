import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    rowItem: {
        display: 'flex',
        width: '100%',
        height: '34px',
        fontSize: '18px',
        border: '6px solid darkgray', 
        alignItems: 'center',
    },
    cell: {
        flex: 1, 
        color: 'black',
        backgroundColor: 'lightgray', 
        padding: '10px',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '18px',
        
       
    },
});

function Tr({ box }) {
    const classes = useStyles();

    return (
        <div className={classes.rowItem}>
            {box.map((cell, index) => (
                <div key={index} className={classes.cell}>
                  {cell}
                </div>
            ))}
        </div>
    );
}

export default Tr;
