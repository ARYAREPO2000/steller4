import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground, Image, Alert, FlatList, Dimensions } from 'react-native';
import axios from 'axios'

export default class StarCrafts extends React.Component{
  constructor(props){
    super(props)
    this.state={
     response:'',
     aircraft:[]
    }
  }
  
  
  getApod=()=>{
    axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
  .then((response)=>{
    this.setState({aircrafts:response.data.results})
    console.log(response.data.results)
  })
  .catch( error=>{
    console.log(error.message)
  })
   }


   renderItem=()=>{
    <View style={{borderWidth:1, }}>
      <Image
        source={{}} style={{}}></Image>
        <Text style={{}}>{item.name}</Text>
        <Text style={{}}>{item.agency.name}</Text>
        <Text>Description</Text>
        <Text style={{}}>{item.agnecy.description}</Text>
    </View>
   }

   
  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
