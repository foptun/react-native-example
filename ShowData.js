import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios'

async function deleteClick(id){
  console.log("id = "+id)
  const response = await axios.delete("http://165.22.96.229:8080/api/category/" + id)
  if(response.status === 200){

  }
}

function Item({ item }) {
  return (
    <View style={ styles.item }>
      <Text style={ styles.title }>{ item.name } : { item.detail }</Text>
      <Button
        title="Del"
        onPress={() => deleteClick(item.id)}
      />
    </View>
  );
}

export default function App(props) {
  const { data } = props
  return (
    <FlatList
      data={ data }
      renderItem={ ({ item }) => <Item item={ item }/> }
      keyExtractor={ item => item.id }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#aeff3f',
    padding: 5,
    marginVertical: 3,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});
