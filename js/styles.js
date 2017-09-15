import { Dimensions, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222A3C',
    // padding: 10,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 10,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#060E22',
  },
  mainContainer: {
    flex: 2,
    paddingVertical: 10,
  },
  footerContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#bbb',
  },

  // Keywords
  keyword: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    margin: 5,
  },
  keywordsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  keywordSelected: {
    backgroundColor: '#3D6DF9',
  },
  keywordText: {
    fontSize: 16,
    color: '#fff',
  },

  screenWidth: {
    width: Dimensions.get('window').width,
  },

  // Typography
  text: {
    fontFamily: 'Avenir-Book',
    color: '#fff'
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 32,
    lineHeight: 35,
  },
  subtitle: {
    fontSize: 20,
    color: '#d0d0d0',
  },
  muted: {
    color: '#aaa'
  },
  buttonText: {
    fontFamily: 'Avenir-Heavy',
    color: '#fff',
    fontSize: 19,
  },
  iconText: {
    fontSize: 12,
  },

  // Modals
  modal: {
    backgroundColor: 'rgba(0,0,0,.3)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  innerModal: {
    width: '80%',
    backgroundColor: '#222A3C',
    padding: 10,
    position: 'relative',
    top: '5%',
    borderRadius: 10,
    color: 'white',
  },
  form: {
    padding: 10,
    borderColor: '#eee',
    borderWidth: 1,
    color: '#FFF',
    backgroundColor: '#060E22',
  },

  // Color Palette
  circleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  circle: {
    height: (Dimensions.get('window').width / 3) - 20,
    width: (Dimensions.get('window').width / 3) - 20,
    borderRadius: 200,
    margin: 5,
  },

  // Buttons
  absoluteBottom: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  absoluteRight: {
    position: 'absolute',
    top: 100,
    right: 0,
  },
  sideButton: {
    width: 50,
    height: 50,
    backgroundColor: '#222A3C',

  },
  buttonCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 1,
    paddingTop: 2,
  },
  addButton: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000000',
  },
  loginButton: {
    backgroundColor: '#3E84FB',
    borderRadius: 30,
    width: 200,
    height: 35,
    marginTop: 10,
  },
  facebookButton: {
    backgroundColor: '#1944D5',
    alignSelf: 'center',
  },
  googleButton: {
    backgroundColor: '#B4233D',
    alignSelf: 'center',
  },

  // Grids
  itemsColumn: {
    flexDirection: 'column',
  },
  boxItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#eee',
    margin: 1,
    padding: 10,
  },
  continueButton: {
    backgroundColor: '#3E84FB',
    borderRadius: 30,
    width: 150,
    height: 45,
  },

  // Inputs
  input: {
    height: 35,
    width: 200,
    borderRadius: 2,
    backgroundColor: 'rgba(225,225,225,0.1)',
    marginVertical: 5,
    color: '#000',
    paddingLeft: 5,
  },

  center: {
    alignSelf: 'center',
  },

  // ImageSearch
  scrollGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    paddingVertical: 20,
  },
  pic: {
    backgroundColor: '#CCC',
    margin: 10,
    width: 80,
    height: 80
  },

  // Share link
    modalBottom: {
      // backgroundColor: 'rgba(60,72,101,1)',
      position: 'absolute',
      top: Dimensions.get('window').height / 1.75 ,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      alignItems: 'center',
      height: Dimensions.get('window').height * 0.1,
  },
  innerModalBottom:{
    width: Dimensions.get('window').width-10,
    backgroundColor: 'rgba(60,72,101,1)',
    padding: 10,
    position: 'relative',
    top: '5%',
    borderRadius: 10
  },
});