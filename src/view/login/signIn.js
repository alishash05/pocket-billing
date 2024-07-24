import React from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    show: {
        borderRadius: '25px',
        background: 'white',
        width: '90%',
        maxWidth: '380px',
        margin: '50px auto',
        padding: '20px',
        boxSizing: 'border-box',
    },
    box: {
        background: 'white',
        color: 'black',
        textAlign: 'center',
    },
    loginPage: {
        width: "360px",
        padding: "8% 0 0",
        margin: "auto",
    },


    form: {
        position: "relative",
        zIndex: 1,
        background: "#FFFFFF",
        maxWidth: "360px",
        margin: "0 auto 100px",
        padding: "45px",
        textAlign: "center",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
        "& input": {
            fontFamily: "sans-serif",
            outline: "0",
            background: "#f2f2f2",
            width: "100%",
            border: "0",
            margin: "0 0 15px",
            padding: "15px",
            boxSizing: "border-box",
            fontSize: "14px",
        },
        "& button": {
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            outline: "0",
            background: "#4CAF50",
            width: "100%",
            border: "0",
            padding: "15px",
            color: "#FFFFFF",
            fontSize: "14px",
            webkitTransition: "all 0.3 ease",
            transition: "all 0.3 ease",
            cursor: "pointer",
        },

        "& button:hover, & button:active, & button:focus": {
            background: "#43A047",
        },
        message: {
            margin: "15px 0 0",
            color: "#b3b3b3",
            fontSize: "12px",
            "& a": {
                color: "#4CAF50",
                textDecoration: "none",
            }
        },
        registerForm: {
            display: "none",
        },
    },
    container: {
        position: "relative",
        zIndex: 1,
        maxWidth: "300px",
        margin: "0 auto",

        "& :before, :after": {
            content: "",
            display: "block",
            clear: "both",
        },
        info: {
            margin: "50px auto",
            textAlign: "center",
            "& h1": {
                margin: "0 0 15px",
                padding: 0,
                fontSize: "36px",
                fontWeight: "300",
                color: "#1a1a1a",
            },
            "& span": {
                color: "#4d4d4d",
                fontSize: "12px",
                fa: {
                    color: "#EF3B3A"
                },
                "& a": {
                    color: "#000000",
                    textDecoration: "none",
                }
            }
        },
    },
    body: {
        // background: "#76b852", /* fallback for old browsers */
        // background: "rgb(141,194,111)",
        // background: "linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%)",
        fontFamily: "sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
    }
});

function SignIn() {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <div className={classes.loginPage}>
                <div className={classes.form}>
                    <form className={classes.registerForm}>
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className={classes.message}>Already registered? <a href="#">Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default SignIn;
