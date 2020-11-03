
import React  , { Component} from 'react';
import {  View , Text , TouchableOpacity  , ImageBackground ,BackHandler,
   Image ,ToastAndroid} from 'react-native';
import Styles from './style' ;
import { withNavigation } from 'react-navigation' ;
import { Icon } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { ConfirmDialog }  from "react-native-simple-dialogs";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var jwtDecode = require('jwt-decode');

 class Home extends Component 
{
  constructor()
  {
    super()
    this.state = {
      alert:false,message:'',alert1:false,
       username : '' , password : ''  ,token : '' , role_name : '' }
  }
  static navigationOptions = {header: null }; 

  componentDidMount ()
{
  AsyncStorage.getItem('ROLE').then(( res ) => {
    this.setState({
      role_name : res
    })
     // alert(this.state.role_name)
  })
}

logout() {
  AsyncStorage.getItem('app_Token').then(val => {
    AsyncStorage.removeItem('app_Token').then(() => {
     
      BackHandler.exitApp();
      })
   

  })
}

  render()
    {
      return (
        <View style = {Styles.container}>
           <ImageBackground source={ require('../../../Images/login.jpg') } 
           style = {Styles.BackImg}>   
         
              <TouchableOpacity onPress={() => { 
                  BackHandler.exitApp();
                }}>
              <Image source={require('../../../Images/close.png')} style={Styles.close}/>
              </TouchableOpacity>

         <View style={Styles.View}>
              <Image source={require('../../../Images/logo.png')}
                style={Styles.Logo} />
              </View>

          <View style = {Styles.body}>

          <View> 

          <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('CityScreen')}}>
          <Image source={require('../../../Images/location.png')} style={Styles.city_icon}/>
          <Text style={Styles.city_text} >المدن</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('SubscriptionScreen')}}>
          <Image source={require('../../../Images/user_setting.png')} style={Styles.moshtarek_icon}/>
          <Text style={Styles.moshtarek_text} >حالات الاشتراك</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {()=>{
             if( this.state.role_name == 'Admin')
             {
              this.props.navigation.navigate('UsersScreen')
             }
             else {
              this.setState({
                message:'لا يسمح بهذه العملية',
                alert:true
              })
             }
          
         }}>
          <Image source={require('../../../Images/collection.png')} style={Styles.user_icon}/>
          <Text style={Styles.user_text} >المستخدمين</Text>
          </TouchableOpacity>
          </View>
        
       
          <View style = {Styles.col}> 

          <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('ClientScreen')}}>
            <Image source={require('../../../Images/users.png')} style={Styles.icon_location2}/>
            <Text style={Styles.text_location2} >العملاء</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('UsersTypeScreen')}}>
            <Image source={require('../../../Images/users_type.png')} style={Styles.icon_setting_user2}/>
            <Text style={Styles.text_location} >أنواع العملاء </Text>
              </TouchableOpacity>

            <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('TypesScreen')}}>
            <Image source={require('../../../Images/hand.png')} style={Styles.icon_setting2}/>
            <Text style={Styles.text_location} >أنواع الاشتراك</Text>
              </TouchableOpacity>


            </View>
          
              </View>

            <View style = {Styles.row} onStartShouldSetResponder={() => 
               this.setState({
                message:'الموافقة على تسجيل الخروج',
                alert1:true
              })
             }>
           
            <Text style={Styles.text_logout} >  تسجيل الخروج </Text>
            <Icon name="logout" type = "SimpleLineIcons"  style={Styles.logout}/>   
            </View>
            <ConfirmDialog dialogStyle={{ marginLeft:wp('12%'), borderRadius: 20, width:wp('65%') }}
          message={this.state.message} messageStyle={{ textAlign:'center',color: '#046567' }}
          visible={this.state.alert}

          positiveButton={{
            title: "موافق",
            onPress: () => {
              //  alert("No touched!")
              this.setState({
                alert: false
              })
            }
          }}

        />
         <ConfirmDialog dialogStyle={{ marginLeft:wp('12%'), borderRadius: 20, width:wp('65%') }}
          message={this.state.message} messageStyle={{ textAlign:'center',color: '#046567' }}
          visible={this.state.alert1}

          positiveButton={{
            title: "موافق",
            onPress: () => {
              this.logout()
              //  alert("No touched!")
              this.setState({
                alert1: false
              })
            }
          }}
          negativeButton={{
            title: "إلغاء",
            onPress: () => {
              this.setState({
                alert1: false
              })
            }
          }}

        />

           </ImageBackground>
                         
          </View>
      );

    }
     
 
  }



export default withNavigation(Home) ;
