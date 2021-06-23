import React from "react";
import { Link } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#e8ede1",
    marginBottom: 10,
  },
  title: { flex: 1, marginLeft: 60, color: "black" },
  buttonStyles: {
    color: "black",
    margin: "0 6px 0",
    display: "inline-block",
  },
  buttons: {
    marginRight: 60,
  },
  name: {
    fontStyle: "bold",
    fontSize: 32,
  },
}));

export default function AppBarPrimary() {
  const classes = useStyles();
  

  

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <Typography variant="h6" noWrap>
            <span className={classes.name}>Jomato</span>
          </Typography>
        </Link>

        <div className={classes.buttons}>
          <Link to="/login">
            <Button className={classes.buttonStyles}>Login</Button>
          </Link>
          <Link to="/register">
            <Button className={classes.buttonStyles} >
              Register
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
