
import React  , { Component} from 'react';
import { View } from 'react-native';
import Recept from './Recept';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Recept/>
          </View>
      );

    }
     
 
  }


export default index ;
