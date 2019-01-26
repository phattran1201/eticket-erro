import { AsyncStorage } from 'react-native';
import moment from 'moment';
import { alert } from './alert';

export const saveListSticker = async data => {
  try {
    const oldData = await AsyncStorage.getItem('@listStickerRaovat20082018:key');
    const oldList =
      data && JSON.parse(oldData) && JSON.parse(oldData) !== [] ? JSON.parse(oldData) : [];
    await AsyncStorage.setItem(
      '@listStickerRaovat20082018:key',
      JSON.stringify([data, ...oldList])
    );
  } catch (e) {
    // console.log(e);
  }
};

export const getListSticker = async () => {
  try {
    const data = await AsyncStorage.getItem('@listStickerRaovat20082018:key');
    return data && JSON.parse(data) && JSON.parse(data) !== [] ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const setFirstTimeUseApp = async isFirstTime => {
  try {
    await AsyncStorage.setItem('@isfirsttimeuseapp:key', JSON.stringify(isFirstTime));
  } catch (e) {
    // console.log(e);
  }
};

export const getLastTimeAttendanceCheck = async () => {
  try {
    const data = await AsyncStorage.getItem('@AttendanceCheck_Chatting19122018:key');
    return data || '';
  } catch (error) {
    return '';
  }
};

export const setLastTimeAttendanceCheck = async () => {
  try {
    await AsyncStorage.setItem(
      '@AttendanceCheck_Chatting19122018:key',
      moment().format('DD-MM-YYYY')
    );
  } catch (e) {}
};

export const isFirstTimeUseApp = async () => {
  try {
    const isFirstTime = await AsyncStorage.getItem('@isfirsttimeuseapp:key');
    return isFirstTime != null ? JSON.parse(isFirstTime) : true;
  } catch (error) {
    return false;
  }
};

//
export const setUserIdentity = async userInfo => {
  try {
    await AsyncStorage.setItem('@userToken:key', JSON.stringify(userInfo));
  } catch (e) {
    // console.log(e);
  }
};

export const getUserIdentity = async () => {
  try {
    const userInfo = await AsyncStorage.getItem('@userToken:key');
    return userInfo != null && JSON.parse(userInfo) != null ? JSON.parse(userInfo) : true;
  } catch (error) {
    return {
      token: '',
      id: ''
    };
  }
};
