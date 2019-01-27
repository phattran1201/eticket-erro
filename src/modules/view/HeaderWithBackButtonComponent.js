import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Feather';
import { FONTSIZE, SCALE_WIDTH } from '../../constants/Constants';
import style from '../../constants/style';
import MyComponent from './MyComponent';
import MyTouchableOpacity from './MyTouchableOpacity';

export default class HeaderWithBackButtonComponent extends MyComponent {
  render() {
    const { bodyTitle, onPress, noShadow, styleShadow } = this.props;
    return (
      <View>
        <View style={[style.header]}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <MyTouchableOpacity
            onPress={onPress}
            style={{ paddingHorizontal: 16 * SCALE_WIDTH }}
          >
            <Icons name="arrow-left" size={FONTSIZE(20)} color="#AE92D3" />
          </MyTouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={style.titleHeader}>
              {bodyTitle ? bodyTitle.toUpperCase() : ''}
            </Text>
          </View>
          <View style={{ paddingHorizontal: 16 * SCALE_WIDTH }}>
            <Icons name="arrow-right" size={FONTSIZE(20)} color="transparent" />
          </View>
        </View>
        {noShadow ? null : (
          <LinearGradient
            colors={['#AE92D350', 'transparent']}
            style={
              (styleShadow,
              {
                left: 0,
                right: 0,
                height: 4
              })
            }
          />
        )}
      </View>
    );
  }
}
