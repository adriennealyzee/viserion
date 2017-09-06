import React from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView, ListView, View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';
import { bingImageSearch } from '../../config/config';
const key = bingImageSearch.API_KEY;

class ImageSearch extends React.Component {
  constructor() { 
    super()
    this.state = {
      images: [],
      text: ''
    }
    this.searchForImages = this.searchForImages.bind(this);
  }

  handlePress(id, url) {
    this.props.onSelect(url);
  }

  searchForImages(){
    axios({
      method: 'get',
      url: `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${this.state.text}&count=24&offset=0&mkt=en-us&safeSearcs`,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Ocp-Apim-Subscription-Key': key
      }
    })
    .then((response) => {
      var urlData =response.data.value.map((obj,id)=> {
        return (
          <TouchableHighlight key={id} onPress={this.handlePress.bind(this, id, obj.contentUrl)}>  
            <Image source={{uri: obj.contentUrl}}
            style={styles.pic} />
          </TouchableHighlight>
        )
      });
        this.setState({images: [...urlData]});
      }).catch(function(err) {
        console.log('error',err);
    });
  }

  render() {
    return (
      <View>
        <Text>Search for an image</Text>
        <TextInput
          style={{height: 40}}
          placeholder="enter image/s to search for"
          onChangeText={ (text) => this.setState({text}) }
          clearButtonMode={'unless-editing'}
          keyboardType={"default"}
        />
        <Button
          onPress={this.searchForImages}
          title="Submit"
          color="#000000"
        />
        <ScrollView>
          <View style={styles.scrollGrid} >
            {this.state.images}
          </View>  
        </ScrollView>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  scrollGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
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
});

export default ImageSearch;