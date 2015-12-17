const React = require('react-native')
const {
  StyleSheet,
  ListView,
  Text,
  TextInput,
  View
} = React
const User = require('./User')



const ActiveUsers = React.createClass({


  componentWillMount: function() {
    // console.log('-----MOUNT STATE-----')
    // console.log(this.props)
    this.datasource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  },

  componentDidMount() {
    var _ = require('lodash');

    let { ddpClient, updateUsers } = this.props

    var anonObserver = ddpClient.observe("anonUsers");
    anonObserver.added = () => updateUsers(_.cloneDeep(_.values(ddpClient.collections.anonUsers)));

  },

  renderRow: function(rowData) {
    // console.log('ROW DATA')
    // console.log(rowData)
    return (
      <User name={rowData.username} />
    )
  },

  render: function() {
    let { users } = this.props
    console.log('---USERS---')
    console.log(users.users)
    return (
      <View style={styles.container}>

      </View>
    )
  }
})

module.exports = ActiveUsers


const styles = StyleSheet.create({
  activeUsersHeader: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20,
    paddingTop: 100,
    paddingBottom: 20
  },
  container: {
    padding: 20,
    marginTop: 65,
  },
  name: {
    flex: 5,
    fontSize: 14,
  },
  flowRight: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  incompleteCount: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#2196F3',
  },
  listView: {
    paddingTop: 2,
    backgroundColor: 'white',
  },
  loginButton: {
    textAlign: 'center',
    flex: 5,
  },
  loginLabels: {
    flex: 1,
    textAlign: 'left'
  },
  loginEntry: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 5,
    marginBottom: 20
  }
});

// <ListView
//   dataSource={this.dataSource.cloneWithRows(users)}
//   renderRow={this.renderRow}
// />
