import { DeviceEventEmitter } from 'react-native';
import firebase from 'react-native-firebase';
import {
  AUTH_API,
  BASE_URL,
  UPDATE_CURRENT_TOKEN,
  UPDATE_CURRENT_USER_DATA,
  USER_API,
  ROUTE_KEY,
  SET_LOGGED_IN
} from '../../../constants/Constants';
import { alert } from '../../../utils/alert';
import request from '../../../utils/request';
import { loadUserDataLoginSuccess } from '../splash/SplashActions';
import { subscribeMessages } from '../../../utils/chatManager';
import { getUserSettingsPublic } from '../settings/SettingsActions';
import { setUserIdentity } from '../../../utils/asyncStorage';
import strings from '../../../constants/Strings';
import MySpinner from '../../view/MySpinner';
import md5 from 'react-native-md5';

export function loginSuccess(res, self, info = null, onDone = () => {}) {
  return (dispatch, store) => {
    dispatch({
      type: UPDATE_CURRENT_TOKEN,
      payload: res.body.results.token
    });

    dispatch({
      type: UPDATE_CURRENT_USER_DATA,
      payload: res.body.results.object
    });

    // getUserSettingsPublic(dispatch, store);

    // DeviceEventEmitter.emit('reloadPosts', {});//reload newsfeed component

    loadUserDataLoginSuccess(
      () => {
        alert(strings.congratulations, strings.login_success, () => {
          self.setState({ isLoading: false });
          onDone();
          dispatch({
            type: SET_LOGGED_IN,
            payload: true
          });
          // console.log('bambi login va chaun bi subscribe 2', res.body.results.object.id);
          // firebase.messaging().subscribeToTopic(res.body.results.object.id);
          // subscribeMessages(res.body.results.token, res.body.results.object.id);
          // setUserIdentity({ token: res.body.results.token, id: res.body.results.object.id });
          MySpinner.hide();
          setTimeout(() => {
            self.props.navigation.replace(ROUTE_KEY.MAIN);
          }, 100);
        });
      },
      dispatch,
      store
    );
  };
}

export function loginFail(err, self, onDone) {
  if (err === 'cancel') {
    onDone();
    self.setState({ isLoading: false });
  } else {
    alert(strings.alert, err, () => {
      onDone();
      self.setState({ isLoading: false });
    });
  }
}

export const loginPromise = (email, password) =>
  new Promise((resolve, reject) => {
    request
      .post(`${BASE_URL}${AUTH_API}/login_email`)
      .set('Content-Type', 'application/json')
      .send({
        email,
        password: md5.hex_md5(password)
      })
      .finish((err, res) => {
        if (err) {
          reject(
            res && res.body ? res.body.message : strings.network_require_fail
          );
          // onDone();
        } else {
          resolve(res);
        }
      });
  });

export const registerEmailPromise = (email, password) =>
  new Promise((resolve, reject) => {
    request
      .post(`${BASE_URL}/auth/register`)
      .set('Content-Type', 'application/json')
      .send({
        email,
        password: md5.hex_md5(password)
      })
      .finish((err, res) => {
        if (err) {
          reject(strings.network_require_fail);
          console.log('Hoang log', err);
          alert(strings.alert);
        } else {
          resolve(res);
        }
      });
  });

export function findUser(userId) {
  return new Promise((resolve, reject) => {
    request
      .get(
        `${BASE_URL}${USER_API}?fields=["$all",{"user_setting": ["$all"]}]&filter={"id":"${userId}"}`
      )
      .set('Content-Type', 'application/json')
      .finish((err, res) => {
        console.log('findUser: res', res);
        console.log('findUser: err', err);
        if (err) {
          reject(err);
        } else {
          resolve(res.body.results.objects.rows[0]);
        }
      });
  });
}
