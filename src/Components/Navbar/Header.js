import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from "./style";
import decode from "jwt-decode";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from "@material-ui/icons/Person";

import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


import { logout } from "../../Redux/Actions/authAction";
const Header = () => {
  const classes = useStyles();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler();
    }

    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [location]);
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Link to="/">
          <Typography className={classes.heading} variant="h2" align="center">
           Jomato{" "}
          </Typography>
          </Link>

        </div>
       

        <Toolbar className={classes.toolbar}>
          {user?.data ? (
            <>
            
              <div>
                
                  <PersonIcon fontSize="large" />
                   <span>{user.data.name}</span> 
               
              </div>

              <div >
              <Button onClick={logoutHandler}>
                <ExitToAppIcon fontSize="large" />
                 <span></span>
              </Button>
              </div>

              
            </>
          ) : (
            <>
              <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
            >
            Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              color="primary"
            >Register</Button>
         
              
            
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
