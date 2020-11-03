
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,  Modal , FlatList ,ToastAndroid, 
  Image, TextInput } from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { Get_type_sub} from '../../../Actions/GetType_subAction';
import { sub_types_add} from '../../../Actions/SubAddAction';
import { sub_type_update_fun} from '../../../Actions/Update_Subscrb_typeAction';

import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {delete_subTypes} from '../../../Actions/Del_subTypesAction';

import { ConfirmDialog }  from "react-native-simple-dialogs";


class Types extends Component {
  constructor() {
    super()
    this.state = {
      alert:false,message:'',
      username: '', password: '', token: '' , modalVisible : false ,
     modalVisible_search : false,sub_type  : '' ,item_name : '' , item_id : '' , sub_name_update : '' ,
       modalVisible_update : false ,  role_name : '' 
    }
  }
  static navigationOptions = { header: null };

  componentDidMount()
  {
    AsyncStorage.getItem('ROLE').then(( res ) => {
      this.setState({
        role_name : res
      })
    })
  
  }

  _get_type() {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.Get_type_sub(this.state.token)
    })
  }

  _Add_Sub_Types()
  {
  
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.sub_types_add(  this.state.token , this.state.sub_type );
      Keyboard.dismiss()
    })
  }
  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground source={require('../../../Images/city.jpg')}
          style={Styles.BackImg}>

          <View style={Styles.row}
          onStartShouldSetResponder={()=> this.props.navigation.pop() }>

              <Image source={(require('../../../Images/back.png'))} style={Styles.logout} />

            <Text style={Styles.back} >  رجــوع  </Text>
          </View>


          <View style={Styles.View}>
            <Image source={require('../../../Images/logo.png')}
              style={Styles.Logo} />
          </View>

          <View style={Styles.rowline}>
            <Text style={Styles.txt}onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_search : true})
       
              }} >  اضافة نوع الاشتراك  </Text>
              <TouchableOpacity onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_search : true})
       
              }}>
 <Image source={(require('../../../Images/plus.png'))} style={Styles.logout} />
              </TouchableOpacity>
           

            <Image source={(require('../../../Images/arrow.png'))} style={Styles.right} />
            <Text style={Styles.txt} >  نوع الاشتراك  </Text>

          </View>

          <View style = {{ alignItems : 'center'}}>
                <Modal  transparent = {true} 
                visible = {this.state.modalVisible_search} > 
                <View style = {Styles.model_add}>
                <View style = {{ flexDirection : "row" , marginTop : hp('2%') , marginLeft : wp('27%')}}>

                <View onStartShouldSetResponder={() => { 
                  this.setState({ modalVisible_search : false}) 
                }}>
              <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
              <Text style = {Styles.city_add}>  اضافة نوع الاشتراك</Text>
              </View>
              </View>
              <TextInput style={ Styles.input_add}
              placeholder=' نوع الاشتراك ' placeholderTextColor =  {'#0b485b'}
              onChangeText = {(sub_type)=> this.setState({ sub_type })} />

                <View style = {Styles.row_add }>  
              <View style={Styles.view_title_add} onStartShouldSetResponder={() => { 
                  this.setState({ modalVisible_search : false}) 
                }}>
                  <Text style={Styles.title_add} >إلغــاء</Text>
               </View>  

               <View  style={Styles.view_title_add} onStartShouldSetResponder = {()=>{
                   if( this.state.role_name == 'Admin')
                   {
                    if(this.state.sub_type == '')
                    {
                      this.setState({
                        message:'نوع الاشتراك فارغ',
                        alert:true
                      })
                    }
                    else {
                      this._Add_Sub_Types()
                      this.setState({
                        message:'تمت العملية بنجاح',
                        alert:true
                      })
                      this.setState({ modalVisible_search : false})
                    }
                  }
                  else {
                    this.setState({
                      message:'لا يسمح بهذه العملية',
                      alert:true
                    })
                    this.setState({ modalVisible_search : false})
                  }
                   }}>
                  <Text style={Styles.title_add} >حفظ</Text>
               </View>  
               </View>
              </View>
              </Modal>
            
              
              </View> 
              { /*------------------------modalVisible_update---------------------*/}  
          

          <View style = {{ alignItems : 'center'}}>
                  <Modal  transparent = {true} 
                  visible = {this.state.modalVisible_update} > 
                  <View style = {Styles.model_add}>
                  <View style = {{ flexDirection : "row" , marginTop : hp('2%') , marginLeft : wp('27%')}}>
  
                  <View onStartShouldSetResponder={() => { 
                    this.setState({ modalVisible_update : false }) 
                  }}>
                <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
                <Text style = {Styles.city_add}> تعديل نوع الاشتراك</Text>
                </View>
                </View>
                <TextInput style={ Styles.input_add}
                placeholder={this.state.item_name} placeholderTextColor =  {'#0b485b'} 
                onChangeText = {(sub_name_update)=> this.setState({ sub_name_update })}
                />
  
                  <View style = {Styles.row_add }>  
                <View style={Styles.view_title_add} onStartShouldSetResponder={() => { 
                    this.setState({ modalVisible_update : false}) 
                  }}>
                    <Text style={Styles.title_add} >إلغــاء</Text>
                 </View>  
  
                 <View  style={Styles.view_title_add} onStartShouldSetResponder = {()=>{
                   if( this.state.role_name == 'Admin')
                   {
                      if(this.state.sub_name_update == '')
                      {
                        this.setState({
                          message:'نوع الاشتراك فارغ',
                          alert:true
                        })
                      }
                      else {
                        AsyncStorage.getItem("app_Token").then((value) => {
                          this.setState({ token: value });
                        }).then(res => {
                          this.props.sub_type_update_fun(  this.state.token , this.state.sub_name_update ,this.state.item_id   );
                           Keyboard.dismiss()

                      })

                      this.setState({
                        message:'تمت العملية بنجاح',
                        alert:true
                      })
                        this.setState({ modalVisible_update : false})
                      }
                    }
                    else {
                      this.setState({
                        message:'لا يسمح بهذه العملية',
                        alert:true
                      })
                      this.setState({ modalVisible_update : false})
                    }
                     }}>
                    <Text style={Styles.title_add} >تعديل</Text>
                 </View>  
                 </View>
                </View>
                </Modal>
              
                
                </View> 
  
  


        { /*---------------------------------------------*/}  
          
       

          <View style={Styles.center}>

          

            <View style={Styles.button}>

