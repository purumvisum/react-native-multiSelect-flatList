# react-native-multiSelect-flatList
> A simple RN component that can search, open edit block with abilities to select all item, remove selected with animations

# Instalation
`npm install https://github.com/purumvisum/react-native-multiSelect-flatList`

## Usage
```javascript
import EditablieFlatList from 'react-native-multiselect-flatlist';
   
<EditablieFlatList
    itemsList={this.props.sessions}
    keyExtractor={(item, index) => item.Id}
    searchBy={(item) => item.Description}
    orderBy={(item) => item.Description}
    renderRow={this._renderRow.bind(this)}
    clickOnRow = {this._selectSession.bind(this)}
    removeRow={this._exitOrRemoveSession.bind(this)}
    onRefresh={this.props.updateSessions}
 />
```

## Attributes
### `itemsList` `required`  
A list of items to dispalay (equivalent for [FlatList data attr](https://facebook.github.io/react-native/docs/flatlist.html))
### `keyExtractor` `required` 
keyExtractor tells the list to use the ids for the react keys.(equivalent for [FlatList keyExtractor attr](https://facebook.github.io/react-native/docs/flatlist.html))
### `searchBy`
Set item sorting field
### `orderBy`
Set item oreder field
### `renderRow`
Allow to use your styles and set content of items in row. 
> Do not use TouchableOpacity and TouchableHighlight. renderItem method of FlatList already rewrited by module and using touchable elemnts can cancel modle events  
### `clickOnRow`
Allow to add your custom event on row press. It will be canceled whet editing mode is on.
### `removeRow`
Allow to add remove action for list items. 
### `onRefresh`
Allow to add refresh action for list items. 
