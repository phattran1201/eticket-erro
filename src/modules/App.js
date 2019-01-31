import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from '../config/AppNavigator';
import store from '../config/redux/store';
import MyComponent from './view/MyComponent';
import style from '../constants/style';

export default class App extends MyComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
