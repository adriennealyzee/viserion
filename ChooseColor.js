import React from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress(color) {
    console.log('You pressed the', color, 'button');
    this.setState({color: color});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Choose a color ;)</Text>
          <Button
            onPress={this.buttonPress.bind(this, 'red')}
            title="Red"
            color="#FF0000"
          />
          <Button
            onPress={this.buttonPress.bind(this, 'blue')}
            title="Blue"
            color="#0000FF"
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
