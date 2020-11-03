
import React  , { Component} from 'react';
import { View } from 'react-native';
import Types from './Types';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Types/>
          </View>
      );

    }
     
 
  }


export default index ;
