import React from 'react';
import { Platform, StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, TabView } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ThreeColorPicker from './ColorPicker/ColorPicker';
import ChooseTitle from './ChooseTitle';
import ChooseLayout from './ChooseLayout/index';
import ChooseKeywords from './ChooseKeywords';
import ConfirmSite from './ConfirmSite';
import SavedPages from './SavedPages';
import SharedScreen from './ShareScreen';
import Login from './Login/index';
import SignUp from './SignUp/index';
import UserEdit from './UserEdit';
import ColorPicker from './modals/ColorPicker';
import ColorModal from './modals/ColorModal';
import HomeScreen from './HomeScreen';
import MainTabNavigator from './MainTabNavigator';
const io = require('socket.io-client');
import PresetPalettes from './ColorPicker/ColorPalette';
import Prescreen from './Prescreen';
import GalleryViewer from './Gallery/GalleryViewer';
import LoginSignUpSplash from './LoginSignUpSplash';

export default RootNavigator = StackNavigator(
  {
    Index: { screen: MainTabNavigator },
    // Index: { screen: HomeScreen },
    // Index: { screen: LoginSignUpSplash },
    Prescreen: { screen: Prescreen },
    MainApp: { screen: MainTabNavigator },
    PresetPalettes: { screen: PresetPalettes },
    ThreeColorPicker: { screen: ThreeColorPicker },
    Template: { screen: ChooseLayout },
    Title: { screen: ChooseTitle },
    ConfirmSite: { screen: ConfirmSite },
    ShareScreen: { screen: SharedScreen },
    Keywords: { screen: ChooseKeywords },
    Saved: { screen: SavedPages },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    UserEdit: { screen: UserEdit },
    ColorPicker: { screen: ColorPicker },
    ColorModal: { screen: ColorModal },
    GalleryViewer: { screen: GalleryViewer },
    LoginSignUpSplash: { screen: LoginSignUpSplash },
  },
  {
    navigationOptions: {
      // title: 'QuikPages',
      header: null
    },
  }
);
