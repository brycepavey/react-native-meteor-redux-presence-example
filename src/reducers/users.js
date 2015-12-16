const {
  ADD_USER
} = require('../actions/users')

const initialState = {
  users: []
}

function create(client) {
  return function users(state = initialState, action) {
    let list

    switch (action.type) {
      case ADD_USER:
        userList =  state.users.concat([action.user])
        console.log("STATE:")
        console.log(state)
        return {
          ...state,
          users: userList
        };
      default:
        return state;
    }
  }
}

module.exports = create
