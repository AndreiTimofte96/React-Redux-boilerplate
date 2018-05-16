// import * as types from '../constants/actionTypes';
//  import boxData from '../serverData';
// import axios from 'axios';
// // let apiBox = 'http://api-1839815971.eu-west-1.elb.amazonaws.com:1337/api/v1/backend/getSolutionsIndex?feelit=1';


// export function getBoxData() {
//     return function (dispatch) {

//         dispatch({
//             type: types.GET_BOX_DATA_MAIN_START
//         });
//         axios.get(apiBox)
//             .then(function (response) {
//                 // console.log(response);
//                 const array = [];
//                 if (response !== null && JSON.parse(response.data[0]).success === "true") {

//                     for (let index = 1; index < response.data.length; index++) {
//                         array[index - 1] = response.data[index];
//                     }

//                     // console.log(array);
//                     dispatch({
//                         type: types.GET_BOX_DATA_MAIN_SUCCESS,
//                         data: array,
//                         error: false,
//                         errorText: ''
//                     });
//                 } else {
//                     dispatch({
//                         type: types.GET_BOX_DATA_MAIN_FAILED,
//                         error: true,
//                         errorText: 'Cannot get boxData from server, please try again!'
//                     });
//                 }
//             });
//     };
// }
