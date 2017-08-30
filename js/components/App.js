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
import AddPageComponent from './AddPageComponent';
import Login from './Login';
import SignUp from './SignUp';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
);

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create a page</Text>
        <Text onPress={() => { navigate('SignUp')}} style={styles.defaultText,styles.selectedText}>Step 0: Sign Up</Text>
        <Text onPress={() => { navigate('Login')}} style={styles.defaultText,styles.selectedText}>Step 0.5: Log In</Text>
        <Text onPress={() => { navigate('Template')}} style={styles.defaultText,styles.selectedText}>Step 1: Template</Text>
        <Text onPress={() => { navigate('Color')}} style={styles.defaultText,styles.selectedText}>Step 2: Color</Text>
        <Text onPress={() => { navigate('Keywords')}} style={styles.defaultText,styles.selectedText}>Step 3: Keywords</Text>
        <Text onPress={() => { navigate('Title')}} style={styles.defaultText,styles.selectedText}>Step 4: Title</Text>
        <Text onPress={() => { navigate('ConfirmSite')}} style={styles.defaultText,styles.selectedText}>Step 5: Choose a page</Text>
        <Text onPress={() =>{ navigate('ShareScreen')}} style={styles.defaultText,styles.selectedText}>Step 6: Share Link </Text>
        <Text onPress={() => { navigate('Image')}} style={styles.defaultText,styles.selectedText}>(Optional) Add Image</Text>
        <Text onPress={() => { navigate('Saved')}} style={styles.defaultText,styles.selectedText}>Saved Pages</Text>
        <Text onPress={() => { navigate('AddPageComponent')}} style={styles.defaultText}>AddPageComponent Test</Text>
      </View>
    )
  }
}

const AppNavigator = StackNavigator({
  Index: { screen: HomeScreen },
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
  AddPageComponent: { screen: AddPageComponent },
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
  },
  selectedText: {
    fontSize: 25,
    backgroundColor: 'yellow',
  }
});

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
  );
