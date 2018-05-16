import { combineReducers } from 'redux';
import homepageReducer from './homepageReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  homepageReducer,
  routing: routerReducer,
});

export default rootReducer;
