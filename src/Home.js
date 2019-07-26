import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {
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
