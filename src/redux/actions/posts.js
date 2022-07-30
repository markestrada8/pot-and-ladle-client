import * as api from '../../api/index';

//ACTION CREATORS

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log('action dispatch error: ', error);
  }
  // const action = { type: 'FETCH_ALL' };

  // dispatch(action);
};
