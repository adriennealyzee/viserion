import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleColor } from '../actions/index'

class ChooseColor extends React.Component {
  constructor(props) {
    super(props);

    this.buttonPress = this.buttonPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buttonPress(color) {
    //Animate button so the user knows what theyre about to submit
    console.log('You pressed the', color, 'button');
    this.setState({color: color});
  }

  handleSubmit() {
    //Send data to DB
    console.log('Handle submit function. Color: ', this.state.color);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Choose a color ;)</Text>
          <Button
            onPress={this.props.toggleColor.bind(this, 'red')}
            title="Red"
            color="#FF0000"
          />
          <Button
            onPress={this.props.toggleColor.bind(this, 'blue')}
            title="Blue"
            color="#0000FF"
          />
          <Button
            onPress={this.props.toggleColor.bind(this, 'green')}
            title="Green"
            color="#00FF00"
          />          
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            color="#000000"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleColor}, dispatch)
}

export default connect(null, matchDispatchToProps)(ChooseColor);
