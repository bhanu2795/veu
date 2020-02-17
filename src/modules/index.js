import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';

import app from './app';
import navigator from './navigator';
import register from './Register';

const config = {
  key: 'root',
  whitelist: [
    'Register'
  ],
  storage: AsyncStorage,
};

const appReducer = {
  app,
  navigator,
  register
};

export default persistCombineReducers(config, appReducer);
