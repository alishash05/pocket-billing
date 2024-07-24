import React from 'react';
import { createUseStyles } from 'react-jss';
import Header from '../../component/header/header';

const useStyles = createUseStyles({
    body: {
        background: "#76b852", /* fallback for old browsers */
        background: "rgb(141,194,111)",
        background: "linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%)",
        fontFamily: "sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
    }
});

function DashBoard() {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Header />
        </div>

    );
}

export default DashBoard;
