import { combineReducers } from 'redux';
import popups from './popup';
import currentUser from './currentUser';


export default combineReducers({
    popups,
    currentUser,
});