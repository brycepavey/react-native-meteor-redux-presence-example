var actions = exports = module.exports

exports.UPDATE_USERS = 'UPDATE_USERS'

exports.updateUsers = function updateUsers(users) {
  return {
    type: actions.UPDATE_USERS,
    anonUsers: users
  }
}
