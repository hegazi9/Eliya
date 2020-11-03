import React, { useEffect, useState } from 'react';
import { View , ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
 
  const Model = ({ navigation }) => {
    Model.navigationOptions = navigationData => {
      return { header: null }
    }
    useEffect(() => {
     
        
          setTimeout(function () {
            navigation.navigate('ClientTableScreen');
    
          }, 2000);
     
    }, []);
  
    return (
      <View  style={{flex : 1 }} style={{ backgroundColor:'#14789d', justifyContent:'center',alignItems:'center' , height:hp('100%')}}>
      <ActivityIndicator  size = "large" animating  color = 'white'/>
     
         </View>
    );
  
  
  
}

export default Model ;
