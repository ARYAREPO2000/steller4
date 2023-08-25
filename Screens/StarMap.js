import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground, Platform, SafeAreaView, StatusBar } from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMaps extends React.Component{
  constructor(props){
    super(props)
    this.state={latitude:'',
                longitude:''
              }
  }



  render(){
    
    const {latitude,longitude}=this.state
    const path=`"https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"`

  return (
    <View style={styles.container}>
      <Text>Star Map</Text>
        <TextInput
          style = {{height:40, color:'grey', borderWidth:1}}
          placeholder="Enter Longitude"
          placeholderTextColor={"black"}
          onChangeText={(text)=>{
            this.setState({
              longitude:text
            })
          }}
        />
        <TextInput
          style = {{height:40, color:'grey', borderWidth:1}}
          placeholder="Enter Latitude"
          placeholderTextColor={"black"}
          onChangeText={(text)=>{
            this.setState({
              latitude:text
            })
          }}
        />
      <WebView
        scalesPageToFit={true}
        source={{uri:path}}
        style={{marginTop: 20, marginBottom:20}}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
