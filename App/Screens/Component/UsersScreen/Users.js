
import React  , { Component} from 'react';
import {  View , Text , TouchableOpacity  , ImageBackground , Modal , FlatList , KeyboardAvoidingView 
   , Image, TextInput , Picker  , ToastAndroid , Keyboard } from 'react-native'
import Styles from './style' ;
import { withNavigation } from 'react-navigation' ;
import { Icon } from 'native-base';
import { Get_user_role} from '../../../Actions/GetUser_roleAction';
import { user_add } from '../../../Actions/UserAddAction';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { delete_usersType } from '../../../Actions/Del_usersTypeAction';
import { users_update_fun  } from '../../../Actions/Update_UsersAction';
import { ConfirmDialog }  from "react-native-simple-dialogs";


 class Users extends Component 
{
  constructor()
  {
    super()
    this.state = 
    { 
      alert:false,message:'',
      token : '' , modalVisible : false  , select : '' ,
    modalVisible_search : false  , user_name  : '' , password : '' , confirm : '' , 
    item_name : '' , item_id : '' , user_name_update : '' ,  password_update : '' ,
    role_update : ''  ,  modalVisible_update : false 
    }
  }
  static navigationOptions = {header: null }; 

  _get_USer_role() {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.Get_user_role(this.state.token)
    })
  }

  render()
    {
      return (
        <View style = {Styles.container}>
           <ImageBackground source={ require('../../../Images/city.jpg') } 
           style = {Styles.BackImg}>   
         
         <View style = {Styles.row}
         onStartShouldSetResponder={()=> this.props.navigation.pop() }>

<Image source={(require('../../../Images/back.png'))} style={Styles.logout} />

<Text style={Styles.back} >  رجــوع  </Text>
           </View>


         <View style={Styles.View}>
              <Image source={require('../../../Images/logo.png')}
                style={Styles.Logo} />
              </View>

              <View style = {Styles.rowline}>
         <Text style={Styles.txt}onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_search : true})
       
              }} > اضافة المستخدم</Text>
              <TouchableOpacity onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_search : true})

              }}>
         <Image source = {(require('../../../Images/plus.png'))}   style={Styles.logout} /> 

              </TouchableOpacity>
         
         <Image source = {(require('../../../Images/arrow.png'))}  style={Styles.right} /> 
           <Text style={Styles.txt} > نوع المستخدم </Text>

           </View>

           <View style = {Styles.center}>

         
              <View style={Styles.button}>

<TouchableOpacity onPress={() => {
  // this.props.navigation.navigate('CityModel')
  this.setState({ modalVisible: true })
  this._get_USer_role()
}}>
  <Image source={(require('../../../Images/down.png'))} style={Styles.sort} />

</TouchableOpacity>
<Text style={Styles.txt_name} >نوع المستخدم </Text>

</View>

<KeyboardAvoidingView behavior = "position">

