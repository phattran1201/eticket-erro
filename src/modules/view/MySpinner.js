import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  HEIGHT_DEVICE,
  SCALE_WIDTH,
  WIDTH_DEVICE
} from '../../constants/Constants';
import strings from '../../constants/Strings';
import MyComponent from './MyComponent';

const spiner = require('../../assets/preloader.json');

export default class MySpinner extends MyComponent {
  static instance = null;

  static show() {
    MySpinner.instance.setState({ visible: true });
  }

  static hide() {
    MySpinner.instance.setState({ visible: false });
  }

  constructor(props) {
    super(props);
    MySpinner.instance = this;
    this.state = {
      visible: true
    };
  }
  render() {
    return (
      <Spinner
        visible={MySpinner.instance.state.visible}
        textContent={strings.loading}
        textStyle={{ color: '#fff' }}
        style={{ zIndex: 99999, elevation: 9999 }}
        overlayColor="transparent"
      >
        <View
          style={{
            width: WIDTH_DEVICE,
            height: HEIGHT_DEVICE(),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent'
          }}
        >
          <View
            style={{
              width: SCALE_WIDTH(25),
              height: SCALE_WIDTH(25),
              borderRadius: SCALE_WIDTH(5),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
          >
            <LottieView
              source={spiner}
              autoPlay
              loop
              hardwareAccelerationAndroid
              style={{
                width: SCALE_WIDTH(30),
                height: SCALE_WIDTH(30),
                alignSelf: 'center'
              }}
            />
          </View>
        </View>
      </Spinner>
    );
  }
}
