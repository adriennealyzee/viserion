import React from 'react';
import { StyleSheet, Text, Button, AsyncStorage } from 'react-native';
import { DeckSwiper, View } from 'native-base';
import { connect } from 'react-redux';
import { addLayouts } from '../../actions/index';
import layoutsData from './layoutsData';
import LayoutItem from './LayoutItem';
import styles from '../../styles';

class ChooseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Stub layout data
      layoutsData: layoutsData,
      currentLayout: {'layouts':[]},
      chosenLayouts: {
      },
      selectedLayouts: 0,
    };
    this.handleLayoutPress = this.handleLayoutPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRightSwipe = this.handleRightSwipe.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('userId')
      .then(username => console.log(username));
  }

  handleLayoutPress(layout, index) {
    console.log('layout pressed', layout);
    this.setState({ currentLayout: layout });
  }

  calculatePreferredLayouts() {
    return Object.keys(this.state.chosenLayouts);
  }

  handleRightSwipe() {
    const { currentLayout } = this.state;
    const newChosenLayouts = Object.assign({}, this.state.chosenLayouts);
    currentLayout.layouts.forEach(layoutType => {
      // Keep track of desired layout styles with shape chosenLayouts: {grid: 1, hero: 3}
      if (!!layoutType && newChosenLayouts[layoutType]) {
        newChosenLayouts[layoutType]++;
      } else {
        newChosenLayouts[layoutType] = 1;
      }
    });
    this.setState({ 
      selectedLayouts: this.state.selectedLayouts + 1,
      chosenLayouts: newChosenLayouts 
    });
  }

  handleSubmit() {
    const { navigate } = this.props.navigation;
    navigate('PresetPalettes');
    // navigate('ThreeColorPicker');
    const layouts = this.calculatePreferredLayouts();
    console.log('layouts>>>>>>>>', layouts);
    this.props.addLayouts(layouts);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, styles.headerHeight]}>
          <Text style={styles.title}>What kind of websites do you like?</Text>
          <Text>We'll use these as inspiration.</Text>
        </View>
        <View style={styles.mainHeight}>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={this.state.layoutsData}
            looping={false}
            onSwipeRight={this.handleRightSwipe}
            onSwipeLeft={this.handleRightSwipe}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.title}>That\'s all!</Text>
              </View>}
            renderItem={(layout) =>
              <LayoutItem
                layout={layout}
                handleLayoutPress={this.handleLayoutPress}
              />
            }
          />
        </View>
        <View style={styles.footerHeight}>
          <Button
            onPress={this.handleSubmit}
            title="Continue"
            style={styles.bottomButton}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps({ layouts }) {
  return { layouts };
}

export default connect(mapStateToProps, { addLayouts })(ChooseLayout);

