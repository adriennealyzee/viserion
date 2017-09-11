import React from 'react';
import { Platform, StyleSheet, Button, Text, View, ScrollView } from 'react-native';
// import { TabNavigator, StackNavigator, TabView } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appendPrefs, updatePrefs } from '../actions/index';
import { Ionicons } from '@expo/vector-icons';
import RootNavigator from './RootNavigator';
const io = require('socket.io-client');

class Main extends React.Component{
  componentDidMount() {
    // All sockets go here
    const socket = io(global.HOST, { transports: ['websocket'] });

    socket.on('addPrefDomStore', (addition) => {
      this.props.appendPrefs(addition)
    });

    socket.on('updatePrefDomStore', (newPrefs) => {
      this.props.updatePrefs(newPrefs)
    });
  }

  render() {
    return(
      <RootNavigator />
    )
  }
}

function mapStateToProps({ preferences }) {
  return { preferences };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ appendPrefs, updatePrefs }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Main);