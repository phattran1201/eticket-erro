import PropTypes from 'prop-types';
import React from 'react';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FONTSIZE, NEW_SCALE_RATIO, SCALE_WIDTH } from '../constants/Constants';
import style, {
  COLOR_TEXT_BUTTON,
  COLOR_TEXT_BUTTON_OUTLINE
} from '../constants/style';
import MyComponent from '../modules/view/MyComponent';
// import isEqual from 'lodash.isequal';

class MyButton extends MyComponent {
  static propTypes = {
    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.element
    ]),
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
  _renderChildren() {
    const childElements = [];
    React.Children.forEach(this.props.children, item => {
      if (typeof item === 'string' || typeof item === 'number') {
        const element = (
          <Text
            style={[
              style.textButton,
              this.props.textStyle,
              {
                color: this.props.outline
                  ? COLOR_TEXT_BUTTON_OUTLINE
                  : COLOR_TEXT_BUTTON
              }
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
          color={
            this.props.outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
          }
        />
      );
    }
    return this._renderChildren();
  }

  renderIcon(type, icon, styleIcon) {
    if (type === 'Ionicons') {
      return (
        <Ionicons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={
            this.props.outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
          }
        />
      );
    }
    if (type === 'FontAwesome') {
      return (
        <FontAwesome
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={
            this.props.outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
          }
        />
      );
    }
    if (type === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={
            this.props.outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
          }
        />
      );
    }
    if (type === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={
            this.props.outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
          }
        />
      );
    }
    if (type === 'Feather') {
      return (
        <Feather
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={
            this.props.outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
          }
        />
      );
    }
    if (type === 'SimpleLineIcons') {
      return (
        <SimpleLineIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color={
            this.props.outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
          }
        />
      );
    }
    if (type === 'Image') {
      return <Image source={icon} style={styleIcon} />;
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

      outline
    } = this.props;

    const styles = StyleSheet.create({
      button: {
        backgroundColor: outline
          ? COLOR_TEXT_BUTTON
          : COLOR_TEXT_BUTTON_OUTLINE,
        borderWidth: outline ? 1 : 0,
        borderColor: outline ? COLOR_TEXT_BUTTON_OUTLINE : COLOR_TEXT_BUTTON
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
            this.props.disabledStyle || styles.opacity
          ]}
        >
          {leftIcon ? (
            <View style={{ marginRight: 5 * SCALE_WIDTH }}>
              {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
            </View>
          ) : null}
          {this._renderInnerText()}
          {rightIcon ? (
            <View style={{ marginLeft: 5 * SCALE_WIDTH }}>
              {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
            </View>
          ) : null}
        </View>
      );
    }

    if (MyButton.isAndroid) {
      touchableProps = Object.assign(touchableProps, {
        background:
          this.props.background ||
          TouchableNativeFeedback.SelectableBackground()
      });
      return (
        <TouchableNativeFeedback {...touchableProps}>
          <View style={[styles.button, this.props.style]}>
            {leftIcon ? (
              <View style={{ marginRight: 5 * SCALE_WIDTH }}>
                {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
              </View>
            ) : null}
            {this._renderInnerText()}
            {rightIcon ? (
              <View style={{ marginLeft: 5 * SCALE_WIDTH }}>
                {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
              </View>
            ) : null}
          </View>
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableOpacity {...touchableProps}>
        <View style={[styles.button, this.props.style]}>
          {leftIcon ? (
            <View style={{ marginRight: 5 * SCALE_WIDTH }}>
              {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
            </View>
          ) : null}
          {this._renderInnerText()}
          {rightIcon ? (
            <View style={{ marginLeft: 5 * SCALE_WIDTH }}>
              {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    alignSelf: 'center'
  },
  opacity: {
    opacity: 0.5
  }
});
export default MyButton;
