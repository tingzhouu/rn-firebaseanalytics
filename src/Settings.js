import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

class Settings extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const didFocusSubscription = navigation.addListener(
      'didFocus',
      (payload) => {
        console.log('didFocus', payload);
        firebase.analytics().logEvent('OPEN_SETTINGS_PAGE', { name: 'chowyunfatt' });
      },
    );

    const didBlurSubscription = navigation.addListener(
      'didBlur',
      (payload) => {
        console.log('didBlur', payload);
        firebase.analytics().logEvent('LEFT_SETTINGS_PAGE', { name: 'chowyunfatt' });
      },
    );
  }

  onPressNavigateToProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Settings</Text>
        <Text
          style={styles.navigateLink}
          onPress={this.onPressNavigateToProfile}
        >
          Go to Profile
        </Text>
      </View>
    );
  }
}
export default Settings;

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
  navigateLink: {
    marginTop: 10,
    color: 'blue',
  },
});
