var actions = exports = module.exports

exports.ADD_USER = 'ADD_USER'

exports.addUser = function addUser(user) {
  return {
    type: actions.ADD_USER,
    user: user
  }
}
