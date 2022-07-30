import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';
import logo from './images/png-transparent-drawing-can-pot-illustration-pot-and-spoon-miscellaneous-kitchen-soup-removebg-preview.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles.js';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      {/* <h1 className="title">Hello!!!</h1> */}
      <AppBar position="static" color="inherit" className={classes.appBar}>
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
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
