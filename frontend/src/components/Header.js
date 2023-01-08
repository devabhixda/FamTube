import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    logo: {
      maxWidth: 80,
    },
    textField: {
        marginInlineStart: "10vw",
        width: "50vw",
        display: "flex",
        justifyContent: "center"
    }
  });

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <img src={require('../resources/fampay.png')} alt="logo" className={classes.logo}/>
                <Typography variant="h2">
                    FamTube
                </Typography>
            </Toolbar>
        </AppBar>
    );
}