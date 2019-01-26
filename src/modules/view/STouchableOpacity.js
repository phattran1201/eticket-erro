import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

const _ = require('lodash');

export default class STouchableOpacity extends Component {
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