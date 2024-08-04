import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    headerContainer: {
        display: 'flex',
        width: '100%',
        background: 'gray',
        borderBottom: '1px solid gray',
        fontWeight: 'bold',
        fontSize: '18px',
    },
    headerItem: {
        flex: 1,
        color: 'white',
        padding: '10px',
        textAlign: 'leftt',
        borderRight: '1px solid gray',
       
    },
});

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerItem}>Name</div>
            <div className={classes.headerItem}>Amout</div>
            <div className={classes.headerItem}>Date</div>
            <div className={classes.headerItem}>RecivedBy</div>
        </div>
    );
}

export default Header;
