import React from 'react';
import {
  AppState,
  DeviceEventEmitter,
  Image,
  Platform,
  StatusBar,
  Vibration,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import {
  HEIGHT_DEVICE,
  ROUTE_KEY,
  WIDTH_DEVICE
} from '../../../constants/Constants';
import strings from '../../../constants/Strings';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../constants/style';
import { getCurrentLanguage, getToken } from '../../../utils/asyncStorage';
import global from '../../../utils/globalUtils';
import MyComponent from '../../view/MyComponent';
import {
  getLink,
  loadAllData,
  reloadUnreadNotificationNumber
} from './SplashActions';

const logo = require('../../../assets/images/logo.png');

class SplashComponent extends MyComponent {
  state = {
    imgWidth: 0,
    imgHeight: 0
  };

  constructor(props) {
    super(props);

    getCurrentLanguage()
      .then(value => {
        strings.setLanguage(value);
      })
      .catch(() => {});
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    this.props.loadAllData(isLoggedIn => {
      this.props.navigation.replace(
        isLoggedIn ? ROUTE_KEY.MAIN : ROUTE_KEY.LOGIN
      );
      setTimeout(() => {
        DeviceEventEmitter.emit('Notification_clicked');
      }, 500);
    });
  }

  // getActionFromNotification(notification) {
  //   if (Platform.OS === 'ios') {
  //     return notification.ios.category
  //       ? notification.ios.category.split(',')[0]
  //       : notification._data._data.action;
  //   }

  //   return notification._data._data
  //     ? notification._data._data.action
  //     : notification._data.action;
  // }

  // getEntityIdFromNotification(notification) {
  //   if (Platform.OS === 'ios') {
  //     return notification.ios.category
  //       ? notification.ios.category.split(',')[1]
  //       : notification._data._data.entity_id;
  //   }

  //   return notification._data._data
  //     ? notification._data._data.entity_id
  //     : notification._data.entity_id;
  // }

  // getStudentIdFromNotification(notification) {
  //   if (Platform.OS === 'ios') {
  //     return notification.ios.category
  //       ? notification.ios.category.split(',')[2]
  //       : notification._data._data.student_id;
  //   }

  //   return notification._data._data
  //     ? notification._data._data.student_id
  //     : notification._data.student_id;
  // }

  componentWillUnmount() {
    // if (this.messageListener) {
    // this.messageListener();
    // }
    // AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    console.log('bambi appstate change', nextAppState);
    global.appState = nextAppState;
  };

  render() {
    return (
      <View
        style={{
          width: WIDTH_DEVICE,
          height: HEIGHT_DEVICE,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <StatusBar hidden />
        <LinearGradient
          // start={{ x: 0, y: 0.9 }}
          // end={{ x: 1, y: 0.7 }}
          colors={[COLOR_SECONDARY, COLOR_PRIMARY]}
          style={{
            position: 'absolute',
            width: WIDTH_DEVICE,
            height: HEIGHT_DEVICE
          }}
        />
        <Image
          source={logo}
          style={{
            width: (WIDTH_DEVICE * 60) / 100
          }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const mapActionCreators = {
  loadAllData
};

const mapStateToProps = state => ({
  userData: state.user.userData
});

export default connect(
  mapStateToProps,
  mapActionCreators
)(SplashComponent);
