import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground, Platform, SafeAreaView, StatusBar } from 'react-native';
import DailyPics from './DailyPics';
import StarCrafts from './StarCrafts';
import StarMaps from './StarMap';

export default class HomeScreen extends React.Component{
  render(){
  return (

    <View style={styles.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <ImageBackground source={require("../assets/space.gif")} style={styles.background}>
        
        <View style={styles.titleBar}><Text style={styles.titleText}>Stellar App</Text></View>
        

        <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("DailyPics")}>
          <Text style={styles.routeText}>Daily Pics</Text>
          <Text style={styles.knowMore}>{"know more ---->"}</Text>
          <Text style={styles.Digit}>1</Text>
          <Image source={require("../assets/daily_pictures.png")} style={styles.iconStyle}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("StarCrafts")}>
          <Text style={styles.routeText}>StarCrafts</Text>
          <Text style={styles.knowMore}>{"know more ---->"}</Text>
          <Text style={styles.Digit}>2</Text>
          <Image source={require("../assets/space_crafts.png")} style={styles.iconStyle}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard } onPress={()=>this.props.navigation.navigate("StarMap")}>
          <Text style={styles.routeText}>Star Map</Text>
          <Text style={styles.knowMore}>{"know more ---->"}</Text>
          <Text style={styles.Digit}>3</Text>
          <Image source={require("../assets/star_map.png")} style={styles.iconStyle}></Image>
        </TouchableOpacity>
        </ImageBackground>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea:{
    marginTop:Platform.OS === 'android'? StatusBar.currentHeight:0
  },
  titleBar:{
    flex:0.15,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    
  },

  titleText:{
    fontSize:40,
    fontWeight:'bold',
    color:'white'
  },
  
  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:20,
    backgroundColor:'white',
    },

  routeText:{
    fontSize:20,
    color:'black',
    marginTop:70,
    paddingLeft:30,
    fontWeight:'bold'
  },

  background:{
    flex:1,
    resizeMode:"cover"
  },

  knowMore:{
    color:'red',
    paddingLeft:30,
    fontSize:30
  },

  Digit:{
    position:'absolute',
    color:"grey",
    fontSize:100,
    right:20,
    bottom:-15,
    zIndex:-1,
  },

  iconStyle:{
    position:'absolute',
    height:150,
    width:150,
    resizeMode:'contain',
    right:30,
    bottom:80,
  }

});
