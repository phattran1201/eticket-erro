import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import {
  FS,
  NEW_SCALE_RATIO,
  SCALE_RATIO_HEIGHT_BASIS,
  SCALE_RATIO_WIDTH_BASIS
} from '../constants/Constants';
import style from '../constants/style';
// import isEqual from 'lodash.isequal';

export default class MyButton extends Component {
  static propTypes = {
    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
    testID: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    activeOpacity: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activityIndicatorColor: PropTypes.string,
    delayLongPress: PropTypes.number,
    delayPressIn: PropTypes.number,
    delayPressOut: PropTypes.number,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    background: TouchableNativeFeedback.propTypes
      ? TouchableNativeFeedback.propTypes.background
      : PropTypes.any
  };

  static isAndroid = Platform.OS === 'android';

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (!isEqual(nextProps, this.props)) {
  //     return true;
  //   }
  //   return false;
  // }

  _renderChildren() {
    const childElements = [];
    React.Children.forEach(this.props.children, item => {
      if (typeof item === 'string' || typeof item === 'number') {
        const element = (
          <Text
            style={[
              styles.textButton,
              this.props.textStyle,
              { color: this.props.outline ? '#AE92D3' : '#fff' }
            ]}
            allowFontScaling={this.props.allowFontScaling}
            key={item}
          >
            {item}
          </Text>
        );
        childElements.push(element);
      } else if (React.isValidElement(item)) {
        childElements.push(item);
      }
    });
    return childElements;
  }

  _renderInnerText() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating
          size="small"
          style={styles.spinner}
          color={this.props.outline ? '#AE92D3' : '#fff'}
        />
      );
    }
    return this._renderChildren();
  }

  renderIcon(type, icon, style) {
    if (type === 'Ionicons') {
      return (
        <Ionicons
          name={icon}
          size={(style && style.width) || 16 * SCALE_RATIO_WIDTH_BASIS}
          style={style}
          color={this.props.outline ? '#AE92D3' : '#fff'}
        />
      );
    }
    if (type === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={icon}
          size={(style && style.width) || 16 * SCALE_RATIO_WIDTH_BASIS}
          style={style}
          color={this.props.outline ? '#AE92D3' : '#fff'}
        />
      );
    }
    if (type === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={icon}
          size={(style && style.width) || 16 * SCALE_RATIO_WIDTH_BASIS}
          style={style}
          color={this.props.outline ? '#AE92D3' : '#fff'}
        />
      );
    }
    if (type === 'Feather') {
      return (
        <Feather
          name={icon}
          size={(style && style.width) || 16 * SCALE_RATIO_WIDTH_BASIS}
          style={style}
          color={this.props.outline ? '#AE92D3' : '#fff'}
        />
      );
    }
    if (type === 'SimpleLineIcons') {
      return (
        <SimpleLineIcons
          name={icon}
          size={(style && style.width) || 16 * SCALE_RATIO_WIDTH_BASIS}
          style={style}
          color={this.props.outline ? '#AE92D3' : '#fff'}
        />
      );
    }
    if (type === 'Image') {
      return <Image source={icon} style={style} />;
    }
    return <View style={{ width: 13 * NEW_SCALE_RATIO }} />;
  }
  render() {
    // Extract Touchable props
    let touchableProps = {
      testID: this.props.testID,
      accessibilityLabel: this.props.accessibilityLabel,
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress,
      activeOpacity: this.props.activeOpacity,
      delayLongPress: this.props.delayLongPress,
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut
    };
    //Icon
    const {
      leftIcon,
      leftIconType,
      leftIconStyle,

      rightIcon,
      rightIconType,
      rightIconStyle,

      outline,
      width,
      styleContent
    } = this.props;

    const styles = StyleSheet.create({
      button: {
        height: 33 * SCALE_RATIO_HEIGHT_BASIS,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: (33 * SCALE_RATIO_HEIGHT_BASIS) / 2,
        paddingVertical: 8 * SCALE_RATIO_HEIGHT_BASIS,
        paddingHorizontal: 25 * SCALE_RATIO_WIDTH_BASIS,
        alignSelf: 'stretch',
        justifyContent: 'center',
        shadowColor: '#AE92D3',
        shadowOffset: {
          width: 0,
          height: 3
        },
        width,
        shadowOpacity: 1,
        shadowRadius: 10,
        backgroundColor: outline ? '#fff' : '#AE92D3',
        borderWidth: outline ? 1 : 0,
        borderColor: outline ? '#AE92D3' : '#fff'
      },
      textButton: {
        fontSize: FS(12),
        textAlign: 'center',
        fontFamily: 'helveticaneue',
        color: outline ? '#AE92D3' : '#fff',
        fontWeight: 'bold',
        backgroundColor: 'transparent'
      },
      spinner: {
        alignSelf: 'center'
      },
      opacity: {
        opacity: 0.5
      }
    });

    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View
          style={[
            styles.button,
            style.button,
            this.props.style,
            styleContent,
            this.props.disabledStyle || styles.opacity
          ]}
        >
          {leftIcon ? (
            <View style={{ marginRight: 5 * SCALE_RATIO_WIDTH_BASIS }}>
              {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
            </View>
          ) : null}
          {this._renderInnerText()}
          {rightIcon ? (
            <View style={{ marginLeft: 5 * SCALE_RATIO_WIDTH_BASIS }}>
              {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
            </View>
          ) : null}
        </View>
      );
    }

    if (MyButton.isAndroid) {
      touchableProps = Object.assign(touchableProps, {
        background: this.props.background || TouchableNativeFeedback.SelectableBackground()
      });
      return (
        <TouchableNativeFeedback {...touchableProps}>
          <View style={[styles.button, this.props.style, , styleContent]}>
            {leftIcon ? (
              <View style={{ marginRight: 5 * SCALE_RATIO_WIDTH_BASIS }}>
                {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
              </View>
            ) : null}
            {this._renderInnerText()}
            {rightIcon ? (
              <View style={{ marginLeft: 5 * SCALE_RATIO_WIDTH_BASIS }}>
                {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
              </View>
            ) : null}
          </View>
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableOpacity {...touchableProps}>
        <View style={[styles.button, this.props.style, styleContent]}>
          {leftIcon ? (
            <View style={{ marginRight: 5 * SCALE_RATIO_WIDTH_BASIS }}>
              {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
            </View>
          ) : null}
          {this._renderInnerText()}
          {rightIcon ? (
            <View style={{ marginLeft: 5 * SCALE_RATIO_WIDTH_BASIS }}>
              {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 33 * SCALE_RATIO_HEIGHT_BASIS,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: (33 * SCALE_RATIO_HEIGHT_BASIS) / 2,
    paddingVertical: 8 * SCALE_RATIO_HEIGHT_BASIS,
    paddingHorizontal: 25 * SCALE_RATIO_WIDTH_BASIS,
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowColor: '#AE92D3',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1,
    shadowRadius: 10
    // elevation: 5
  },
  textButton: {
    fontSize: FS(12),
    textAlign: 'center',
    fontFamily: 'helveticaneue',
    fontWeight: '600',
    backgroundColor: 'transparent',
    letterSpacing: 1
  },
  spinner: {
    alignSelf: 'center'
  },
  opacity: {
    opacity: 0.5
  }
});
