import React from 'react';
import { createUseStyles } from 'react-jss';
import Tr from './tr';
import Header from './header';

const useStyles = createUseStyles({
    tableContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        border: '0px solid black',
        fontSize: '16px', 
        '@media (max-width: 1200px)':{
            fontSize: '14px',
        },
        '@media (max-width: 900px)':{
            fontSize: '12px',
        },
        '@media (max-width: 600px)':{
            fontSize: '10px',
        },
    },
});

const dataArray = [
    { data: ['TR-7', '7', '4,569'] },
    { data: ['Khiresh Odo', '7', '7,223'] },
    { data: ['Mia Oolong', '9', '6,219'] },
];

function Table() {
    const classes = useStyles();

    return (
        <div className={classes.tableContainer}>
            <Header />
            {dataArray.map((row, index) => (
                <Tr key={index} box={row.data} />
            ))}
        </div>
    );
}

export default Table;
