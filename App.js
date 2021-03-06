import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Blink from './Blink';

class Greeting extends Component {
  render() {
    return (
        <Text>Hello {this.props.name}</Text>
    )
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Ethan'/>
        <Greeting name='Nguyen'/>
        <Blink text='Ethan Nguyen'/>
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
