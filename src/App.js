import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts';
import logo from './images/png-transparent-drawing-can-pot-illustration-pot-and-spoon-miscellaneous-kitchen-soup-removebg-preview.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles.js';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      {/* <h1 className="title">Hello!!!</h1> */}
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
            className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
