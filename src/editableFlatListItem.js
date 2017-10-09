import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    TouchableOpacity,
    Animated,
    View
} from 'react-native';

import styles from './styles';

export default class EditableFlatListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            selected: this.props.selected // turn on long tap
        };

        this._onPress = this._onPress.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected: nextProps.selected
        });
    }

    _onPress() {
        this.setState({
            selected: !this.state.selected
        });

        return false;
    }

    render() {
        return (
            <TouchableOpacity
                onLongPress = { this.props.onLongPress }
                onPress = { this.props.editingMode ? this.props.onPress.bind(this.state.id) : this.props.onRowClick }>
                <View style = { styles.itemRow }>

                    <Animated.View
                        style = { [
                            {
                                width: this.props.iconSize,
                                height: this.props.iconSize,
                                marginLeft: this.props.editingMode ? 16 : 0
                            },
                            this.props.iconStyles,
                            styles.itemIconContainer,
                            this.state.selected ? styles.itemIconContainerChecked : null
                        ] }>
                        <Icon
                            name = { 'done' }
                            style = { styles.itemIcon } />
                    </Animated.View>

                    <View style = { styles.itemRowTextContainer }>
                        {this.props.renderRow}
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

