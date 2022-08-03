import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import logo from '../../images/png-transparent-drawing-can-pot-illustration-pot-and-spoon-miscellaneous-kitchen-soup-removebg-preview.png';

import useStyles from './styles.js';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  // console.log(user);
  const handleLogout = async () => {
    // const result = response?.credential;
    // const result = await createOrGetUser(response);
    // console.log(result);
    try {
      dispatch({ type: LOGOUT });
      setUser(null);
      console.log('signout fire');
    } catch (error) {
      console.log('googleLogout  error: ', error);
    }
  };

  return (
    <AppBar
      // style={{
      //   width: '34vw',
      //   margin: '40px auto',
      //   backgroundColor: '#71192a',
      // }}
      position="static"
      color="inherit"
      className={classes.appBar}
    >
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">
          Pot & Ladle
        </Typography>
        <img
          className={classes.image}
          src={logo}
          alt="memories"
          height="60"
          width="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>

            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="primary"
              onClick={() => {
                googleLogout();
                handleLogout();
              }}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
