import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  gotoProfile = () => {
    const { navigation } = this.props
    navigation.navigate('Profile')
  }

  render() {
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={() => this.gotoProfile()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
