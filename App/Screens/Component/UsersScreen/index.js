
import React  , { Component} from 'react';
import { View } from 'react-native';
import Users from './Users';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Users/>
          </View>
      );

    }
     
 
  }


export default index ;
