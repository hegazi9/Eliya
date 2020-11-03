
import React  , { Component} from 'react';
import { View } from 'react-native';
import Filter from './filter';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Filter/>
          </View>
      );

    }
     
 
  }


export default index ;
