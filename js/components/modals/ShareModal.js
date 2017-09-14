import React from 'react';
import { Animated, Dimensions, Image, Text, TouchableOpacity, TouchableHighlight, View, WebView, Button, StyleSheet, TextInput, Clipboard, Linking, Share } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updatePrefs } from '../../actions/index';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles';

var {
  height: deviceHeight
} = Dimensions.get('window');

class ShareModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(deviceHeight),
    };
    this.siteUrl = `${global.HOST}/${this.props.siteId}`;
    this.closeModal = this.closeModal.bind(this);
    this._setClipboardContent = this._setClipboardContent.bind(this);
    this._handleLinkPress = this._handleLinkPress.bind(this);
    this.share = this.share.bind(this);
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: 0
    }).start();
  }

  async _setClipboardContent(){
    Clipboard.setString(this.siteUrl);
  }

  _handleLinkPress(link) {
    Linking.openURL(link);
  }

  share() {
    Share.share({
      message: `View my new new site at ${this.siteUrl}`,
      url: this.siteUrl,
      title: 'Come check out my new site'
    })
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: deviceHeight
    }).start(this.props.closeModal)
  }

  render() {
    return (
      <Animated.View style={[styles.modalBottom, {transform: [{translateY: this.state.offset}]}]}>
        <View style={[ styles.innerModalBottom, {justifyContent: 'center'}] }>
          <Text style={styles.text}>Your website is located at:</Text>
          <TouchableOpacity onPress={() => this._handleLinkPress(this.siteUrl)}>
            <Text style={styles.text}>{this.siteUrl}</Text>
          </TouchableOpacity>
        </View>
        <View style={[ styles.innerModalBottom, { flexDirection: 'row', justifyContent: 'space-between'}] }>
            <TouchableOpacity
              onPress={this._setClipboardContent}
              style={{ flex:1, alignItems: 'center' }}>
              <Ionicons name="ios-copy-outline" size={45} color="rgba(250,250,250,0.7)" />
              <Text style={[styles.text, styles.iconText]}>Copy link</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this._handleLinkPress(`sms:1&body=Check%20out%20my%20new%20site%20at%20${this.siteUrl}`) }}
              style={{ flex:1, alignItems: 'center' }}>
              <Ionicons name="ios-chatboxes-outline" size={45} color="rgba(250,250,250,0.7)" />
              <Text style={[styles.text, styles.iconText]}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._handleLinkPress(`mailto:recipient?subject=Check%20out%20my%20new%20website!&body=View%20it%20at%20${this.siteUrl}`)}
              style={{ flex:1, alignItems: 'center' }}>
              <Ionicons name="md-mail" size={45} color="rgba(250,250,250,0.7)" />
              <Text style={[styles.text, styles.iconText]}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ this.share }
              style={{ flex:1, alignItems: 'center' }}>
              <Ionicons name="logo-twitter" size={45} color="rgba(250,250,250,0.7)" />
              <Text style={[styles.text, styles.iconText]}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ this.share }
              style={{ flex:1, alignItems: 'center' }}>
              <Ionicons name="logo-facebook" size={45} color="rgba(250,250,250,0.7)" />
              <Text style={[styles.text, styles.iconText]}>Facebook</Text>
            </TouchableOpacity>



            {/*<Button onPress={this._setClipboardContent} title="Copy to clipboard" />*/}
        </View>
        <TouchableHighlight
          onPress={this.closeModal}
          style={[ styles.innerModalBottom, { marginTop: 20, alignItems: 'center'}] }
          underlayColor="rgba(60,72,101,1)"
        >
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Close</Text>
        </TouchableHighlight>
      </Animated.View>
    )
  }
}
//
// const styles = StyleSheet.create({
//   form: {
//     padding: 10,
//     borderColor: '#eee',
//     borderWidth: 1,
//   },
//   flexContainer: {
//     flex: 1,
//   },
//   webView: {
//     padding: 10,
//     width: '100%'
//   },
//   modal: {
//     // backgroundColor: 'rgba(60,72,101,1)',
//     position: 'absolute',
//     top: Dimensions.get('window').height / 1.5 ,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     width: '100%',
//     alignItems: 'center',
//     height: Dimensions.get('window').height * 0.1,
//   },
//   innerModal:{
//     width: Dimensions.get('window').width-10,
//     backgroundColor: 'rgba(60,72,101,1)',
//     padding: 10,
//     position: 'relative',
//     top: '5%',
//     borderRadius: 10
//   },
//   bigText:{
//     fontSize: 20,
//   },
// });

function mapStateToProps({ site, siteId }) {
  return { site, siteId };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ updatePrefs }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(ShareModal);

