import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../redux/actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Edit' : 'Create'} a Recipe
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            setPostData({ ...postData, creator: event.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(event) =>
            setPostData({ ...postData, message: event.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setPostData({ ...postData, tags: event.target.value.split(',') })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
