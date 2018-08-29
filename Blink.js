import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState( previousState => {
        return {isShowingText: !previousState.isShowingText}
      });
    }, 1000)
  }

  render() {
    let displayText = this.state.isShowingText ? this.props.text : "";

    return (
        <Text style={styles.red}>{displayText}</Text>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red'
  }
});

export default Blink;