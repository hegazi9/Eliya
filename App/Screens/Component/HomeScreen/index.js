
import React  , { Component} from 'react';
import { View } from 'react-native';
import Home from './Home';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <Home/>
          </View>
      );

    }
     
 
  }


export default index ;
