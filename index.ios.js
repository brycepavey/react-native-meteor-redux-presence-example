const React = require('react-native')
const { Provider } = require('react-redux/native')
const App = require('./src/containers/App')
const configureStore = require('./src/store/configureStore')
const UsersActions = require('./src/actions/users')

const {
  Component,
  AppRegistry
} = React

const store = configureStore()

class Presence extends Component {
  componentDidMount() {

    // var ddpClient;
    // var DDPClient = require("ddp-client");
    // var _ = require('lodash');
    //
    // const { addUser } = this.props;
    //
    // ddpClient = new DDPClient({url: 'ws://localhost:3000/websocket'});
    // ddpClient.connect(() =>
    //   ddpClient.subscribe('anonUsers')
    // );

    // observe the users collections
    // var anonObserver = ddpClient.observe("anonUsers");
    // anonObserver.added = () => addUser(_.cloneDeep(_.values(ddpClient.collections.anonUsers)));
    // anonObserver.changed = () => this.props.SOMETHING();
    // anonObserver.removed = () => removeUser();
  }


  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Presence', () => Presence);
