// import { } from '../constants/actionTypes';
// import objectAssign from 'object-assign';
import initialState from './initialState';

export default function homepageReducer(state = initialState.homepage, action) {

  //  console.log(action.data); 
  switch (action.type) {

    // case GET_BOX_DATA_MAIN_START:
    //   return objectAssign({}, state, { isStarted: true });

    // case GET_BOX_DATA_MAIN_SUCCESS:
    //   return objectAssign({}, state, { success: 'true', isStarted: false, error: action.error, errorText: action.errorText, data: action.data });

    // case GET_BOX_DATA_MAIN_STATIC_SUCCESS:
    //   return objectAssign({},state, {success: 'true', isStarted: false, error: action.error, errorText: action.errorText, staticData: action.staticData });  

    // case GET_BOX_DATA_MAIN_FAILED:
    //   return objectAssign({}, state, { success: 'false', isStarted: false, error: action.error, errorText: action.errorText });
    default:
      return state;
  }
}
