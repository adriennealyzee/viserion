import React from 'react'
import {
  Text,
  View,
  WebView,
  Button
} from 'react-native'
import Swiper from 'react-native-swiper'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSite } from '../actions/index';
import axios from 'axios';

var source =  [{uri: 'http://google.com'},{uri: 'http://nfl.com'},{uri: 'http://cnn.com'}];

class ConfirmSite extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          uris: [],
      }
      this.handlePress = this.handlePress.bind(this);
      this.getURIs = this.getURIs.bind(this);
  }

  componentDidMount(){
    this.getURIs()
  }

 getURIs(){
    axios.get(`${global.HOST}/usertemplates/list`)
    .then((response) => {
      var result = response.data.map(function(val){
        var site = `${global.HOST}/${val}`;
        return {uri: site}
      });
      this.setState({uris: [...result]});
    }).catch(function(err){
      console.log('There was an error(msg):',err);
    })  
  }

  handlePress(index){
    const { navigate } = this.props.navigation; 
    this.props.addSite(this.state.uris[index].uri);
    navigate('ShareScreen');   
  }

  render() {
    if(this.state.uris.length){
      var slides = [];
      for(var u = 0; u < this.state.uris.length; u +=1) {
        slides.push(
          <View key={u} style={styles.slides}>
            <WebView style={{padding: 10, width:370 }}
              automaticallyAdjustContentInsets={false}
              scrollEnabled={true}
              scalesPageToFit={true}
              source={this.state.uris[u]}>
            </WebView>
            <Button title={'Submit'} onPress={this.handlePress.bind(this, u)} />
          </View>
        )
      }
      return (
        <Swiper style={styles.wrapper} showsButtons>
          {slides} 
        </Swiper>
      ) 
    } else {
      return(<Text>Loading...</Text>)
    }
  }  
}

const styles = {
  wrapper: {},
  slides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({addSite}, dispatch)
};

export default connect(null, matchDispatchToProps)(ConfirmSite);