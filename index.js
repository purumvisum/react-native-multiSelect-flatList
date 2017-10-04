 // <EditablieFlatList
 //                    itemsList={this.props.sessions}
 //                    keyExtractor={(item, index) => item.Id}
 //                    searchBy={(item) => item.Description}
 //                    orderBy={(item) => item.Description}
 //                    renderRow={this._renderRow.bind(this)}
 //                    clickOnRow = {this._selectSession.bind(this)}
 //                    removeRow={this._exitOrRemoveSession.bind(this)}
 //                    onRefresh={this.props.updateSessions} - promise
 //                />

 module.exports = require('./src/index');