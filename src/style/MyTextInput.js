import React from 'react';
import { Dimensions, Image, Text, TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import {
  FONTSIZE,
  NEW_SCALE_RATIO,
  SCALE_HEIGHT,
  SCALE_WIDTH
} from '../constants/Constants';
import style from '../constants/style';
import MyTouchableOpacity from '../modules/view/MyTouchableOpacity';
import BaseInput from './BaseInput';

export const height = 41 * SCALE_WIDTH;

class MyTextInput extends BaseInput {
  renderIcon(type, icon, style) {
    if (type === 'Ionicons') {
      return (
        <Ionicons
          name={icon}
          size={(style && style.width) || FONTSIZE(20)}
          style={style}
          color="#AE92D3"
        />
      );
    }
    if (type === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={icon}
          size={(style && style.width) || FONTSIZE(20)}
          style={style}
          color="#AE92D3"
        />
      );
    }
    if (type === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={icon}
          size={(style && style.width) || FONTSIZE(20)}
          style={style}
          color="#AE92D3"
        />
      );
    }
    if (type === 'Feather') {
      return (
        <Feather
          name={icon}
          size={(style && style.width) || FONTSIZE(20)}
          style={style}
          color="#AE92D3"
        />
      );
    }
    if (type === 'SimpleLineIcons') {
      return (
        <SimpleLineIcons
          name={icon}
          size={(style && style.width) || FONTSIZE(20)}
          style={style}
          color="#AE92D3"
        />
      );
    }
    if (type === 'Image') {
      return <Image source={icon} style={style} />;
    }
    return <View style={{ width: 13 * NEW_SCALE_RATIO }} />;
  }

  componentWillUnmount() {
    clearTimeout(this.onLeftPressTimeout);
    clearTimeout(this.onRightPressTimeout);
  }

  render() {
    const {
      leftText,
      leftTextStyle,

      leftIcon,
      leftIconType,

      rightIcon,
      rightIconType,
      onRightPress,
      leftIconStyle,
      rightIconStyle,
      btnRightDisabled,
      btnRightStyle,

      btnSecondRightStyle,
      btnSecondRightVisible,
      btnSecondRightDisabled,
      secondRightIcon,
      secondRightIconType,
      onSecondRightPress,
      secondRightIconStyle,

      rightIcon2,
      rightIconType2,
      onRightPress2,
      btnRightDisabled2,
      rightIconStyle2,
      btnRightStyle2,

      rightIcon3,
      rightIconType3,
      onRightPress3,
      btnRightDisabled3,
      rightIconStyle3,
      btnRightStyle3,

      inputStyle,
      styleContent
    } = this.props;

    const { width, focusedAnim, value } = this.state;
    const { noShadow } = this.props;
    return (
      <View
        style={[
          noShadow ? { borderColor: '#AE92D3', borderWidth: 1 } : style.shadow,
          styleContent,
          {
            height,
            borderRadius: height / 2,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginBottom: 15 * SCALE_HEIGHT,
            shadowRadius: height / 2,
            paddingHorizontal: 10 * SCALE_WIDTH
          }
        ]}
      >
        {/* Left */}
        {leftIconType ? (
          <View style={{ paddingHorizontal: 5 * NEW_SCALE_RATIO }}>
            {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
          </View>
        ) : null}
        {/* Mid */}
        {leftText ? (
          <Text
            style={[
              leftTextStyle,
              style.textInput,
              {
                flex: 1,
                color: '#9297D3',
                paddingLeft: 5 * SCALE_WIDTH,
                marginBottom: -2 * SCALE_HEIGHT
              }
            ]}
          >
            {leftText}
          </Text>
        ) : null}
        <TextInput
          ref="input"
          {...this.props}
          clearButtonMode="always"
          placeholderTextColor="#707070"
          underlineColorAndroid="transparent"
          autoCapitalize={false}
          autoCorrect={false}
          style={[
            inputStyle,
            style.textInput,
            {
              flex: 1,
              paddingRight: 5 * SCALE_WIDTH,
              marginBottom: -5 * SCALE_HEIGHT
            }
          ]}
          value={value}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
        />
        {/* Right */}
        {btnSecondRightVisible ? (
          <MyTouchableOpacity
            disabled={btnSecondRightDisabled}
            onPress={() => {
              this.onSecondRightPressTimeout = setTimeout(() => {
                if (onSecondRightPress) onSecondRightPress();
              }, 0);
            }}
            style={
              btnSecondRightStyle
                ? this.props.btnSecondRightStyle
                : { paddingRight: 5 * NEW_SCALE_RATIO }
            }
          >
            {this.renderIcon(
              secondRightIconType,
              secondRightIcon,
              secondRightIconStyle
            )}
          </MyTouchableOpacity>
        ) : null}

        {rightIcon2 ? (
          <MyTouchableOpacity
            disabled={btnRightDisabled}
            onPress={() => {
              this.onRightPressTimeout = setTimeout(() => {
                if (onRightPress) onRightPress();
              }, 0);
            }}
            style={
              btnRightStyle
                ? this.props.btnRightStyle
                : { paddingRight: 5 * NEW_SCALE_RATIO }
            }
          >
            {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
          </MyTouchableOpacity>
        ) : (
          <View />
        )}

        {rightIcon2 ? (
          <MyTouchableOpacity
            disabled={btnRightDisabled2}
            onPress={() => {
              this.onRightPressTimeout2 = setTimeout(() => {
                if (onRightPress2) onRightPress2();
              }, 0);
            }}
            style={
              btnRightStyle2
                ? this.props.btnRightStyle2
                : { paddingRight: 5 * NEW_SCALE_RATIO }
            }
          >
            {this.renderIcon(rightIconType2, rightIcon2, rightIconStyle2)}
          </MyTouchableOpacity>
        ) : (
          <View />
        )}

        {rightIcon3 ? (
          <MyTouchableOpacity
            disabled={btnRightDisabled3}
            onPress={() => {
              this.onRightPressTimeout3 = setTimeout(() => {
                if (onRightPress3) onRightPress3();
              }, 0);
            }}
            style={
              btnRightStyle3
                ? this.props.btnRightStyle3
                : { paddingRight: 5 * NEW_SCALE_RATIO }
            }
          >
            {this.renderIcon(rightIconType3, rightIcon3, rightIconStyle3)}
          </MyTouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default MyTextInput;
