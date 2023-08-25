import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground, Image, Alert, FlatList, Dimensions } from 'react-native';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';

export default class MeteorTrackerScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      apod:[],
      url:''
    }
  }

  getApod=()=>{
    axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=L1v5vbocXTjhgwYM19hkPo4TiVc9reYke6AhGRGz")
  .then((response)=>{
    this.setState({apod : response.data})
    this.setState({imageUrl:response.data.img_src})
    console.log(this.state.apod)
  }) 
  .catch((error)=>{
    Alert.alert(error.message)
  })  
  }

 
  componentDidMount(){
    this.getApod();
  }

  renderImage=(url)=>{
    <Image source={{'uri':url}} style={{width:'100%', height:300, borderRadius:20, margin:3 }}/>
  }

    render(){
      if ((this.state.apod).length === 0 ) {
        return(
          <View style={styles.container}>
            <Text>
                Loading....
            </Text>
          </View>
        )
      }
      else{
        return (
          <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require('../assets/stars.gif')} style={styles.backgroundImage}>
              <View style = {styles.titleBar}>
            <Text style={styles.titleText}> Astronomy Picture of the day </Text>
            <Text style={styles.routeText}>{this.state.apod.title}</Text>
            </View>
            <ScrollView style={styles.listContainer}>
            <TouchableOpacity style={styles.routeCard}
            onPress={()=> Linking.openURL (this.state.apod.url).catch(err=>console.error("coudln't load page",err))}>
              <View style={styles.iconStyle}>
                <Image source={{uri:url}} style={styles.backgroundImage1}></Image>
              </View>
              </TouchableOpacity>
              <View style={{padding : 20}}>
                <Text style={styles.titleText}> {this.apod.title} </Text>
                <Text style={styles.routeText}> {this.state.apod.explanation} </Text>
              </View>
              </ScrollView>          
          </ImageBackground>
          
          </View>
          
        );
          };
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
          fontSize:30,
          fontWeight:'bold',
          color:'white'
        },
        
        routeCard:{
        fontSize:20,
        marginBottom:20,
        alignItems:'center',
        color:'white',
          },
    
        routeText:{
         color:'white',
         justifyContent:'center',
         alignItems:"center",
         fontSize:40,
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
        },
        
        gifContainer:{
          justifyContent:'center',
          alignItems:'center',
          flex:1
        },

        backgroundImage:{
          flex:1,
          resizeMode:'cover',
          width:Dimensions.get('window').width,
          height:Dimensions.get('window').height,
        },

        backgroundImage1:{
          flex:1,
          resizeMode:'cover',
          marginTop:100,
          marginLeft:10,
          width:50,
          height:50,
          justifyContent:'center'
        },
        listContainer:{

        },
      });
      
      