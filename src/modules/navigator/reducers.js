import Navigator from '../../navigation/Navigator';
// import settingTypes from '../settings/types';
import { getResetAction } from '../../utils/navHelpers';
// import screens from '../../constants/screens';
import types from './types';


const getResetState = (state, routeName) =>
  Navigator.router.getStateForAction(
    getResetAction([{ routeName }], null),
    state,
  );

const navigatorReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case types.GO_TO_INITIAL_SCREEN:
    // case settingTypes.SIGN_IN:
    //   return getResetState(state, screens.HomeRoot);
    default:
      return Navigator.router.getStateForAction(action, state);
  }
};

export default navigatorReducer;
