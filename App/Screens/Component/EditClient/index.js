
import React  , { Component} from 'react';
import { View } from 'react-native';
import EditClient from './EditClient';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <EditClient/>
          </View>
      );

    }
     
 
  }


export default index ;
