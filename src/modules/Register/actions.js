import { createActions } from 'redux-actions';
import types from './types';

export const { addUser } = createActions(types.ADD_USER);
