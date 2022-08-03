import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (res) => {
  // axios.get();
  const decodedCredential = jwt_decode(res.credential);

  // console.log('decoded response: ', decodedCredential);
  return decodedCredential;
};
