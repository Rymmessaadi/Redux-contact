
import ContactReducer from './contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux'
const store = createStore(ContactReducer, composeWithDevTools());

export default store;