<View style = {{ alignItems : 'center'}}>
                <Modal  transparent = {true} 
                visible = {this.state.modalVisible_search} > 
                <View style = {Styles.model_add}>
                <View style = {{ flexDirection : "row" , marginTop : hp('2%') , marginLeft : wp('27%')}}>

                <View onStartShouldSetResponder={() => { 
                  this.setState({ modalVisible_search : false}) 
                }}>
              <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
              <Text style = {Styles.city_add}> إضافة مستخدم</Text>
              </View>
              </View>
              <TextInput style={ Styles.input_add}
              placeholder=' اضافة مستخدم ' placeholderTextColor =  {'#0b485b'} 
              onChangeText = {(user_name)=> this.setState({ user_name })}
              />
            
             <TextInput style={ Styles.input_add}
              placeholder=' كلمة المرور ' placeholderTextColor =  {'#0b485b'} 
              onChangeText = {(password)=> this.setState({ password })}
              secureTextEntry/>

              <TextInput style={ Styles.input_add}
              placeholder=' تأكيد كلمة المرور ' placeholderTextColor =  {'#0b485b'}
              secureTextEntry
              onChangeText = {(confirm)=> this.setState({ confirm  })}
               />

                  <Picker mode = "dropdown"  
                 style={Styles.picker}
                selectedValue={this.state.select}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({select: itemValue})
                }>
                <Picker.Item label="اختر نوع المستخدم" value="" color="#0b485b" />
                <Picker.Item label="Admin" value="Admin" color="#0b485b" />
                <Picker.Item label="Viewer" value="Viewer"  color="#0b485b" />
             
              </Picker>


                <View style = {Styles.row_add }>  
              <View style={Styles.view_title_add} onStartShouldSetResponder={() => { 
                  this.setState({ modalVisible_search : false}) 
                }}>
                  <Text style={Styles.title_add} >إلغــاء</Text>
               </View>  

               <View  style={Styles.view_title_add} onStartShouldSetResponder = {()=>{
                    if(this.state.user_name == '' || this.state.password == '' || this.state.confirm == '')
                    {
                      this.setState({
                        message:'جميع البيانات مطلوبة',
                        alert:true
                      })
                      
                    }
                    else if ( this.state.password < 6 )
                    {
                      this.setState({
                        message: 'كلمة المرور علي الاقل ٦ أحرف',
                        alert:true
                      })
                  
                    }

                   else  if ( this.state.password !=  this.state.confirm  )
                    {
                      this.setState({
                        message: 'كلمة السر غير متطابقة',
                        alert:true
                      })
                    }
                    else if ( !this.state.select )
                    {
                      this.setState({
                        message: 'اختر نوع المستخدم',
                        alert:true
                      })
                    }
                    else if (this.state.select ){
          
       
                 AsyncStorage.getItem("app_Token").then((value) => {
                          this.setState({ token: value });
                        }).then(res => {
                          this.props.user_add(  this.state.token , this.state.user_name ,
                            this.state.password  , this.state.select );
                          Keyboard.dismiss()
                        })
                        this.setState({
                          message: 'تمت العملية بنجاح',
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

              </KeyboardAvoidingView>

        { /*---------------------------------------------*/}  
         

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
                <Text style = {Styles.city_add}> تعديل المستخدم</Text>
                </View>
                </View>
                <TextInput style={ Styles.input_add}
                placeholder='اسم المستخدم' placeholderTextColor =  {'#0b485b'} 
                onChangeText = {(user_name_update)=> this.setState({ user_name_update })}
                />
             <TextInput style={ Styles.input_add}
              placeholder=' كلمة المرور ' placeholderTextColor =  {'#0b485b'} 
              onChangeText = {(password_update)=> this.setState({ password_update })}
              secureTextEntry/>

                <Picker mode = "dropdown"  
                 style={Styles.picker}
                selectedValue={this.state.role_update}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({role_update: itemValue})
                }>
                <Picker.Item label="اختر نوع المستخدم" value="" color="#0b485b" />
                <Picker.Item label="Admin" value="Admin" color="#0b485b" />
                <Picker.Item label="Viewer" value="Viewer"  color="#0b485b" />
             
              </Picker>


                  <View style = {Styles.row_add }>  
                <View style={Styles.view_title_add} onStartShouldSetResponder={() => { 
                    this.setState({ modalVisible_update : false}) 
                  }}>
                    <Text style={Styles.title_add} >إلغــاء</Text>
                 </View>  
  
                 <View  style={Styles.view_title_add} onStartShouldSetResponder = {()=>{
                      if(this.state.user_name_update == '' || this.state.password_update == ''  )
                      {
                        this.setState({
                          message:'جميع البيانات مطلوبة ',
                          alert:true
                        })
                      }
                      else if ( this.state.password_update < 6 )
                      {
                        this.setState({
                          message:'كلمة المرور على الاقل 6 أحرف',
                          alert:true
                        })
                       
                      }
                      else if ( !this.state.role_update )
                    {
                      this.setState({
                        message:'اختر نوع المستخدم',
                        alert:true
                      })
                    }
                    else if (this.state.role_update ){
                        AsyncStorage.getItem("app_Token").then((value) => {
                          this.setState({ token: value });
                        }).then(res => {
                          this.props.users_update_fun(  
                            this.state.token , this.state.item_id   , this.state.user_name_update , 
                            this.state.password_update , this.state.role_update   );
                           Keyboard.dismiss()
                           this.setState({
                            message:'تمت العملية بنجاح',
                            alert:true
                          })
                            this.setState({ modalVisible_update : false})
                      })

                      
                      }
                     
                     }}>
                    <Text style={Styles.title_add} >تعديل</Text>
                 </View>  
                 </View>
                </View>
                </Modal>
              
                
                </View> 
  
  
                      {/**------------------------------------------------ */}


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
        <Text numberOfLines = {1} style={Styles.title} > المستخدم </Text>
      </View>

      <View style={Styles.view_title}>
        <Text style={Styles.title} >الوظيفة</Text>
      </View>
    </View>

    <FlatList style={Styles.scroll}
      data={this.props.user}
      renderItem={({ item, index }) =>

        <View style={Styles.row_icon}>

          <View style={Styles.row_icon}>
            <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity onPress={() => {

AsyncStorage.getItem("app_Token").then((value) => {
  this.setState({ token: value });
}).then(res => {
  this.props.delete_usersType(this.state.token, item.id)
  this.setState({
    message:'تمت العملية بنجاح',
    alert:true
  })
  this.setState({ modalVisible: false })

})
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


          <Text numberOfLines={1} style={Styles.city_name}>{item.email}</Text>
          <Text  style={Styles.city_no}>{item.role}</Text>

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
    user: state.user_role.user,
    del: state.delete_usersType.del,
    add : state.user_add.add ,
    update : state.users.update ,


  }
}


export default connect(mapStateToProps, { Get_user_role,delete_usersType ,user_add , 
  users_update_fun })(withNavigation(Users));


