const { bindActionCreators }  = require ('redux')
const { connect } = require ('react-redux/native')
const ActiveUsers = require('../components/ActiveUsers')
const UsersActions = require('../actions/users')

function mapStateToProps(state) {
  return {
    users: state.users,
    ddpClient: state.users.ddpClient
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UsersActions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ActiveUsers)
