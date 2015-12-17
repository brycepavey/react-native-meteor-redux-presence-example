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
    console.log('---STORE DDP--')
    console.log(store.getState().anonUsers)
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
