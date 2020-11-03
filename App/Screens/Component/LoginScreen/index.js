
import React  , { Component} from 'react';
import { View } from 'react-native';
import LoginScreen from './Login';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <LoginScreen/>
          </View>
      );

    }
     
 
  }


export default index ;
