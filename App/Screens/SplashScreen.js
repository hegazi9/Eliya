import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, BackHandler, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';


const SplashScreen = ({ navigation }) => {
  SplashScreen.navigationOptions = navigationData => {
    return { header: null }
  }


  useEffect(() => {
   // BackHandler.addEventListener('hardwareBackPress', function () { return true })
    console.disableYellowBox = true;
   
     AsyncStorage.getItem('app_Token').then(token => {
       if(token)
       {
        setTimeout(function () {
          navigation.navigate('HomeScreen');
  
        }, 5000);
       }else 
       {
        setTimeout(function () {
          navigation.navigate('LoginScreen');
  
        }, 5000);
       }
     })
    
    
 
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Images/start.jpg')}
        style={styles.ImageView}>

<View style={styles.View}>

<Image source={require('../Images/logo.png')}
  style={styles.Logo} />

</View>

        </ImageBackground>
    </View>
  );


}



export default SplashScreen;


const styles = StyleSheet.create({
  container: {
  },

  ImageView: {
    width: '100%' , height:'100%'
  },

 View :
    {
        flexDirection : 'column'  , alignItems : 'center' , marginTop : hp('16%')
    },

    Logo :
    {
        width: 250 , height : 250 , marginTop : hp('1%') 
    } , 


});