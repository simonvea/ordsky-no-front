import { createStore, combineReducers } from 'redux';
import wordsReducer from './reducers/wordsReducer';
import cloudsReducer from './reducers/cloudsReducer';


const reducer = combineReducers({
  words: wordsReducer,
  clouds: cloudsReducer,
});

const store = createStore(reducer);

export default store;
