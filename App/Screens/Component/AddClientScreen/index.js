
import React  , { Component} from 'react';
import { View } from 'react-native';
import AddClient from './AddClient';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <AddClient/>
          </View>
      );

    }
     
 
  }


export default index ;
