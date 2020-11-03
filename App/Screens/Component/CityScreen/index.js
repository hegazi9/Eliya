
import React  , { Component} from 'react';
import { View } from 'react-native';
import City from './City';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <City/>
          </View>
      );

    }
     
 
  }


export default index ;
