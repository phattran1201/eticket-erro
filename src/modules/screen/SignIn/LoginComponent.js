/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import React from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  StatusBar,
  StyleSheet,
  UIManager,
  View
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {
  FONTSIZE,
  HEIGHT_DEVICE,
  WIDTH_DEVICE,
  SCALE_HEIGHT,
  SCALE_HEIGHT_PERCEN
} from '../../../constants/Constants';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../constants/style';
import MyComponent from '../../view/MyComponent';

const logo = require('../../../assets/images/logo.png');

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => (
  <View style={styles.selectorContainer}>
    <View style={selected && styles.selected} />
  </View>
);

TabSelector.propTypes = {
  selected: PropTypes.bool.isRequired
};

export default class q  SQALoginComponent extends MyComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fontLoaded: false,
      selectedCategory: 0,
      isLoading: false,
      isEmailValid: true,
      isPasswordValid: true,
      isConfirmationValid: true
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  selectCategory(selectedCategory) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      selectedCategory,
      isLoading: false
    });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  login() {
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    // Simulate an API call
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        isLoading: false,
        isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
        isPasswordValid: password.length >= 8 || this.passwordInput.shake()
      });
    }, 1500);
  }

  signUp() {
    const { email, password, passwordConfirmation } = this.state;
    this.setState({ isLoading: true });
    // Simulate an API call
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        isLoading: false,
        isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
        isPasswordValid: password.length >= 8 || this.passwordInput.shake(),
        isConfirmationValid:
          password === passwordConfirmation || this.confirmationInput.shake()
      });
    }, 1500);
  }

  render() {
    const {
      selectedCategory,
      isLoading,
      isEmailValid,
      isPasswordValid,
      isConfirmationValid,
      email,
      password,
      passwordConfirmation
    } = this.state;
    const isLoginPage = selectedCategory === 0;
    const isSignUpPage = selectedCategory === 1;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: getStatusBarHeight()
        }}
      >
        <LinearGradient
          // start={{ x: 0, y: 0.9 }}
          // end={{ x: 1, y: 0.7 }}
          colors={[COLOR_PRIMARY, COLOR_SECONDARY]}
          style={{
            position: 'absolute',
            width: WIDTH_DEVICE,
            height: HEIGHT_DEVICE,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop:
              Platform.OS === 'android'
                ? // && DeviceInfo.getSystemVersion() < '4.5'
                  0
                : getStatusBarHeight()
          }}
        />
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        <KeyboardAvoidingView
          contentContainerStyle={styles.loginContainer}
          behavior="padding"
        >
          <Image
            source={logo}
            style={{
              width: (WIDTH_DEVICE * 60) / 100,
              alignSelf: 'center',
              flex: 3
            }}
            resizeMode="contain"
          />
          <View style={{ flex: 7 }}>
            <View style={{ flexDirection: 'row' }}>
              <Button
                disabled={isLoading}
                clear
                activeOpacity={0.7}
                onPress={() => this.selectCategory(0)}
                containerStyle={{ flex: 1 }}
                titleStyle={[
                  styles.categoryText,
                  isLoginPage && styles.selectedCategoryText
                ]}
                title={'Login'}
              />
              <Button
                disabled={isLoading}
                clear
                activeOpacity={0.7}
                onPress={() => this.selectCategory(1)}
                containerStyle={{ flex: 1 }}
                titleStyle={[
                  styles.categoryText,
                  isSignUpPage && styles.selectedCategoryText
                ]}
                title={'Sign up'}
              />
            </View>
            <View style={styles.rowSelector}>
              <TabSelector selected={isLoginPage} />
              <TabSelector selected={isSignUpPage} />
            </View>
            <View style={styles.formContainer}>
              <Input
                leftIcon={
                  <Icon
                    name="envelope-o"
                    color={COLOR_SECONDARY}
                    size={25}
                    style={{ backgroundColor: 'transparent' }}
                  />
                }
                value={email}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                inputStyle={{ marginLeft: 10 }}
                placeholder={'Email'}
                containerStyle={{
                  borderBottomColor: 'rgba(0, 0, 0, 0.38)'
                }}
                ref={input => (this.emailInput = input)}
                onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText={email => this.setState({ email })}
                errorMessage={
                  isEmailValid ? null : 'Please enter a valid email address'
                }
              />
              <Input
                leftIcon={
                  <SimpleIcon
                    name="lock"
                    color={COLOR_SECONDARY}
                    size={25}
                    style={{ backgroundColor: 'transparent' }}
                  />
                }
                value={password}
                keyboardAppearance="light"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                returnKeyType={isSignUpPage ? 'next' : 'done'}
                blurOnSubmit
                containerStyle={{
                  marginTop: 16,
                  borderBottomColor: 'rgba(0, 0, 0, 0.38)'
                }}
                inputStyle={{ marginLeft: 10 }}
                placeholder={'Password'}
                ref={input => (this.passwordInput = input)}
                onSubmitEditing={() =>
                  isSignUpPage ? this.confirmationInput.focus() : this.login()
                }
                onChangeText={password => this.setState({ password })}
                errorMessage={
                  isPasswordValid ? null : 'Please enter at least 8 characters'
                }
              />
              {isSignUpPage && (
                <Input
                  leftIcon={
                    <SimpleIcon
                      name="lock"
                      color={COLOR_SECONDARY}
                      size={25}
                      style={{ backgroundColor: 'transparent' }}
                    />
                  }
                  value={passwordConfirmation}
                  secureTextEntry
                  keyboardAppearance="light"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType={'done'}
                  blurOnSubmit
                  containerStyle={{
                    marginTop: 16,
                    borderBottomColor: 'rgba(0, 0, 0, 0.38)'
                  }}
                  inputStyle={{ marginLeft: 10 }}
                  placeholder={'Confirm password'}
                  ref={input => (this.confirmationInput = input)}
                  onSubmitEditing={this.signUp}
                  onChangeText={passwordConfirmation =>
                    this.setState({ passwordConfirmation })
                  }
                  errorMessage={
                    isConfirmationValid
                      ? null
                      : 'Please enter the same password'
                  }
                />
              )}
              <Button
                buttonStyle={styles.loginButton}
                containerStyle={{ marginTop: 32, flex: 0 }}
                activeOpacity={0.8}
                title={isLoginPage ? 'LOGIN' : 'SIGN UP'}
                onPress={isLoginPage ? this.login : this.signUp}
                titleStyle={styles.loginTextButton}
                loading={isLoading}
                disabled={isLoading}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.helpContainer}>
          <Button
            title={'Need help ?'}
            titleStyle={{ color: 'white' }}
            buttonStyle={{ backgroundColor: 'transparent' }}
            underlayColor="transparent"
            onPress={() => console.log('Account created')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3214'
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center'
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  loginButton: {
    backgroundColor: COLOR_SECONDARY,
    borderRadius: 10,
    height: 50,
    width: 200
  },
  titleContainer: {
    fontSize: FONTSIZE(14),
    fontFamily: 'helveticaneue',
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  formContainer: {
    backgroundColor: 'white',
    width: WIDTH_DEVICE - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center'
  },
  loginText: {
    fontSize: FONTSIZE(14),
    fontFamily: 'helveticaneue',
    fontWeight: 'bold',
    color: 'white'
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: WIDTH_DEVICE,
    height: HEIGHT_DEVICE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,

    fontFamily: 'helveticaneue',
    backgroundColor: 'transparent',
    opacity: 0.54
  },
  selectedCategoryText: {
    opacity: 1
  },
  titleText: {
    color: 'white',
    fontSize: FONTSIZE(14),
    fontFamily: 'helveticaneue'
  },
  helpContainer: {
    position: 'absolute',
    bottom: SCALE_HEIGHT(10),
    alignSelf: 'center',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
