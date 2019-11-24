import { createStore, combineReducers } from 'redux';
import wordsReducer from './reducers/wordsReducer';
import cloudsReducer from './reducers/cloudsReducer';
import textReducer from './reducers/textReducer';


const reducer = combineReducers({
  words: wordsReducer,
  clouds: cloudsReducer,
  text: textReducer,
});

const store = createStore(reducer);

export default store;
