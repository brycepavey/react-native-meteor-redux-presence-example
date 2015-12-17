const React = require('react-native')
const {
  Component,
  StyleSheet,
  Text,
  View
} = React

class User extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>
          {this.props.name}
        </Text>
      </View>
    )
  }
}

module.exports = User
