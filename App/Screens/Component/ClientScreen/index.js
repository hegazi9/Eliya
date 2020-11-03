
import React  , { Component} from 'react';
import { View } from 'react-native';
import Client from './Client';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Client/>
          </View>
      );

    }
     
 
  }


export default index ;
