import { combineReducers } from 'redux'; 

import userReducer from '../redux/user';

export default combineReducer ({
  user: userReducer
})