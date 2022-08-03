import {
  FETCH_ALL,
  CREATE,
  DELETE,
  UPDATE,
  LIKE_POST,
} from '../../constants/actionTypes';
import * as api from '../../api/index';

//ACTION CREATORS
//ACTUALLY, THESE ARE COMBINERS WHICH CALL ACTIONS ON REDUX STATE AND SERVER -> DATABASE

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log('action dispatch error: ', error);
  }
  // const action = { type: 'FETCH_ALL' };

  // dispatch(action);
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log('action post error: ', error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log('action update error: ', error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log('action delete error: ', error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    console.log('like request action sent');
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log('action likePost error: ', error);
  }
};
