import React from 'react';
import { Image, View, Text} from 'react-native';
import axios from 'axios';

export default class SavedPages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { templates: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/usertemplates/all')
      .then((res) => {
        this.setState({ templates: res.data });
      })
      .catch((err) => console.log('Err getting /usertemplates/all: ', err));
  }

  render() {
    let images = [];
    if (this.state.templates.length > 0){
      // Pull just the URLs
      images = this.state.templates.map((t) => {
        const id = t['_id'];
        return (
          <View key={'v'+id}>
            <Text key={'t'+id}>{t['_id']}</Text>
            { t.screenshot &&
            <Image key={'i'+id}
                   style={{width:400, height: 200}}
                   source={require('./example.png')}
                   resizeMode="contain" /> }
          </View>
        )
      })
    }
    return (
      <View>
        <Text>Saved pages</Text>
        {images}
      </View>
    )
  }
}