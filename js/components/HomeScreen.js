import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
const io = require('socket.io-client');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appendPrefs } from '../actions/index';

import ConfirmSite from './ConfirmSite';
import Login from './Login';
import SignUp from './SignUp';
import UserEdit from './UserEdit';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      data: null,
    }
  }

  componentDidMount() {
    // All sockets go here
    const socket = io(global.HOST, { transports: ['websocket'] });
    socket.on('connect', () => {
      this.setState({ isConnected: true });
    });

    socket.on('ping', (data) => {
      console.log('pinging');
      this.setState({data: data});
    });

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>socket connected: {this.state.isConnected ? 'true' : 'false'}</Text>
        {this.state.data &&
        <Text>
          ping response: {this.state.data}
        </Text>}
        <Text style={styles.title}>Create a page</Text>
        <Text onPress={() => { navigate('SignUp')}} style={styles.defaultText}>Step 0: Sign Up</Text>
        <Text onPress={() => { navigate('Login')}} style={styles.defaultText}>Step 0.5: Log In</Text>
        <Text onPress={() => { navigate('Template')}} style={styles.defaultText}>Step 1: Template</Text>
        <Text onPress={() => { navigate('Color')}} style={styles.defaultText}>Step 2: Color</Text>
        <Text onPress={() => { navigate('Keywords')}} style={styles.defaultText}>Step 3: Keywords</Text>
        <Text onPress={() => { navigate('Title')}} style={styles.defaultText}>Step 4: Title</Text>
        <Text onPress={() => { navigate('ConfirmSite')}} style={styles.defaultText}>Step 5: Confirm Selection</Text>
        <Text onPress={() => { navigate('ShareScreen')}} style={styles.defaultText}>Step 6: Share Link </Text>
        <Text onPress={() => { navigate('Page')}} style={styles.defaultText}>Final Page</Text>
        <Text onPress={() => { navigate('UserEdit')}} style={styles.inDevelopment}>In development: User Editing</Text>
        <Text onPress={() => { navigate('Saved')}} style={styles.inDevelopment}>In development: Saved Pages</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#444',
  },
  defaultText: {
    fontSize: 25,
  },
  inDevelopment: {
    fontSize: 25,
    backgroundColor: 'yellow',
  }
});

function mapStateToProps({ preferences }) {
  return { preferences };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({appendPrefs}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);
