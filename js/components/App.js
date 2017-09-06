import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import ChooseColor from './ChooseColor';
import ChooseTitle from './ChooseTitle';
import ChooseLayout from './ChooseLayout';
import ChooseKeywords from './ChooseKeywords';
import ConfirmSite from './ConfirmSite';
import ImageUploader from './ImageUploader';
import SavedPages from './SavedPages';
import SharedScreen from './ShareScreen';
import Login from './Login';
import SignUp from './SignUp';
import UserEdit from './UserEdit';
import ColorPicker from './modals/ColorPicker';
import ColorModal from './modals/ColorModal';
const io = require('socket.io-client');
import axios from 'axios';
import Testing from './Testing';
import AddComponent from './AddComponent';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
);

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      data: null,
    }
  }

  componentDidMount() {
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
        <Text onPress={() => { navigate('Saved')}} style={styles.inDevelopment}>In development: Saved Pages</Text>
        <Text onPress={() => { navigate('UserEdit')}} style={styles.inDevelopment}>In development: User Editing</Text>
        <Text onPress={() => { navigate('AddComponent')}} style={styles.inDevelopment}>In development: Add Component Testing</Text>

        <Text onPress={() => { navigate('Image')}} style={styles.defaultText,styles.selectedText}>(Optional) Add Image</Text>
      </View>
    )
  }
}

const AppNavigator = StackNavigator({
  Index: { screen: UserEdit },
  // Index: { screen: AddComponent },
  // Index: { screen: HomeScreen },
  Color: { screen: ChooseColor },
  Template: { screen: ChooseLayout },
  Title: { screen: ChooseTitle },
  ConfirmSite: { screen: ConfirmSite },
  ShareScreen: { screen: SharedScreen },
  Keywords: { screen: ChooseKeywords },
  Image: { screen: ImageUploader },
  Saved: { screen: SavedPages },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  UserEdit: { screen: UserEdit },
  ColorPicker: { screen: ColorPicker },
  ColorModal: { screen: ColorModal },
  AddComponent: { screen: AddComponent },
});

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

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
