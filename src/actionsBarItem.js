import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Button, Container, Badge } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class ActionsBarItem extends Component {

    render() {
        return (
            <TouchableOpacity
                style = {styles.actionBarItem}
                onPress= {this.props.onPress}
            >
                {
                    this.props.iconName &&
                    <Icon
                        style = {styles.actionBarItemIcon}
                        name={this.props.iconName} />
                }
                {
                    this.props.text &&
                    <Text
                        style = {[styles.actionBarItemText, this.props.style]}>
                        {this.props.text}
                    </Text>
                }

            </TouchableOpacity>

        );
    };
};

export default ActionsBarItem;
