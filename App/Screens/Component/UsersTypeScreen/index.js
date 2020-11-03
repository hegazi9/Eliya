
import React  , { Component} from 'react';
import { View } from 'react-native';
import UsersType from './UsersType';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <UsersType/>
          </View>
      );

    }
     
 
  }


export default index ;
