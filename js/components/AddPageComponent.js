import React from 'react';
import { Animated, Button, Image, Text, TouchableOpacity, View, WebView, Dimensions, StyleSheet } from 'react-native';
// import { StackNavigator } from 'react-navigation';

var {
  height: deviceHeight
} = Dimensions.get('window');

export default class AddPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  render() {
    return(
      <View style={styles.flexContainer}>
        <WebPage openModal={() => this.setState({modal: true})} />
        {this.state.modal ? <Modal closeModal={() => this.setState({modal: false}) } /> : null}
      </View>
    )
  }
}

class WebPage extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <View style={styles.flexContainer}>
        <WebView style={styles.webView}
                 automaticallyAdjustContentInsets={false}
                 scrollEnabled={true}
                 scalesPageToFit={true}
                 source={{uri:`${global.HOST}/pages/templates/simple`}} />
        <Button
          onPress={this.props.openModal}
          title="Add New Component"
        />
      </View>
    )
  };
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: new Animated.Value(deviceHeight) };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: 0
    }).start();
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  }

  render() {
    return (
      <Animated.View
        style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
        <View style={styles.innerModal}>
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={styles.center}>Close Menu</Text>
          </TouchableOpacity>
          <Text style={styles.bigText}>Pricing</Text>
          <Image
            style={{width: 260, height: 170}}
            source={require('../../images/components/pricing.png')}
          />
          <Text style={styles.bigText}>Text and Image</Text>
          <Image
            style={{width: 260, height: 120}}
            source={require('../../images/components/text_image.png')}
          />
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  center:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  webView: {
    padding: 10,
    width: '100%'
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  innerModal:{
    width: '80%',
    backgroundColor: '#fff',
    padding: 10,
    position: 'relative',
    top: '5%',
    borderRadius: 10
  },
  bigText:{
    fontSize: 20,
  }
});