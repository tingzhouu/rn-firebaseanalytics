import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Profile</Text>
      </View>
    );
  }
}
export default Profile;

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
