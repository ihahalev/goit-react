import { createStore, combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';

const rootReducer = combineReducers({ contacts: contactsReducer, theme: themeReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
