import React, { Component } from 'react';
import { View, TextInput, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ' '
        };

    }

    render() {
        return (
            <Animated.View
                style = { [ styles.searchBoxWrapper,
                { height: this.props.topSearchBarAnimation }
                ] }>
                <View
                    style = { styles.searchBox }>
                    <Icon
                        name = { 'search' }
                        style = { [ styles.searchIcon, styles.searchIconLeft ] } />
                    <TextInput
                        style = { styles.searchBoxInput }
                        underlineColorAndroid = "transparent"
                        onChangeText = { text => this.props.searchAction({ text }) }

                        value = { this.props.searchText } />
                    <Icon
                        onPress = { this.props.cleanSearch }
                        name = { 'cancel' }
                        style = { [ styles.searchIcon, styles.searchIconRight ] } />
                </View>
            </Animated.View>
        );
    }
}

export default SearchBar;
