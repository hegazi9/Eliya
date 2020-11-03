
import { createAppContainer } from 'react-navigation' ;
import { createStackNavigator  } from '../Packages/react-navigation-stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/Component/LoginScreen/index';
import HomeScreen from '../Screens/Component/HomeScreen/index';
import CityScreen from '../Screens/Component/CityScreen/index';
import SubscriptionScreen from '../Screens/Component/SubscriptionScreen/index';
import UsersTypeScreen from '../Screens/Component/UsersTypeScreen/index';
import UsersScreen from '../Screens/Component/UsersScreen/index';
import TypesScreen from '../Screens/Component/TypesScreen/index';
import ClientScreen from '../Screens/Component/ClientScreen/index';
import AddClientScreen from '../Screens/Component/AddClientScreen/index';
import ClientTableScreen from '../Screens/Component/ClientTable/index';
import FilterScreen from '../Screens/Component/FilterScreen/index';
import FilterTableScreen from '../Screens/Component/FilterTable/index';
import StatisticScreen from '../Screens/Component/StatisticScreen/index';
import ReceptTableScreen from '../Screens/Component/ReceptTable/index';
import EditClient from '../Screens/Component/EditClient/index';

import ClientDetails from '../Screens/Component/ClientDetails/index';



const Navigator = createStackNavigator({
  
  SplashScreen :
    {
        screen : SplashScreen , navigationOptions : {
            header : null 
        }
    },
  
    LoginScreen :
    {
        screen : LoginScreen
    },
    
    HomeScreen :
    {
       screen :  HomeScreen ,  
    },  
    CityScreen : 
    {
        screen : CityScreen
    },
    SubscriptionScreen : 
    {
        screen : SubscriptionScreen
    },
    UsersTypeScreen : 
    {
        screen : UsersTypeScreen
    },
    UsersScreen : 
    {
        screen : UsersScreen
    },
    TypesScreen : 
    {
        screen : TypesScreen
    },
    ClientScreen : 
    {
        screen : ClientScreen
    },
    AddClientScreen : 
    {
        screen : AddClientScreen
    },

    ClientTableScreen : 
    {
        screen : ClientTableScreen
    },
    FilterScreen : 
    {
        screen : FilterScreen
    },
    FilterTableScreen : 
    {
        screen : FilterTableScreen 
    },
    StatisticScreen: 
    {
        screen : StatisticScreen
    },
    ReceptTableScreen : 
    {
       screen  :  ReceptTableScreen
    },
    ClientDetails : 
    {
        screen : ClientDetails 
    },
    EditClient :
    {
        screen : EditClient
    }

});


export default createAppContainer(  Navigator );

