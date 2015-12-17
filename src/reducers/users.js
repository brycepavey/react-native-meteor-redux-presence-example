const {
  ADD_USER
} = require('../actions/users')

const initialState = {
  users: [],
  ddpClient: createDDP()
}

function createDDP() {
  var ddpClient;
  var DDPClient = require("ddp-client");
  var _ = require('lodash');

  ddpClient = new DDPClient({url: 'ws://localhost:3000/websocket'});
  ddpClient.connect(() =>
    ddpClient.subscribe('anonUsers')
  );

  return ddpClient
}

function users(state = initialState, action) {
    let list

    switch (action.type) {
      case ADD_USER:
        // userList =  state.users.concat([action.user])

        return {
          ...state,
          users: userList
        };
      default:
        return state;
    }
  }


module.exports = users
