import { addUser } from './actions';

const addNew = data => async (dispatch) => {
  await dispatch(addUser(data));
};

export default {
  addNew
};
