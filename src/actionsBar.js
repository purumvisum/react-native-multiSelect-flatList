import React, { Component } from 'react';
import { Animated } from 'react-native';

import ActionsBarItem from './actionsBarItem';

import styles from './styles';

class ActionsBar extends Component {

    render() {
        return (
            <Animated.View
                style = { [ styles.actionBar,
                    { height: this.props.topActionBarAnimation }
                ] }>

                <ActionsBarItem
                    iconName = { 'done-all' }
                    onPress = { this.props.selectAll }
                    text = { 'Select All' } />
                <ActionsBarItem
                    iconName = { 'delete' }
                    onPress = { this.props.remove }
                    text = { 'Remove' } />
                <ActionsBarItem
                    style = {{ fontSize: 15 }}
                    onPress = { this.props.cancel }
                    text = { 'Cancel' } />
            </Animated.View>
        );
    }
}
export default ActionsBar;
