import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

class Profile extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const didFocusSubscription = navigation.addListener(
      'didFocus',
      (payload) => {
        console.log('didFocus', payload);
        firebase.analytics().logEvent('OPEN_PROFILE_PAGE', { name: 'chowyunfatt' });
      },
    );

    const didBlurSubscription = navigation.addListener(
      'didBlur',
      (payload) => {
        console.log('didBlur', payload);
        firebase.analytics().logEvent('LEFT_PROFILE_PAGE', { name: 'chowyunfatt' });
      },
    );
  }

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
