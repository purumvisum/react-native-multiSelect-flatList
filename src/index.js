import React from 'react';

import EditablieFlatListItem from './editableFlatListItem';
import ActionsBar from './actionsBar';

import { NativeAppEventEmitter } from 'react-native';

import {
    Animated,
    FlatList,
    View,
    Alert
} from 'react-native';

import styles from './styles';
import SearchBar from './searchBar';

export default class EditablieFlatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editingMode: false, // turn on long tap
            selectAll: false,
            itemsList: this.props.itemsList,
            iconSize: new Animated.Value(0),
            iconWidth: this.props.iconWidth || 50,
            topActionBarAnimation: new Animated.Value(0),
            actionBarHeight: 50,
            topSearchBarAnimation: new Animated.Value(0),
            searchBarHeight: 50,
            refreshing: false,
            searchText: ''
        };

        this._editModeOn = this._editModeOn.bind(this);
        this._renderItemComponent = this._renderItemComponent.bind(this);
        this._editingModeOff = this._editingModeOff.bind(this);
        this._onselectAll = this._onselectAll.bind(this);
        this._onRemoveRow = this._onRemoveRow.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this._onSearchTextChange = this._onSearchTextChange.bind(this);
        this._onCleanSearch = this._onCleanSearch.bind(this);

    }

    componentDidMount() {
        this.state.topSearchBarAnimation.setValue(this.state.searchBarHeight);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            itemsList: nextProps.itemsList
        });
    }

    _editModeOn(itemId) {
        this.setState({
            editingMode: true
        });

        this._selectItem(itemId);

        Animated.parallel([
            Animated.spring(
                this.state.iconSize, {
                    tension: 70,
                    toValue: this.state.iconWidth
                }),
            Animated.timing(
                this.state.topActionBarAnimation, {
                    toValue: this.state.actionBarHeight,
                    duration: 250
                }),
            Animated.timing(
                this.state.topSearchBarAnimation, {
                    toValue: 0,
                    duration: 250
                })
        ]).start();
    }

    _editingModeOff() {
        this.setState({
            editingMode: false,
            selectAll: false
        });

        Animated.parallel([
            Animated.timing(
                this.state.iconSize,
                {
                    toValue: 0,
                    delay: 2,
                    duration: 250
                }
            ),
            Animated.timing(
                this.state.topActionBarAnimation, {
                    toValue: 0,
                    delay: 2,
                    duration: 250
                }),
            Animated.timing(
                this.state.topSearchBarAnimation, {
                    toValue: this.state.searchBarHeight,
                    delay: 2,
                    duration: 250
                })
        ]).start();
    }

    _onselectAll() {

        const selectedItemList = this.state.itemsList;

        this.setState({
            selectAll: !this.state.selectAll
        });

        if (this.state.editingMode) {
            selectedItemList.map(item => {
                item.selected = !this.state.selectAll;
            });

            this.setState({
                itemsList: selectedItemList
            });
        }
    }

    _selectItem(itemId) {

        const selectedItemList = this.state.itemsList;

        selectedItemList.map(item => {
            if (item.Id === itemId) {
                item.selected = !item.selected;
            }
        });

        if (this.state.editingMode) {
            this.setState({
                itemsList: selectedItemList
            });
        }

    }

    _onRemoveRow() {

        Alert.alert('All selected items will be permanently deleted. Are you sure?', null,
            [
                { text: 'No',
                    onPress: () => { } },
                {
                    text: 'Yes',
                    onPress: () => {
                        this.state.itemsList.forEach(item => {
                            if (item.selected) {
                                this.props.removeRow(item);
                            }
                        });
                    }
                }
            ],
            { cancelable: true }
        );

    }

    _onRefresh() {
        this.setState({ refreshing: true });
        this.props.onRefresh()
            .catch(error => console.warn('Refresh error', error))
            .then(() => {
                this.setState({ refreshing: false });
            });
    }

    _onSearchTextChange(text) {
        this.setState({
            searchText: text.text
        },
            () => {
                const filter = this.props.searchBy ? item => {
                    const prop = this.props.searchBy(item);

                    return prop.includes(this.state.searchText);
                } : () => true;

                const filteredData = this.props.itemsList
                    .filter(filter);

                this.setState({
                    itemsList: filteredData
                });
            }
        );
    }

    _onCleanSearch() {
        this.setState({
            searchText: ' ',
            itemsList: this.props.itemsList
        });
    }

    _renderItemComponent = ({ item }) => 
        (<EditablieFlatListItem
            id = { item.Id }
            selected = { item.selected }
            height = { this.state.iconWidth + 15 }
            selectAll = { this.state.selectAll }
            iconSize = { this.state.iconSize }
            onLongPress = { () => this._editModeOn(item.Id) }
            onPress = { () => this._selectItem(item.Id) }
            onRowClick = { () => this.props.clickOnRow(item) }
            onRef = { ref => this.listItem = ref }
            editingMode = { this.state.editingMode }
            iconStyles = {this.props.iconStyles}
            renderRow = { this.props.renderRow(item) } />)

    render() {
        return (
            <View
                style = { styles.editableFlatListWrapper } >
                {
                    this.props.searchBy && <SearchBar
                        searchAction = { this._onSearchTextChange }
                        cleanSearch = { this._onCleanSearch }
                        searchText = { this.state.searchText }
                        topSearchBarAnimation = { this.state.topSearchBarAnimation } />
                }
                <ActionsBar
                    cancel = { this._editingModeOff }
                    selectAll = { this._onselectAll }
                    remove = { this._onRemoveRow }
                    topActionBarAnimation = { this.state.topActionBarAnimation } />
                <FlatList
                    style = { styles.editableFlatList }
                    extraData = { this.state }
                    keyExtractor = { this.props.keyExtractor }
                    data = { this.state.itemsList }
                    onRefresh = { this._onRefresh }
                    refreshing = { this.state.refreshing }
                    renderItem = { this._renderItemComponent } />
            </View>
        );
    }
}
