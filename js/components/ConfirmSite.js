import React from 'react';
import {
  Text,
  View,
  WebView,
  Button,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSite, selectPreferences } from '../actions/index';
import axios from 'axios';
import prefToReactify from '../../app/utils/prefToReactify';
import styles from '../styles';


class ConfirmSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      preferencesAll: this.props.preferencesAll,
    };
    this.handlePress = this.handlePress.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  handlePress(index) {
    const { navigate } = this.props.navigation; 
    this.props.selectPreferences(index);
    navigate('UserEdit');
  }

  renderViews() {
    return this.props.preferencesAll.map((preference, index) => {
      const html = prefToReactify(preference);
      return (
        <View key={index} style={styles.basicContainer}>
          <View style={styles.basicContainer}>
            <WebView style={styles.screenWidth}
              automaticallyAdjustContentInsets={false}
              scrollEnabled={true}
              scalesPageToFit={true}
              source={{ html: html }}>
            </WebView>
          </View>
        </View>
      );
    });
  }

  updateIndex(index) {
    this.setState({ index });
  }

  render() {
    if(!!this.props.preferencesAll){
      return (
        <View style={{flex:1}}>
          <Swiper showsButtons onIndexChanged={this.updateIndex}>
            {this.renderViews()}
          </Swiper>
          <View style={styles.absoluteBottom}>
            <TouchableHighlight
              style={ [styles.buttonCentered, styles.continueButton, {width: 190} ] }
              underlayColor='#1D59BF'
              onPress={this.handlePress.bind(this, this.state.index)}
            >
              <Text style={ [styles.buttonText] }>Start editing</Text>
            </TouchableHighlight>
          </View>
        </View>
      ) 
    } else {
      return(<Text>Loading...</Text>)
    }
  }  
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectSite, selectPreferences}, dispatch)
};

const mapStateToProps = ({preferencesAll}) => {
  return {preferencesAll};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSite);

