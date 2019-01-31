import {
  BASE_URL,
  SHORTEN_LIST,
  USER_API,
  UPDATE_CURRENT_USER_DATA,
  LIST_POST_FOR_USER,
  POST_API
} from '../../../constants/Constants';
import request from '../../../utils/request';

export function loadAllData(onDoneFunc = () => {}) {
  return (dispatch, store) => {
    onDoneFunc();
  };
}

export function shortenListData() {
  return dispatch => {
    dispatch({
      type: SHORTEN_LIST
    });
  };
}

export function loadUserDataLoginSuccess(onDoneFunc, dispatch, store) {
  // loadListPostForUser(store, dispatch);
  // loadStoreInfomationForUser(dispatch, store);
  // loadListProductForUser(store, dispatch);
  loadUserProfile(store, dispatch); //In case another device or server changed the user's profile
  onDoneFunc();
}

export function loadUserProfile(store, dispatch, onDoneFunc = () => {}) {
  if (store().user && store().user.userData) {
    request
      .get(`${BASE_URL}${USER_API}/${store().user.userData.id}?fields=["$all"]`)
      .finish((err, res) => {
        if (!err) {
          dispatch({
            type: UPDATE_CURRENT_USER_DATA,
            payload: res.body.results.object
          });
          onDoneFunc();
        }
      });
  }
}
export function loadUserById(id) {
  return new Promise((resolve, reject) => {
    request
      .get(`${BASE_URL}${USER_API}/${id}?fields=["$all"]`)
      .finish((err, res) => {
        console.log('hinodi load user by id', err, res);
        if (
          !err &&
          res &&
          res.body &&
          res.body.results &&
          res.body.results.object
        ) {
          resolve(res.body.results.object);
        } else {
          reject(err);
        }
      });
  });
}
