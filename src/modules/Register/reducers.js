import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  addUser: null
};

const authReducer = handleActions(
  {
    [types.ADD_USER]: (state, { payload }) => ({
      ...state,
      addUser: payload,
    })
  },
  initialState
);

export default authReducer;
