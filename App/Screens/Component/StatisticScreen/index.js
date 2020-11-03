
import React  , { Component} from 'react';
import { View } from 'react-native';
import Statistic from './Statistic';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Statistic/>
          </View>
      );

    }
     
 
  }


export default index ;
