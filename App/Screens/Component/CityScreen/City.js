
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image,  Keyboard , ToastAndroid , 
   FlatList, TextInput, Modal ,ScrollView } from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { Icon } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Get_city }  from '../../../Actions/GetCityAction';
import { delete_city }  from '../../../Actions/Del_cityAction';
import { city_update_fun }  from '../../../Actions/Update_CityAction';
import { city_add }  from '../../../Actions/CityAddAction';
import { connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { ConfirmDialog }  from "react-native-simple-dialogs";



class City extends Component {
  constructor() {
    super()
    this.state = { city_name : '', modalVisible: false ,  alert:false,message:'',
    token : '' ,  modalVisible_search : false , modalVisible_update : false  , 
    item_name : '' , item_id : '' , city_name_update : '' ,  role_name : ''
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

  _get_cities()
  {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.Get_city(this.state.token)
    })
  }

  _Add_city()
  {
  
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.city_add(  this.state.token , this.state.city_name );
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
            <Text style={Styles.txt} onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_search : true})
       
              }}>  اضافة مدينة  </Text>
            <TouchableOpacity onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible_search : true})
       
              }}> 
               <Image source={(require('../../../Images/plus.png'))} style={Styles.logout} />

              </TouchableOpacity>  

            <Image source={(require('../../../Images/arrow.png'))} style={Styles.right} />
            <Text style={Styles.txt} >  المدينة  </Text>

          </View>

                <View style = {{ alignItems : 'center'}}>
                <Modal  transparent = {true} 
                 animationType="fade"
                visible = {this.state.modalVisible_search} > 
                <View style = {Styles.model_add}>
                <View style = {{ flexDirection : "row" , marginTop : hp('2%') , marginLeft : wp('27%')}}>

                <View onStartShouldSetResponder={() => { 
                  this.setState({ modalVisible_search : false}) 
                }}>
              <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
              <Text style = {Styles.city_add}> إضافة مدينة</Text>
              </View>
              </View>
              <TextInput style={ Styles.input_add}
              placeholder=' المدينة ' placeholderTextColor =  {'#0b485b'} 
              onChangeText = {(city_name)=> this.setState({ city_name })}
              />

                <View style = {Styles.row_add }>  
              <View style={Styles.view_title_add} onStartShouldSetResponder={() => { 
                  this.setState({ modalVisible_search : false}) 
                }}>
                  <Text style={Styles.title_add} >إلغــاء</Text>
               </View>  

               <View  style={Styles.view_title_add} onStartShouldSetResponder = {()=>{

     if( this.state.role_name == 'Admin')
     {
                    if(this.state.city_name == '')
                    {
                      this.setState({
                        message:'اسم المدينة فارغ',
                        alert:true
                      })
                     
                    }
                    else {
                      this._Add_city()
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
              <Text style = {Styles.city_add}> تعديل مدينة</Text>
              </View>
              </View>
              <TextInput style={ Styles.input_add}
              placeholder={this.state.item_name} placeholderTextColor =  {'#0b485b'} 
              onChangeText = {(city_name_update)=> this.setState({ city_name_update })}
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
                    if(this.state.city_name_update == '')
                    {
                      this.setState({
                        message:'اسم المدينة فارغ',
                        alert:true
                      })
                     
                    }
                    else {
                      AsyncStorage.getItem("app_Token").then((value) => {
                        this.setState({ token: value });
                      }).then(res => {
                        this.props.city_update_fun(  this.state.token , this.state.city_name_update ,this.state.item_id   );
                        Keyboard.dismiss()
                        this.setState({
                          message:'تمت العملية بنجاح',
                          alert:true
                        })
                      
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

              <TouchableOpacity onPress = {()=>{
               // this.props.navigation.navigate('CityModel')
                  this.setState({ modalVisible : true})
                  this._get_cities()
              }}>
              <Image source={(require('../../../Images/down.png'))} style={Styles.sort} />

              </TouchableOpacity>
              <Text style={Styles.txt_name} >  المدينة </Text>

            </View>

              <View style = {{ alignItems : 'center'}}>
                <Modal  transparent = {true} 
                visible = {this.state.modalVisible} > 
                <View style = {Styles.model}>

                <View style = {{ flexDirection : "row" , marginTop : hp('2%') , marginLeft : wp('27%')}}>
           
                <View onStartShouldSetResponder={() => { 
                  this.setState({ modalVisible : false}) 
                }}>
              <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
              </View>
          
               
                <View style={Styles.view_title}>
                  <Text style={Styles.title} >المدينة</Text>
               </View>  

               <View  style={Styles.view_title}>
                  <Text style={Styles.title} >المسلسل</Text>
               </View>  
               </View>
           
              <FlatList style={Styles.scroll}
              data={this.props.city}
              renderItem={({ item, index }) =>

              <View style = {Styles.row_icon}>

              <View style = {Styles.row_icon}>
               <View style={{ flexDirection: 'column' }}>
                 <TouchableOpacity onPress = {() => {
                   
                   if( this.state.role_name == 'Admin')
                   {
                 
                   AsyncStorage.getItem("app_Token").then((value) => {
                    this.setState({ token: value });
                  }).then(res => {
                    this.props.delete_city(this.state.token , item.id )
                    this.setState({
                      message:'تمت العملية بنجاح',
                      alert:true
                    })
                   
                    this.setState({ modalVisible : false}) 

                  })
                } 
                else 
                {
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
            

                <Text numberOfLines = {1} style = {Styles.city_name}>{item.localText}</Text>
                <Text style = {Styles.city_no}>{item.id}</Text>
              
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



const mapStateToProps = state =>
{
  return {
    city : state.city_name.city ,
    user : state.add_city.user ,
    del : state.delete_city.del ,
    update : state.city_update.update ,

  }
}

export default connect( mapStateToProps , { Get_city , delete_city , city_add , city_update_fun })(withNavigation(City)) ;

/**
 * 
 *      <View style={{ flexDirection: 'column' }}>
                <Image source={(require('../../../Images/delete.png'))} style={Styles.delete} />
                <Text style={Styles.delete_txt} > حذف  </Text>
              </View>

              <View style={{ flexDirection: 'column' }}>
                <Image source={(require('../../../Images/update.png'))} style={Styles.delete} />
                <Text style={Styles.delete_txt} >  تعديل  </Text>
              </View>




    delete_txt: 
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('.5%'), fontFamily : 'ge-ss-two-medium' ,
            fontSize :  hp('1%') , height : 25 , marginLeft : wp('3%'),
    },

    delete : 
    {
             width : 25 , height : 25 , color : '#14789d' , marginTop : hp('1%') ,  marginLeft : wp('4%'),
    
    }, 
   
   
   

   
    second_view :
    {
     marginTop : hp('3%') ,flexDirection : 'row' ,
     padding : hp('1%') , borderColor : 'white' , width : wp('80%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('9%')  ,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    } , 
    

    text : 
    {
        alignSelf : "center" , color : '#14789d', fontFamily : 'Roboto' , 
            fontSize :  hp('2.5%') , height : 35
    },

 */