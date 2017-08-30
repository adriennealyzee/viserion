import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { toggleLayout } from '../actions/index';

class ChooseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Stub layout data
      layouts: [
        { name: 'grid',
          uri: require('../../images/portfolio-template.jpg'),
        },
        { name: 'basic',
          uri: require('../../images/spotify-template.png'),
        },
        { name: 'contact',
          uri: require('../../images/contact-template.png'),
        },
      ],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLayoutChoices = this.renderLayoutChoices.bind(this);
  }

  renderLayoutChoices() {
    return this.state.layouts.map((layout, index) => {
      return ( 
        <TouchableHighlight key={index} style={this.props.layouts[layout.name] && styles.selected} onPress={this.props.toggleLayout.bind(this, layout.name)}>
          <Image
            style={styles.template}
            source={layout.uri}/>
        </TouchableHighlight > 
      )
    })
  }

  handleSubmit() {
    const { navigate } = this.props.navigation;
    navigate('Color');
  }

  render() {
    return (
      <View style={styles.container}>        
        <Text>Choose some look and feels that you like</Text>
        { this.renderLayoutChoices() }
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
    paddingTop: 30,
    backgroundColor: '#BEBDC0',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 350,
  },
  selected: {
    opacity: 0.5,
    backgroundColor: '#000'
  },
  template: {
    width: 200,
    height: 100,
  },
});

function mapStateToProps({ layouts }) {
  return { layouts };
}

export default connect(mapStateToProps, { toggleLayout })(ChooseLayout);


