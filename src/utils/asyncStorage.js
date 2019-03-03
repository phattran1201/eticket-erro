import { AsyncStorage } from 'react-native';

export const getListReadNotifications = async () => {
  try {
    const data = await AsyncStorage.getItem('@readnotifications:key');
    console.log('bambi lay tu async', data);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const readNotification = async notificationId => {
  try {
    let listReadNotifications = await getListReadNotifications();
    listReadNotifications = listReadNotifications.filter(
      e => e !== notificationId
    );
    console.log('bambi bo vao tu async', notificationId, listReadNotifications);
    console.log('bambi bo vao tu async 2', [
      ...listReadNotifications,
      notificationId
    ]);
    await AsyncStorage.setItem(
      '@readnotifications:key',
      JSON.stringify([...listReadNotifications, notificationId])
    );
  } catch (e) {
    console.log(e);
  }
};
export const getListReadFeedbacks = async () => {
  try {
    const data = await AsyncStorage.getItem('@readfeedbacks:key');
    console.log('bambi lay tu async', data);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const readFeedback = async feedbackId => {
  try {
    let listReadFeedbacks = await getListReadFeedbacks();
    listReadFeedbacks = listReadFeedbacks.filter(e => e !== feedbackId);
    console.log('bambi bo vao tu async', listReadFeedbacks);
    console.log('bambi bo vao tu async 2', [...listReadFeedbacks, feedbackId]);
    await AsyncStorage.setItem(
      '@readfeedbacks:key',
      JSON.stringify([...listReadFeedbacks, feedbackId])
    );
  } catch (e) {
    console.log(e);
  }
};
export const readFeedbacks = async feedbackIds => {
  try {
    let listReadFeedbacks = await getListReadFeedbacks();
    feedbackIds.forEach(feedbackId => {
      listReadFeedbacks = listReadFeedbacks.filter(e => e !== feedbackId);
    });
    await AsyncStorage.setItem(
      '@readfeedbacks:key',
      JSON.stringify([...listReadFeedbacks, ...feedbackIds])
    );
  } catch (e) {
    console.log(e);
  }
};

export const getSubscribingTopics = async () => {
  try {
    const data = await AsyncStorage.getItem('@subscribingtopics:key');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

export const setSubscribingTopics = async topics => {
  try {
    await AsyncStorage.setItem(
      '@subscribingtopics:key',
      JSON.stringify(topics)
    );
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem('@language3123:key');
    return language !== null ? language : 'vi';
  } catch (error) {
    return 'vi';
  }
};

export const setCurrentLanguage = async (language = 'vi') => {
  try {
    await AsyncStorage.setItem('@language3123:key', language);
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@tokenRaovat21052018:key');
    return token !== null ? token : '';
  } catch (error) {
    return '';
  }
};

export const saveToken = async (token = '') => {
  try {
    await AsyncStorage.setItem('@tokenRaovat21052018:key', token);
  } catch (e) {
    console.log(e);
  }
};

export const getAuthorizationString = async () => {
  try {
    const authorizationString = await AsyncStorage.getItem(
      '@AuthorizationStringApollo0206:key'
    );
    return authorizationString !== null ? authorizationString : '';
  } catch (error) {
    return '';
  }
};

export const saveAuthorizationString = async (authorizationString = '') => {
  try {
    await AsyncStorage.setItem(
      '@AuthorizationStringApollo0206:key',
      authorizationString
    );
  } catch (e) {
    console.log(e);
  }
};

export const getRefreshToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem(
      '@RefreshTokenApollo0206:key'
    );
    return refreshToken !== null ? refreshToken : '';
  } catch (error) {
    return '';
  }
};

export const saveRefreshToken = async (refreshToken = '') => {
  try {
    await AsyncStorage.setItem('@RefreshTokenApollo0206:key', refreshToken);
  } catch (e) {
    console.log(e);
  }
};

export const saveDataUser = async (data = null) => {
  try {
    await AsyncStorage.setItem(
      '@dataUserRaovat01062018:key',
      JSON.stringify(data)
    );
  } catch (e) {
    console.log(e);
  }
};

export const getDataUser = async () => {
  try {
    const data = await AsyncStorage.getItem('@dataUserRaovat01062018:key');
    return JSON.parse(data) !== null ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};

export const saveLinkConfig = async link => {
  try {
    await AsyncStorage.setItem('@linkConfig', JSON.stringify(link));
  } catch (e) {
    console.log(e);
  }
};

export const getLinkConfig = async () => {
  try {
    const link = await AsyncStorage.getItem('@linkConfig');
    return JSON.parse(link) !== null ? JSON.parse(link) : null;
  } catch (error) {
    return null;
  }
};
