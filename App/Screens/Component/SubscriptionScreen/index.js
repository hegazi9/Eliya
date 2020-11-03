
import React  , { Component} from 'react';
import { View } from 'react-native';
import Subscription from './Subscription';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Subscription/>
          </View>
      );

    }
     
 
  }


export default index ;
