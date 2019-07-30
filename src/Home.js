import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

class Home extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const didFocusSubscription = navigation.addListener(
      'didFocus',
      (payload) => {
        console.log('didFocus', payload);
        firebase.analytics().logEvent('OPEN_HOME_PAGE', { name: 'chowyunfatt' });
      },
    );

    const didBlurSubscription = navigation.addListener(
      'didBlur',
      (payload) => {
        console.log('didBlur', payload);
        firebase.analytics().logEvent('LEFT_HOME_PAGE', { name: 'chowyunfatt' });
      },
    );
  }

  onPressLogEvent = () => {
    firebase.analytics().logEvent('LOGEVENTTEST', { name: 'chowyunfatt' });
    console.log('event logged');
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity
          onPress={this.onPressLogEvent}
          style={styles.button}
        >
          <Text>LOG EVENT</Text>
        </TouchableOpacity>

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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'orange',
  }
});
