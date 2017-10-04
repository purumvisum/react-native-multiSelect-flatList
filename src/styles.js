export default ({
    editableFlatListWrapper: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column'
    },

    editableFlatList: {
        flex: 1
    },

    itemRow: {
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1
    },

    itemIconContainer: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#4090ff',
        opacity: 0.3,
        borderRadius: 70,
        padding: 0,
        borderStyle: 'solid'
    },

    itemIconContainerChecked: {
        opacity: 0.8
    },

    itemIcon: {
        fontSize: 40,
        top: 0,
        color: 'white',
        padding: 0,
        margin: 0
    },

    itemRowTextContainer: {
        flex: 1
    },

    actionBar: {
        flex: 0,
        overflow: 'hidden',
        zIndex: 999,
        backgroundColor: '#f1eeef',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    actionBarItem: {
        flex: 1,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: '#d7d3d6'
    },

    actionBarItemIcon: {
        fontSize: 20,
        color: '#7e7e7e'
    },

    actionBarItemText: {
        fontSize: 10,
        color: '#7e7e7e'
    },

    searchBoxWrapper: {
        flex: 0,
        overflow: 'hidden'
    },

    searchBox: {

        padding: 10,
        flex: 0,
        backgroundColor: '#d7d7d7'
    },

    searchIcon: {
        position: 'absolute',
        zIndex: 999,
        top: 12,
        fontSize: 25,
        color: '#a2a2a2',
        backgroundColor: 'transparent'
    },

    searchIconLeft: {
        left: 10
    },

    searchIconRight: {
        right: 10
    },

    searchBoxInput: {
        padding: 0,
        paddingLeft: 25,
        height: 30,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: '#fff'
    }

});
