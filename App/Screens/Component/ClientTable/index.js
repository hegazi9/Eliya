
import React  , { Component} from 'react';
import { View } from 'react-native';
import ClientTable from './ClientTable';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <ClientTable/>
          </View>
      );

    }
     
 
  }


export default index ;
