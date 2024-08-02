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
        '@media (max-width: 1200px)': {
            fontSize: '14px',
        },
        '@media (max-width: 900px)': {
            fontSize: '12px',
        },
        '@media (max-width: 600px)': {
            fontSize: '10px',
        },
    },
    button: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: '0',
        border: '1px solid #2196f3',
        backgroundColor: '#0b6bcb',
        width: '75px',
        color: 'white',
        fontSize: '14px',
        cursor: 'pointer',
        borderRadius: '8px',
        padding: '10px 20px',
    },
});

const dataArray = [
    { data: ['hidayat', '1000', '4-1-24','xyz'] },
    { data: ['alisha', '500', '3-1-24','abc'] },
];

function Table({ openModal }) {
    const classes = useStyles();

    return (
        <div className={classes.tableContainer}>
            <Header />
            {dataArray.map((row, index) => (
                <Tr key={index} box={row.data} />
            ))}
            <button type="button" className={classes.button} onClick={openModal}>Add</button>
        </div>
    );
}

export default Table;
