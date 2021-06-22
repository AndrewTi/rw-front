import { combineReducers } from 'redux';
import popups from './popup';
import currentUser from './currentUser';
import collections from './collections';
import tags from './tags';


export default combineReducers({
    popups,
    currentUser,
    collections,
    tags
});