import React from 'react';
import {
  Image,
  Platform,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import { FONTSIZE, SCALE_HEIGHT, SCALE_WIDTH } from '../constants/Constants';
import style, { COLOR_PRIMARY, COLOR_TEXT_ERRO } from '../constants/style';
import BaseInput from './BaseInput';

export const height = SCALE_WIDTH(44);

class MyTextInput extends BaseInput {
  renderIcon(type, icon, styleIcon) {
    if (type === 'FontAwesome') {
      return (
        <FontAwesome
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={COLOR_PRIMARY}
        />
      );
    }
    if (type === 'Ionicons') {
      return (
        <Ionicons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={COLOR_PRIMARY}
        />
      );
    }
    if (type === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={COLOR_PRIMARY}
        />
      );
    }
    if (type === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={COLOR_PRIMARY}
        />
      );
    }
    if (type === 'Feather') {
      return (
        <Feather
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={COLOR_PRIMARY}
        />
      );
    }
    if (type === 'SimpleLineIcons') {
      return (
        <SimpleLineIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={COLOR_PRIMARY}
        />
      );
    }
    if (type === 'Image') {
      return <Image source={icon} style={styleIcon} />;
    }
    return <View style={{ width: FONTSIZE(20) }} />;
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
      leftIconStyle,

      rightText,
      rightTextStyle,
      rightIcon,
      rightIconType,
      rightIconStyle,

      onPress,
      disabled,

      inputStyle,
      styleContent,

      errorMessage,
      errorMessageStyle
    } = this.props;

    const { value } = this.state;
    return (
      <View>
        <View
          style={[
            styleContent,
            {
              height,
              borderRadius: SCALE_WIDTH(5),
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              marginBottom: SCALE_HEIGHT(15)
            }
          ]}
        >
          {/* Left */}
          {leftIcon ? (
            <View style={{ paddingHorizontal: SCALE_WIDTH(5) }}>
              {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
            </View>
          ) : null}
          {leftText ? (
            <Text
              style={[
                leftTextStyle,
                style.textInput,
                {
                  flex: 1,
                  paddingLeft: SCALE_WIDTH(5)
                }
              ]}
            >
              {leftText}
            </Text>
          ) : null}
          {/* Mid */}
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
                paddingRight: SCALE_WIDTH(5),
                marginBottom: Platform.OS === 'ios' ? 0 : -5
              }
            ]}
            value={value}
            onBlur={this._onBlur}
            onChange={this._onChange}
            onFocus={this._onFocus}
          />
          {/* Right */}
          {rightText || rightIcon ? (
            <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
              {rightText ? (
                <Text
                  style={[
                    rightTextStyle,
                    style.textInput,
                    {
                      flex: 1,
                      paddingRight: SCALE_WIDTH(5)
                    }
                  ]}
                >
                  {rightText}
                </Text>
              ) : null}
              {rightIcon ? (
                <View style={{ paddingHorizontal: SCALE_WIDTH(5) }}>
                  {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
                </View>
              ) : null}
            </TouchableWithoutFeedback>
          ) : null}
        </View>
        {errorMessage === null ? (
          <Text
            style={[
              errorMessageStyle,
              style.textInput,
              {
                flex: 1,
                color: COLOR_TEXT_ERRO,
                paddingHorizontal: SCALE_WIDTH(3)
              }
            ]}
          >
            {errorMessage}
          </Text>
        ) : null}
      </View>
    );
  }
}

export default MyTextInput;
