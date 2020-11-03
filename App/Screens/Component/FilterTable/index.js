
import React  , { Component} from 'react';
import { View } from 'react-native';
import FilterTable from './FilterTable';

 class index extends Component 
{
  static navigationOptions = {header: null }; 

  render()
    {
      return (
        <View>
        <FilterTable/>
          </View>
      );

    }
     
 
  }


export default index ;
