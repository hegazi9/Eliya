
import React, { Component } from 'react';
import {
  View, Text, ImageBackground, TextInput, Image, KeyboardAvoidingView , Keyboard 
  , TouchableOpacity
} from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { connect} from 'react-redux'
import { loginuser }  from '../../../Actions/AuthAction';
import { Icon } from 'native-base';
import { Spinner } from '../../../Common/spinner';
import AsyncStorage from '@react-native-community/async-storage';


class Login extends Component {
  constructor() {
    super()
    this.state = { username: '', password: '', token: '' }
  }
  static navigationOptions = { header: null };

  componentWillReceiveProps(nextProps)
  {
  if(nextProps.user  && this.state.username)
  {
    this.props.navigation.navigate('HomeScreen');
  }
  
  else 
  {
    null
  }
  
}


_renderMethod ()
  {
    if(this.props.loading)
    {
      return <Spinner/>
    }
    return (
      <TouchableOpacity onPress={this._onLogin.bind(this)}
      style={Styles.button}>
      <Text style={Styles.text} >
        تسجيل الدخول
</Text>
    </TouchableOpacity>

   );
  
  }

_onLogin ()
{
  const { username , password } = this.state ;
  this.props.loginuser({ username , password })
  Keyboard.dismiss()
}


  render() {
    return (
      <View style={Styles.container}>


        <ImageBackground source={require('../../../Images/login.jpg')}
          style={Styles.BackImg}>

          <KeyboardAvoidingView
            behavior="position">

            <View style={Styles.View}>
              <Image source={require('../../../Images/logo.png')}
                style={Styles.Logo} />

              <View style={Styles.row_name}>

                <TextInput
                  style={Styles.input}
                  placeholder=" اسم المستخدم" placeholderTextColor='white'
                  onChangeText = {(username)=> this.setState({ username })}
                  keyboardType = "email-address"
                  autoCapitalize = 'none'
                  autoCorrect = {false}
                />
                <Icon name="user-circle" type="FontAwesome" style={Styles.icon} />
              </View>

              <View style={Styles.line} />
              <View style={Styles.row_pass}>

                <TextInput
                  style={Styles.input}
                  placeholder="  كلمة المرور" placeholderTextColor='white'
                  onChangeText = {(password)=> this.setState({password})}
                  secureTextEntry
                  autoCorrect = {false}
                />
                <Icon name="unlock-alt" type="FontAwesome" style={Styles.icon_pass} />
              </View>
              <View style={Styles.line} />

              <Text style = {Styles.error}>{
        this.props.error == '{"Username":["The Username field is required."]}'
        ? <Text> اسم المستخدم مطلوب</Text>
        : this.props.error == '{"Password":["The Password field is required."]}'
        ? <Text>كلمة المرور مطلوبة</Text>
        : this.props.error == '{"Password":["The Password field is required."],"Username":["The Username field is required."]}'
        ? <Text>البيانات مطلوبة</Text>
        : this.props.error == '["هناك خطأ في البريد الالكتروني او كلمة السر"]'
        ? <Text>هناك خطأ في اسم المستخدم او كلمة المرور</Text>
        : null

     }</Text>
              {this._renderMethod()}
            </View>

          </KeyboardAvoidingView>
        </ImageBackground>


      </View>
    );

  }


}


const mapStateToProps = state =>
{
  return {
    error : state.auth.error ,
    loading :  state.auth.loading ,
    user : state.auth.user ,
  }
}

export default connect( mapStateToProps , { loginuser })(withNavigation(Login)) ;

