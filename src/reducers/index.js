const { combineReducers } = require('redux')
const users = require('./users')

const rootReducer = combineReducers({
  users
})

module.exports = rootReducer
