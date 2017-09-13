import React from 'react';
import { Animated, Button, Image, Text, TouchableOpacity, View, ScrollView, WebView, Dimensions, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appendPrefs } from '../../actions/index';
import componentMap from '../../componentMap';
import styles from '../../styles'
const io = require('socket.io-client');
const tempURL = require('../../../images/components/text_image.png');

var {
  width: deviceWidth
} = Dimensions.get('window');

var id = 0;

class AddPageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(deviceWidth),
      compList: [],
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.mapEach = this.mapEach.bind(this);
    this.newId = this.newId.bind(this);
  }

  componentWillMount() {
    this.mapEach();
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: 0,
    }).start();
  }

  newId(prefix = 'id') {
    id += 2;
    return prefix + id;
  }

  mapEach() {
    var result = [];
    for (var key in componentMap) {
      let mapped = key.split(/(?=[A-Z])/).join(" ");
      //push the image url in here too
      result.push({ attr: componentMap[key], displayName: mapped, img: tempURL });
    }
    this.setState({ compList: result });
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: deviceWidth,
    }).start(this.props.closeModal);
  }

  handleAdd(newComponent) {
    this.closeModal();
    const socket = io(global.HOST, { transports: ['websocket'] });
    newComponent.id = this.newId();
    socket.emit('addPref', newComponent );
  }

  render() {
    return (
      <Animated.View
        style={[styles.modalFull, { transform: [{ translateX: this.state.offset }] }]}
      >
        <View style={styles.innerModal}>
          <TouchableOpacity onPress={this.closeModal}>
            <Text style={styles.centered}>Close Menu</Text>
          </TouchableOpacity>
          <ScrollView>
            {this.state.compList.map((comp, index) =>
              <View key={index}>
                <Text
                  onPress={this.handleAdd.bind(this, comp.attr)}
                  style={[{ fontSize: 20, fontFamily: 'Avenir-Medium' }]}>{comp.displayName}</Text>
                {/*<TouchableOpacity*/}
                  {/*onPress={this.handleAdd.bind(this, comp.attr)}*/}
                {/*>*/}
                  {/*<Image*/}
                    {/*style={{ width: 194, height: 120 }}*/}
                    {/*source={comp.img}*/}
                  {/*/>*/}
                {/*</TouchableOpacity>*/}
              </View>)
            }
          </ScrollView>
         </View>
      </Animated.View>
    )
  }
}

function mapStateToProps({ preferences }) {
  return { preferences };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({appendPrefs}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(AddPageModal);
