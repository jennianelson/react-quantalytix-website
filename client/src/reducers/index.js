import { combineReducers } from 'redux';
import menu_Reducer from './menu_reducer';

export default combineReducers({
  menuCollapsed: menu_Reducer
});