<TouchableOpacity onPress={() => {
  // this.props.navigation.navigate('CityModel')
  this.setState({ modalVisible: true })
  this._get_type()
}}>
  <Image source={(require('../../../Images/down.png'))} style={Styles.sort} />

</TouchableOpacity>
<Text style={Styles.txt_name} > نوع الأشتراك </Text>

</View>

<View style={{ alignItems: 'center' }}>
<Modal transparent={true}
  visible={this.state.modalVisible} >
  <View style={Styles.model}>

    <View style={{ flexDirection: "row", marginTop: hp('2%'), marginLeft: wp('27%') }}>

      <View onStartShouldSetResponder={() => {
        this.setState({ modalVisible: false })
      }}>
        <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
      </View>


      <View style={Styles.view_title}>
        <Text numberOfLines = {1} style={Styles.title} > نوع الأشتراك </Text>
      </View>

      <View style={Styles.view_title}>
        <Text style={Styles.title} >المسلسل</Text>
      </View>
    </View>

    <FlatList style={Styles.scroll}
      data={this.props.types}
      renderItem={({ item, index }) =>

        <View style={Styles.row_icon}>

          <View style={Styles.row_icon}>
            <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity onPress = {() => {
                   if( this.state.role_name == 'Admin')
                   {
                AsyncStorage.getItem("app_Token").then((value) => {
                 this.setState({ token: value });
               }).then(res => {
                 this.props.delete_subTypes(this.state.token , item.id )
                 this.setState({
                  message:'تمت العملية بنجاح',
                  alert:true
                })
                 this.setState({ modalVisible : false}) 

               })
              }
              else {
                this.setState({
                  message:'لا يسمح بهذه العملية',
                  alert:true
                })
                
              }
              }}>
              <Image source={(require('../../../Images/delete.png'))} style={Styles.delete} />
              <Text style={Styles.delete_txt} > حذف  </Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.col_icon}>
            <TouchableOpacity onPress = {() => {
                this.setState({
                  modalVisible : false , modalVisible_update : true , item_name  : item.localText , 
                  item_id  : item.id
                })
              } } >
                
              <Image source={(require('../../../Images/update.png'))} style={Styles.delete} />
              <Text style={Styles.delete_txt} >  تعديل  </Text>
              </TouchableOpacity>
            </View>
          </View>


          <Text numberOfLines = {2} style={Styles.city_name}>{item.localText}</Text>
          <Text style={Styles.city_no}>{item.id}</Text>

        </View>

      }


    />

  </View>

</Modal>
</View>
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
    types: state.type_sub.types,
    sub_type: state.sub_types.sub_type,
    del : state.delete_subTypes.del ,
    update : state.sub_type_update.update ,



  }
}

export default connect(mapStateToProps, { Get_type_sub , sub_types_add,delete_subTypes 
 , sub_type_update_fun })(withNavigation(Types));

