
import React  , { Component} from 'react';
import { View } from 'react-native';
import ClientDetails from './ClientDetails';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <ClientDetails/>
          </View>
      );

    }
     
 
  }


export default index ;
