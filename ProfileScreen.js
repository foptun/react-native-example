import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import ShowData from "./ShowData";
import axios from 'axios';

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Profile',
  };

  state = {
    category: []
  }

  componentDidMount() {
    this.findAllCategory()
  }

  async findAllCategory(){
    const response = await axios.get("http://165.22.96.229:8080/api/category")
    console.log(response.data)
    if(response.status === 200){
      console.log("IF")
      this.setState({
        category: response.data
      })
    }


  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
        <ShowData data={ this.state.category } />
      </SafeAreaView>
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
