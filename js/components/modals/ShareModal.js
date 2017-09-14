import React from 'react';
import { Animated, Dimensions, Image, Text, TouchableOpacity, View, WebView, Button, StyleSheet, TextInput, Clipboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updatePrefs } from '../../actions/index';
import { Ionicons } from '@expo/vector-icons';

var {
  width: deviceWidth
} = Dimensions.get('window');

class ShareModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(deviceWidth),
    };
    this.siteUrl = `localhost:8080/${this.props.siteId}`;
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 200,
      toValue: 0
    }).start();
  }

  async _setClipboardContent(){
    Clipboard.setString(this.siteUrl);
    // try {
    //   var content = await Clipboard.getString();
    //   this.setState({content});
    // } catch (e) {
    //   this.setState({content:e.message});
    // }
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 200,
      toValue: deviceWidth
    }).start(this.props.closeModal)
  }

  render() {
    return (
      <Animated.View style={[styles.modal, {transform: [{translateX: this.state.offset}]}]}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex:1 }}>
            <Button onPress={this.closeModal} title="Close modal" />
          </View>
          <View style={{ flex:1 }}>
            <Ionicons name="ios-copy-outline" size={55} color="white" />
          </View>
          <View style={{ flex:1 }}>
            <Ionicons name="logo-twitter" size={55} color="white" />
          </View>
          <View style={{ flex:1 }}>
            <Ionicons name="logo-facebook" size={55} color="white" />
          </View>
          <View style={{ flex:1 }}>
            <Ionicons name="md-mail" size={55} color="white" />
          </View>

          {/*<Text>Send to a friend</Text>*/}
          {/*<TextInput*/}
            {/*style={{padding: 10, borderColor: 'gray', borderWidth: 1, fontSize: 14}}*/}
            {/*value={this.siteUrl}*/}
          {/*/>*/}
          {/*<Button onPress={this._setClipboardContent} title="Copy to clipboard" />*/}


        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
    borderColor: '#eee',
    borderWidth: 1,
  },
  flexContainer: {
    flex: 1,
  },
  webView: {
    padding: 10,
    width: '100%'
  },
  modal: {
    backgroundColor: 'rgba(60,72,101,1)',
    position: 'absolute',
    top: 250,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.1,
  },
  // innerModal:{
  //   width: '80%',
  //   backgroundColor: '#fff',
  //   padding: 10,
  //   position: 'relative',
  //   top: '5%',
  //   borderRadius: 10
  // },
  bigText:{
    fontSize: 20,
  },
});

function mapStateToProps({ site, siteId }) {
  return { site, siteId };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ updatePrefs }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(ShareModal);

