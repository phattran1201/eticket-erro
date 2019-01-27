import React from 'react';
import { TouchableOpacity } from 'react-native';
import MyComponent from './MyComponent';

const _ = require('lodash');

export default class MyTouchableOpacity extends MyComponent {
  render() {
    const { children } = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        onPress={_.debounce(
          this.props.onPress ? this.props.onPress : () => {},
          300,
          {
            leading: true,
            trailing: false
          }
        )}
      >
        {children}
      </TouchableOpacity>
    );
  }
}
