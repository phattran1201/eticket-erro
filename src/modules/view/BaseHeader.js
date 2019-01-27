import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Zocial from 'react-native-vector-icons/Zocial';
import {
  FONTSIZE,
  NEW_SCALE_RATIO,
  NEW_SCALE_WIDTH,
  SCALE_HEIGHT,
  SCALE_WIDTH
} from '../../constants/Constants';
import style from '../../constants/style';
import MyComponent from './MyComponent';
import Dropdown from './MyDropDown/dropdown';
import MyTouchableOpacity from './MyTouchableOpacity';
import IconMessageAndBadgeComponent from './IconMessageAndBadgeComponent';

class BaseHeader extends MyComponent {
  renderIcon(type, icon, styleIcon) {
    if (type === 'FontAwesome') {
      return (
        <FontAwesome
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color="#AE92D3"
        />
      );
    }
    if (type === 'Foundation') {
      return (
        <Foundation
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color="#AE92D3"
        />
      );
    }
    if (type === 'Zocial') {
      return (
        <Zocial
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color="#AE92D3"
        />
      );
    }
    if (type === 'Ionicons') {
      return (
        <Ionicons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color="#AE92D3"
        />
      );
    }
    if (type === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
          color="#AE92D3"
        />
      );
    }
    if (type === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={icon}
          size={(styleIcon && styleIcon.width) || FONTSIZE(20)}
          style={styleIcon}
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
      children,
      leftIcon,
      leftIconType,
      onLeftPress,

      rightIcon,
      rightIconType,
      onRightPress,
      leftIconStyle,
      rightIconStyle,
      btnRightDisabled,
      btnRightStyle,

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

      rightIconMenu,
      dataMenu,
      rightIconTypeMenu,
      rightIconStyleMenu,

      styleContent,
      noShadow,
      styleShadow
    } = this.props;
    return (
      <View>
        <View style={[style.header, styleContent]}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          {leftIcon ? (
            <MyTouchableOpacity
              onPress={() => {
                this.onLeftPressTimeout = setTimeout(() => {
                  if (onLeftPress) onLeftPress();
                }, 0);
              }}
              style={{ paddingHorizontal: 16 * SCALE_WIDTH }}
            >
              {this.renderIcon(leftIconType, leftIcon, leftIconStyle)}
            </MyTouchableOpacity>
          ) : (
            <View style={{ paddingHorizontal: 16 * SCALE_WIDTH }}>
              <Feather
                name="arrow-left"
                size={FONTSIZE(20)}
                color="transparent"
              />
            </View>
          )}

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center'
            }}
          >
            {children}
          </View>

          {rightIcon ||
          rightIcon ||
          rightIcon2 ||
          rightIcon3 ||
          rightIconMenu ? null : (
            <View style={{ paddingHorizontal: 16 * SCALE_WIDTH }}>
              <Feather
                name="arrow-right"
                size={FONTSIZE(20)}
                color="transparent"
              />
            </View>
          )}

          {rightIcon ? (
            <View>
              {rightIcon === 'envelope' ? (
                <IconMessageAndBadgeComponent
                  navigation={this.props.navigation}
                  containerStyle={{ marginRight: 16 * SCALE_WIDTH }}
                />
              ) : (
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
                      : { paddingHorizontal: 16 * SCALE_WIDTH }
                  }
                >
                  {this.renderIcon(rightIconType, rightIcon, rightIconStyle)}
                </MyTouchableOpacity>
              )}
            </View>
          ) : null}

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
                  : { paddingRight: 16 * SCALE_WIDTH }
              }
            >
              {this.renderIcon(rightIconType2, rightIcon2, rightIconStyle2)}
            </MyTouchableOpacity>
          ) : null}

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
                  : { paddingRight: 16 * SCALE_WIDTH }
              }
            >
              {this.renderIcon(rightIconType3, rightIcon3, rightIconStyle3)}
            </MyTouchableOpacity>
          ) : null}

          {rightIconMenu ? (
            <Dropdown
              data={dataMenu}
              rippleInsets={{ top: 0, bottom: 0, left: 0, right: 0 }}
              dropdownPosition={0}
              itemColor="rgba(0, 0, 0, .87)"
              pickerStyle={{
                width: 128,
                borderTopRightRadius: 0,
                left: null,
                right: 8.5 * NEW_SCALE_RATIO,
                marginTop: 1.5 * SCALE_HEIGHT
              }}
              overlayStyle={{ borderTopRightRadius: 0 }}
              fontSize={15 * SCALE_WIDTH}
              dropdownPosition={0}
              itemTextStyle={{
                fontSize: 4.5 * NEW_SCALE_WIDTH,
                fontFamily: 'helveticaneue'
              }}
            >
              {this.renderIcon(
                rightIconTypeMenu,
                rightIconMenu,
                rightIconStyleMenu
              )}
            </Dropdown>
          ) : null}
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

export default BaseHeader;
