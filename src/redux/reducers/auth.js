import { AUTH, LOGOUT } from '../../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    case LOGOUT:
      console.log('LOGOUT fire ');
      localStorage.setItem('profile', null);
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
