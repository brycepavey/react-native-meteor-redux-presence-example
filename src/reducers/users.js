const {
  UPDATE_USERS
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
      case UPDATE_USERS:
        userList =  action.users
        // console.log('-----USER LIST-----')
        // console.log(userList)
        return {
          ...state,
          users: userList
        };
      default:
        return state;
    }
  }


module.exports = users
