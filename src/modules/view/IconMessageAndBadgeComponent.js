import React from 'react';
import { View, Text, DeviceEventEmitter } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import { FS, SCALE_RATIO_WIDTH_BASIS, ROUTE_KEY } from '../../constants/Constants';
import MyComponent from './MyComponent';
import MyTouchableOpacity from './MyTouchableOpacity';
import style from '../../constants/style';

export default class IconMessageAndBadgeComponent extends MyComponent {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.countReadMessages = this.countReadMessages.bind(this);
  }

  countReadMessages = e => {
    this.setState({ number: e.countReadMessages });
  };

  componentWillMount() {
    DeviceEventEmitter.addListener('countReadMessages', this.countReadMessages);
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('countReadMessages', this.countReadMessages);
  }

  render() {
    return (
      <MyTouchableOpacity
        style={[{ padding: 4 * SCALE_RATIO_WIDTH_BASIS }, this.props.containerStyle]}
        onPress={() => {
          this.props.navigation.navigate(ROUTE_KEY.MESSAGE_COMPONENT);
        }}
      >
        {this.state.number > 0 ? (
          <View
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              zIndex: 99,
              elevation: 2,
              right: 0,
              width: 16 * SCALE_RATIO_WIDTH_BASIS,
              height: 16 * SCALE_RATIO_WIDTH_BASIS,
              borderRadius: 8 * SCALE_RATIO_WIDTH_BASIS,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: -4 * SCALE_RATIO_WIDTH_BASIS
            }}
          >
            <Text style={[style.textNormal, { color: '#fff', fontSize: FS(10) }]}>
              {this.state.number}
            </Text>
          </View>
        ) : (
          <View />
        )}
        <SimpleLineIcons name="envelope" size={FS(20)} color="#AE92D3" />
      </MyTouchableOpacity>
    );
  }
}
