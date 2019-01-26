import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Platform
} from 'react-native';

import { SCALE_RATIO_HEIGHT_BASIS, SCALE_RATIO_WIDTH_BASIS, FS } from '../constants/Constants';

import BaseInput from './BaseInput';
import style from '../constants/style';

const LABEL_HEIGHT = 20;
const PADDING = 16;

export default class MyTextInputFloat extends BaseInput {
  static propTypes = {
    height: PropTypes.number,
    iconClass: PropTypes.func.isRequired,
    iconName: PropTypes.string,
    iconColor: PropTypes.string
  };

  static defaultProps = {
    iconColor: '#AE92D3',
    height: 40 * SCALE_RATIO_HEIGHT_BASIS,
    animationDuration: 300,
    iconName: 'heart'
  };

  render() {
    const {
      iconClass,
      iconColor,
      iconName,
      label,
      style: containerStyle,
      height: inputHeight,
      inputStyle,
      labelStyle
    } = this.props;
    const { width, focusedAnim, value } = this.state;
    const AnimatedIcon = Animated.createAnimatedComponent(iconClass);

    return (
      <View
        style={[
          styles.container,
          containerStyle,
          style.shadow,
          {
            height: inputHeight + PADDING,
            backgroundColor: '#fff',
            borderRadius: inputHeight + PADDING / 2,
            marginBottom: 12 * SCALE_RATIO_HEIGHT_BASIS,
            shadowRadius: inputHeight + PADDING / 2
          }
        ]}
        onLayout={this._onLayout}
      >
        <TouchableWithoutFeedback onPress={this.focus}>
          <Animated.View
            style={{
              position: 'absolute',
              // paddingBottom: 5 * SCALE_RATIO_HEIGHT_BASIS,
              bottom: focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: Platform.OS === 'ios' ? [
                  LABEL_HEIGHT - 5 * SCALE_RATIO_HEIGHT_BASIS, 
                  LABEL_HEIGHT + 12 * SCALE_RATIO_HEIGHT_BASIS
                ]
                : [
                  LABEL_HEIGHT - 5 * SCALE_RATIO_HEIGHT_BASIS * 2.75,
                  LABEL_HEIGHT + 12 * SCALE_RATIO_HEIGHT_BASIS * 0.7
                ]
              })
            }}
          >
            <Animated.Text
              style={[
                styles.label,
                labelStyle,
                style.textCaption,
                {
                  paddingBottom: 5 * SCALE_RATIO_HEIGHT_BASIS,
                  paddingHorizontal: 20 * SCALE_RATIO_WIDTH_BASIS,
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [14, 10]
                  })
                }
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TextInput
          selectionColor={'#AE92D3'}
          ref="input"
          {...this.props}
          style={[
            styles.textInput,
            inputStyle,
            style.textInput,
            {
              width,
              height: inputHeight
            }
          ]}
          value={value}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          underlineColorAndroid={'transparent'}
          autoCapitalize={false}
        />
        <TouchableWithoutFeedback onPress={this.focus}>
          <AnimatedIcon
            name={iconName}
            color={iconColor}
            style={{
              position: 'absolute',
              marginHorizontal: 20 * SCALE_RATIO_WIDTH_BASIS,
              bottom: Platform.OS === 'ios' ? LABEL_HEIGHT : 5 * SCALE_RATIO_HEIGHT_BASIS,
              right: focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, width + PADDING]
              }),
              transform: [
                {
                  rotate: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-90deg']
                  })
                }
              ],
              fontSize: FS(16),
              backgroundColor: 'transparent'
            }}
          />
        </TouchableWithoutFeedback>
        {/* bottom border */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: 2,
            width: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width]
            }),
            backgroundColor: iconColor
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  label: {
    backgroundColor: '#fff',
    fontFamily: 'Helvetica Neue',
    // fontWeight: '600',
    color: '#9297D3',
    fontSize: FS(12)
  },
  textInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingTop: -5 * SCALE_RATIO_HEIGHT_BASIS,
    paddingHorizontal: 20 * SCALE_RATIO_WIDTH_BASIS,
    color: '#707070',
    fontSize: FS(14)
  }
});
