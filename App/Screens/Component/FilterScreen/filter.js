
import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground, Image, Keyboard, ToastAndroid,
  FlatList, TextInput, Modal, ScrollView
} from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Get_city } from '../../../Actions/GetCityAction';
import { Get_user_type } from '../../../Actions/GetUser_typeAction';
import { Get_subscription } from '../../../Actions/GetSubscriptionAction';
import { Get_type_sub } from '../../../Actions/GetType_subAction';
import { ConfirmDialog }  from "react-native-simple-dialogs";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




class Filter extends Component {
  constructor() {
    super()
    this.state = {
      alert:false,message:'',
      token: '',
      modalVisible_city: false,
      modalVisible_client: false,
      modalVisible_type: false,
      modalVisible_status: false,
      Name_city: '', Name_type: '', Name_status: '', Name_client: ''

    }
  }
  static navigationOptions = { header: null };

  componentDidMount() {
    this._get_cities()
    this._get_client()
    this._get_sub()
    this._get_type()
  }
  _get_cities() {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.Get_city(this.state.token)
    })
  }

  _get_client() {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.Get_user_type(this.state.token)
    })
  }

  _get_sub() {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.Get_subscription(this.state.token)
    })
  }

  _get_type() {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.Get_type_sub(this.state.token)
    })
  }


  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground source={require('../../../Images/login.jpg')}
          style={Styles.BackImg}>
          <View style={Styles.row}
            onStartShouldSetResponder={() => this.props.navigation.pop()}>
            <Image source={(require('../../../Images/back.png'))} style={Styles.logout} />
            <Text style={Styles.back} >  رجــوع  </Text>
          </View>
          <View style={Styles.View}>
            <Image source={require('../../../Images/logo.png')}
              style={Styles.Logo} />
          </View>
          <View style={Styles.center}>

            <View style={Styles.button} onStartShouldSetResponder = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_city : true})
                  this._get_cities()
              }}>

              <TouchableOpacity onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_city : true})
                  this._get_cities()
              }}>
              <Image source={(require('../../../Images/down.png'))} style={Styles.sort} />

              </TouchableOpacity>
           
              <Text style={Styles.txt_name} >  المدينة </Text>

            </View>
            
            <Text style={Styles.txt_login} >{this.state.Name_city}</Text>

            <View style={Styles.button} onStartShouldSetResponder = {() => {
                this.setState({ modalVisible_client: true })
              }}>
                <Image source={(require('../../../Images/down.png'))} style={Styles.sort} />
              <Text style={Styles.txt_name} >نوع العميل</Text>
            </View>

            <Text style={Styles.txt_login} >{this.state.Name_client}</Text>

            <View style={Styles.button} onStartShouldSetResponder={() => {
                this.setState({ modalVisible_status: true })
              }}>
                <TouchableOpacity onPress={() => {
                this.setState({ modalVisible_status: true })
              }}>
                <Image source={(require('../../../Images/down.png'))} style={Styles.sort} />
              </TouchableOpacity>

              <Text style={Styles.txt_name} >حالة الاشتراك</Text>
            </View>


            <Text style={Styles.txt_login} >{this.state.Name_status}</Text>

            <View style={Styles.button} onStartShouldSetResponder={() => {
                this.setState({ modalVisible_type: true })
              }}>
            <TouchableOpacity onPress={() => {
                this.setState({ modalVisible_type: true })
              }}>
                <Image source={(require('../../../Images/down.png'))} style={Styles.sort} />
              </TouchableOpacity>

              <Text style={Styles.txt_name} >نوع الاشتراك</Text>
            </View>
            <Text style={Styles.txt_login} >{this.state.Name_type}</Text>


            <View style={Styles.submit}
              onStartShouldSetResponder={() => {
                if (this.state.Name_city == '' && this.state.Name_type == ''
                  &&  this.state.Name_status == '' && this.state.Name_client == ''
                ) {
                  this.setState({
                    message:'يجب إدخال عنصر على الاقل',
                    alert:true
                  })

                 
                }
            
                else if (this.state.Name_city  || this.state.Name_type 
                ||  this.state.Name_status  || this.state.Name_client ){
                  this.props.navigation.navigate('FilterTableScreen' , {
                    'CITY' : this.state.Name_city , 
                    'TYPE' : this.state.Name_type , 
                    'STATUS' : this.state.Name_status , 
                    'CLIENT' : this.state.Name_client , 
                    
                  })

                }
                      


              }}>
              <Text style={Styles.submit_name} >تصفية </Text>
            </View>



            {/**************************MODEL*************************************/}
            <Modal transparent={true}
            animationType="fade"
              visible={this.state.modalVisible_city} >
              <View style={Styles.model} >
                <View onStartShouldSetResponder={() => {
                  this.setState({ modalVisible_city: false  ,
                    Name_city : ''
                  })
                }}>
                  <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                </View>
                <FlatList style={Styles.scroll}
                  data={this.props.city}
                  keyExtractor={(item, index) => item.index}
                  renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => {
                      this.setState({ Name_city: item.localText, modalVisible_city: false })
                    }}>
                      <Text style={Styles.city_name}>{item.localText}</Text>
                    </TouchableOpacity>
                  } />
              </View>
            </Modal>


            <Modal transparent={true}
            animationType="fade"
              visible={this.state.modalVisible_client} >
              <View style={Styles.client_model} >
                <View onStartShouldSetResponder={() => {
                  this.setState({ modalVisible_client: false, 
                    Name_client : ''
                  })
                }}>
                  <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                </View>
                <FlatList style={Styles.scroll}
                  data={this.props.user}
                  keyExtractor={(item, index) => item.index}
                  renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => {
                      this.setState({ Name_client: item.localText, modalVisible_client: false })
                    }}>
                      <Text style={Styles.client_name}>{item.localText}</Text>
                    </TouchableOpacity>
                  } />
              </View>
            </Modal>
            {/******************Status MODEL***************/}
            <Modal transparent={true}
            animationType="fade"
              visible={this.state.modalVisible_status} >
              <View style={Styles.Status_model} >
                <TouchableOpacity onPress={() => {
                  this.setState({ modalVisible_status: false ,
                    Name_status : ''
                  })
                }}>
                  <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                </TouchableOpacity>
                <FlatList style={Styles.scroll}
                  data={this.props.subscription}
                  keyExtractor={(item, index) => item.index}
                  renderItem={({ item, index }) =>

                    <TouchableOpacity onPress={() => {
                      this.setState({ Name_status: item.localText, modalVisible_status: false })
                    }}>
                      <Text style={Styles.client_name}>{item.localText}</Text>
                    </TouchableOpacity>
                  } />
              </View>
            </Modal>
            {/******************Type MODEL***************/}
            <Modal transparent={true}
            animationType="fade"
              visible={this.state.modalVisible_type} >
              <View style={Styles.Type_model} >
                <TouchableOpacity onPress={() => {
                  this.setState({ modalVisible_type: false  , 
                    Name_type : ''})
                }}>
                  <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                </TouchableOpacity>
                <FlatList style={Styles.scroll}
                  data={this.props.types}
                  keyExtractor={(item, index) => item.index}
                  renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => {
                      this.setState({ Name_type: item.localText, modalVisible_type: false })
                    }}>
                      <Text style={Styles.client_name}>{item.localText}</Text>
                    </TouchableOpacity>
                  } />
              </View>
            </Modal>

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
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {

    city: state.city_name.city,
    user: state.user_type.user,
    subscription: state.subscription_name.subscription,
    types: state.type_sub.types,

  }
}


export default connect(mapStateToProps, {
  Get_city, Get_user_type, Get_type_sub,
  Get_subscription
})(withNavigation(Filter));


