import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {
  componentDidMount() {
    const willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        console.log('willFocus', payload);
      }
    );

    const didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        console.log('didFocus', payload);
      }
    );

    const willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload => {
        console.log('willBlur', payload);
      }
    );

    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.log('didBlur', payload);
      }
    );
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
