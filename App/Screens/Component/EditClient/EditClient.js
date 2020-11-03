import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground, TextInput, FlatList, Image, ToastAndroid,
  ActivityIndicator, Modal, ScrollView,TouchableWithoutFeedback,KeyboardAvoidingView,Platform,Keyboard  
} from 'react-native';
import Styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import { Get_city } from '../../../Actions/GetCityAction';
import { Get_user_type } from '../../../Actions/GetUser_typeAction';
import { Get_subscription } from '../../../Actions/GetSubscriptionAction';
import { Get_type_sub } from '../../../Actions/GetType_subAction';
import { connect } from 'react-redux';
import {  Icon } from 'native-base';
import { ConfirmDialog }  from "react-native-simple-dialogs";
import axios from 'axios' ;
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';







class EditClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      id:'',
      name: '' , 
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: '',
      address: '',
      bottleBalances: 0,
       bottleNumbers: 0,
      due: 0,
      receiptNumbers: 0,
      subscriptionStatus: 0,
      subscriptionType: 0,
      note: '',
      lastReceipt: '',
      price: 0,
      subscriptionNumbers: 0,
      subscriptionMonthNumbers: 0,
      subscriptionDate: '' ,
      contractNo : 0 , 
      city : '' , customerType : '',
      alert:false,message:'',
      cityId:'',
      customerTypeId:'',
      subscriptionStatusId:'',
      subscriptionTypeId:'',
      rate:'' ,
      demo : '',
  
      today:moment().format("YYYY-MM-DD")

    };
  }

  componentDidMount() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    const id = this.props.navigation.getParam('Client_id');
    const name = this.props.navigation.getParam('Client_name');
    const phoneNumber1 = this.props.navigation.getParam('Client_phoneNumber1');
    const phoneNumber2 = this.props.navigation.getParam('Client_phoneNumber2');
    const phoneNumber3 = this.props.navigation.getParam('Client_phoneNumber3');
    const contractNo = this.props.navigation.getParam('Client_contractNo');
    const address = this.props.navigation.getParam('Client_address');

    const city  = this.props.navigation.getParam('Client_city');
    const bottleBalances = this.props.navigation.getParam('Client_bottleBalances');
    const bottleNumbers = this.props.navigation.getParam('Client_bottleNumbers');
    const receiptNumbers  = this.props.navigation.getParam('Client_receiptNumbers');
    const due  = this.props.navigation.getParam('Client_due');
    const customerType  = this.props.navigation.getParam('Client_customerType');

    const note  = this.props.navigation.getParam('Client_note');
    const subscriptionType  = this.props.navigation.getParam('Client_subscriptionType');
    const subscriptionStatus  = this.props.navigation.getParam('Client_subscriptionStatus');
    const subscriptionMonthNumbers  = this.props.navigation.getParam('Client_subscriptionMonthNumbers');
    const subscriptionNumbers  = this.props.navigation.getParam('Client_subscriptionNumbers');
    const subscriptionDate  = this.props.navigation.getParam('Client_subscriptionDate');

    const lastReceipt  = this.props.navigation.getParam('Client_lastReceipt');
    const price  = this.props.navigation.getParam('Client_price');
    const cityId  = this.props.navigation.getParam('Client_cityId');
    const customerTypeId  = this.props.navigation.getParam('Client_customerTypeId');
    const subscriptionStatusId  = this.props.navigation.getParam('Client_subscriptionStatusId');
    const subscriptionTypeId  = this.props.navigation.getParam('Client_subscriptionTypeId');
    const rate  = this.props.navigation.getParam('Client_rate');

    if(price == null )
    {
      this.setState({
        price : '' 
      })
    }
    else{
      this.setState({
        price : price ,
      })
    }
    if(lastReceipt == null )
    {
      this.setState({
        lastReceipt : null 
      })
    }
    else{
      this.setState({
        lastReceipt : lastReceipt.split('T')[0] ,
      })
    }
    if( subscriptionDate == null )
    {
      this.setState({
        subscriptionDate : null , 
      })
    }
    else {
      this.setState({
        subscriptionDate : subscriptionDate.split('T')[0],
      })
    }

    this.setState({
      id:id,
      name: name , 
      phoneNumber1 : phoneNumber1 , 
      phoneNumber2 : phoneNumber2 , 
      phoneNumber3 : phoneNumber3 , 
      contractNo : contractNo  ,
      address : address , 

      city : city , 
      bottleBalances : bottleBalances , 
      bottleNumbers : bottleNumbers ,
      due : due ,
      receiptNumbers: receiptNumbers ,
      customerType : customerType ,

      note : note ,
      subscriptionType : subscriptionType ,
      subscriptionStatus : subscriptionStatus ,
      subscriptionMonthNumbers : subscriptionMonthNumbers ,
      subscriptionNumbers : subscriptionNumbers ,      
      price : price ,
      rate:rate,


      cityId:cityId,
      customerTypeId:customerTypeId,
      subscriptionStatusId:subscriptionStatusId,
      subscriptionTypeId:subscriptionTypeId,

      Name_city: '', Name_type: '', Name_status: '', Name_client: '',
      modalVisible_city: false,
      modalVisible_client: false,
      modalVisible_type: false,
      modalVisible_status: false,
      

    })
    AsyncStorage.getItem('ROLE').then(( res ) => {
      this.setState({
        role_name : res
      })
    })


    

   
  }
 monthsDiff() 
{  
  console.log("   today   "+this.state.today+"  months  "+this.props.navigation.getParam('Client_subscriptionDate'))
var startDate = this.props.navigation.getParam('Client_subscriptionDate');
var endDate = this.state.today;


var start = new Date(Date.parse(startDate));
var end = new Date(Date.parse(endDate))
console.log("   start   "+start+"  end  "+end)
var total_months = (end.getFullYear() - start.getFullYear())*12 + (end.getMonth() - start.getMonth())

return total_months  
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
      <View>
      
        <ImageBackground
          style={Styles.BackImg}>
          <View style={Styles.row3}
            onStartShouldSetResponder={() => {
              this.props.navigation.pop()

            }}>
            <Image
              style={Styles.backicon}
              source={require('../../../Images/back.png')}
            />
            <Text style={Styles.back} >  رجــوع  </Text>

          </View>

     
          <View style={Styles.col}>

            <Image
              style={Styles.clientspng}
              source={require('../../../Images/users.png')}
            />

          </View>
         
          <View style={Styles.details} >
            <View style={Styles.rowName}>
            

              <Text numberOfLines={1} style={Styles.username} > {this.state.name} </Text>
            </View>
            <View style={{ marginTop:hp("-5%"),height: hp('60%') }}>
              <ScrollView>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >العقد</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(contractNo) => this.setState({ contractNo })}
                  >{this.state.contractNo}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >المشترك</Text>
                  </View>
                  <TextInput style={Styles.text_line}
                  onChangeText={(name) => this.setState({ name })}
                  >{this.state.name}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >الجوال 1</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  onChangeText={(phoneNumber1) => this.setState({ phoneNumber1 })}
                  >{this.state.phoneNumber1}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >الجوال 2</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(phoneNumber2) => this.setState({ phoneNumber2 })}>{this.state.phoneNumber2}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >الجوال 3</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(phoneNumber3) => this.setState({ phoneNumber3 })}>{this.state.phoneNumber3}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >العنوان</Text>
                  </View>
                  <TextInput style={Styles.text_line}
                  onChangeText={(address) => this.setState({ address })}>{this.state.address}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >رصيد {'\n'}العبوات</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(bottleBalances) => this.setState({ bottleBalances })}>
                    {
                    this.state.bottleBalances == null ? 
                    this.state.demo  : this.state.bottleBalances
                    }
                    
                    </TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} > العبوات</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={(bottleNumbers) => this.setState({ bottleNumbers })}
                  >{this.state.bottleNumbers}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >المدينة</Text>
                  </View>
                  <View
                  
                   onStartShouldSetResponder = {() => 
                  {
                    this._get_cities()

                    this.setState({
                      modalVisible_city : true 
                    })
                  }}>
                  <Text style={Styles.text_line}>{this.state.city}</Text>
                  <Icon type="AntDesign" name="down" style={{fontSize:15,color:'#14789d',marginRight:wp('-13%'),padding: hp('2.5%'),marginTop:hp('-5.5%')}}/>
                  </View>

                  </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >نوع {'\n'}العميل</Text>
                  </View>
                  <View onStartShouldSetResponder = {() => 
                  {
                    this._get_client()

                    this.setState({
                      modalVisible_client : true 
                    })
                  }}>                  
                  <Text style={Styles.text_line}>{this.state.customerType}</Text>
                  <Icon type="AntDesign" name="down" style={{fontSize:15,color:'#14789d',marginRight:wp('-13%'),padding: hp('2.5%'),marginTop:hp('-5.5%')}}/>
                  </View>

                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >المديونية</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(due) => this.setState({ due })}>{this.state.due}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >الاستلامات</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(receiptNumbers) => this.setState({ receiptNumbers })}>{this.state.receiptNumbers}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >حالة {'\n'}الاشتراك</Text>
                  </View>
                  <View onStartShouldSetResponder = {() => 
                  {
                    this._get_sub()

                    this.setState({
                      modalVisible_status : true 
                    })
                  }}>                  
                  <Text style={Styles.text_line}>{this.state.subscriptionStatus}</Text>
                  <Icon type="AntDesign" name="down" style={{fontSize:15,color:'#14789d',marginRight:wp('-13%'),padding: hp('2.5%'),marginTop:hp('-5.5%')}}/>
                  </View>
                </View>


                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >نوع {'\n'}الاشتراك</Text>
                  </View>
                  <View onStartShouldSetResponder = {() => 
                  {
                    this._get_type()

                    this.setState({
                      modalVisible_type : true 
                    })
                  }}>                  
                  <Text style={Styles.text_line}>{this.state.subscriptionType}</Text>
                  <Icon type="AntDesign" name="down" style={{fontSize:15,color:'#14789d',marginRight:wp('-13%'),padding: hp('2.5%'),marginTop:hp('-5.5%')}}/>
                  </View>

                </View>


                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >ملاحظات</Text>
                  </View>
                  <TextInput style={Styles.text_line}
                  onChangeText={(note) => this.setState({ note })}>{this.state.note}</TextInput>
                </View>


                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >اخر {'\n'}استلام</Text>
                  </View>
                  <Text>    </Text>
                  <DatePicker
        style={{width: 200,}}
      //  date={this.state.date}
        mode="date"
        placeholder={this.state.lastReceipt}
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2022-07-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: wp('-8%'),
          },
          dateInput: {
            borderBottomWidth:.5,
            borderTopWidth:.0,
            borderLeftWidth:.0,
            borderRightWidth:0,
            borderColor:'#14789d',
            marginLeft: wp('-7%'),
            

          
              }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(lastReceipt) => {this.setState({lastReceipt: lastReceipt})}}
      />
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >السعر</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(price) => this.setState({ price })}>{this.state.price}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >نسبة{'\n'}الاستلام</Text>
                  </View>
                  <TextInput editable = {false} maxLength = {6} style={Styles.text_line1} >
                  {
                       this.state.rate == null  ?
                      <Text>%</Text>
                      : <Text>% { (this.state.rate)*100 }  </Text> 
                  }

                </TextInput>


                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title}>
                    <Text style={Styles.text} >الاشتراكات</Text>
                  </View>
                  <TextInput style={Styles.text_line1}
                  keyboardType="phone-pad"
                  onChangeText={(subscriptionNumbers) => this.setState({ subscriptionNumbers })}>{this.state.subscriptionNumbers}</TextInput>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >شهر {'\n'}الاشتراك</Text>
                  </View>
                  <Text style={Styles.text_line1}
                 >{this.state.subscriptionMonthNumbers}</Text>
                </View>

                <View style={Styles.detailsRow}>
                  <View style={Styles.title1}>
                    <Text style={Styles.text} >تاريخ {'\n'}الاشتراك </Text>
                  </View>
                  <Text>    </Text>
          <DatePicker
        style={{width: 200,}}
      //  date={this.state.date}
        mode="date"
        placeholder={this.state.subscriptionDate}
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2022-07-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: wp('-8%'),
          },
          dateInput: {
            borderBottomWidth:.5,
            borderTopWidth:.0,
            borderLeftWidth:.0,
            borderRightWidth:0,
            borderColor:'#14789d',
            marginLeft: wp('-7%'),
            placeholderTextColor:"#14789d"

            

          
              }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(subscriptionDate) => {this.setState({subscriptionDate: subscriptionDate})}}
      />

                </View>

              </ScrollView>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={Styles.update_view}
              onStartShouldSetResponder={() => {
                if (this.state.name == '') {
                  this.setState({
                    name: this.state.name,
                  })
                }
                if (this.state.phoneNumber1 == '') {
                  this.setState({
                    phoneNumber1: this.state.phoneNumber1
                  })
                }
                if (this.state.phoneNumber2 == '') {
                  this.setState({
                    phoneNumber2: this.state.phoneNumber2
                  })
                }
                if (this.state.phoneNumber3 == '') {
                  this.setState({
                    phoneNumber3: this.state.phoneNumber3
                  })
                }
                if (this.state.address == '') {
                  this.setState({
                    address: this.state.address,
                  })
                }
                if (this.state.contractNo == '') {
                  this.setState({
                    contractNo: this.state.contractNo
                  })
                }
                if (this.state.subscriptionNumbers == '') {
                  this.setState({
                    subscriptionNumbers: this.state.subscriptionNumbers
                  })
                }
                if (this.state.subscriptionMonthNumbers == '') {
                  this.setState({
                    subscriptionMonthNumbers: this.state.subscriptionMonthNumbers
                  })
                }
                if (this.state.bottleNumbers == '') {
                  this.setState({
                    bottleNumbers: this.state.bottleNumbers
                  })
                }
                if (this.state.bottleBalances == '') {
                  this.setState({
                    bottleBalances: this.state.bottleBalances
                  })
                }
                if (this.state.receiptNumbers == '') {
                  this.setState({
                    receiptNumbers: this.state.receiptNumbers
                  })
                }
                if (this.state.price == '') {
                  this.setState({
                    price: this.state.price
                  })
                }
                if (this.state.due == '') {
                  this.setState({
                    due: this.state.due
                  })
                }
                if (this.state.note == '') {
                  this.setState({
                    note: this.state.note
                  })
                }
                if (this.state.subscriptionDate == '') {
                  this.setState({
                    subscriptionDate: this.state.subscriptionDate
                  })
                }
                if (this.state.lastReceipt == '') {
                  this.setState({
                    lastReceipt: this.state.lastReceipt
                  })
                }
                if (this.state.Name_city == '') {
                  this.setState({
                    Name_city: this.state.cityId
                  })
                }
                if (this.state.Name_client == '') {
                  this.setState({
                    Name_client: this.state.customerTypeId
                  })
                }
                if (this.state.Name_status == '') {
                  this.setState({
                    Name_status: this.state.subscriptionStatusId
                  })
                }
                if (this.state.Name_type == '') {
                  this.setState({
                    Name_type: this.state.subscriptionTypeId
                  })
                }


                if (this.state.role_name == 'Admin') {
                  AsyncStorage.getItem("app_Token").then((value) => {
                    this.setState({ token: value });
                  }).then(res => {
                    axios({
                      method: 'put',
                      url: `http://188.225.184.107:7071/api/Customers/${this.state.id}`,
                      headers:
                      {
                        'Authorization': `Bearer ${this.state.token}`
                      },
                      data: {
                        id: this.state.id,
                        name: this.state.name,
                        phoneNumber1: this.state.phoneNumber1,
                        phoneNumber2: this.state.phoneNumber2,
                        phoneNumber3: this.state.phoneNumber3,
                        address: this.state.address,
                        note: this.state.note,
                        contractNo: parseInt(this.state.contractNo),

                        subscriptionNumbers: parseInt(this.state.subscriptionNumbers),
                        subscriptionMonthNumbers: parseInt(this.monthsDiff()),
                        bottleNumbers: parseInt(this.state.bottleNumbers),
                        bottleBalances: parseInt(this.state.bottleBalances),
                        receiptNumbers: parseInt(this.state.receiptNumbers),
                        price: parseFloat(this.state.price),
                        due: parseFloat(this.state.due),

                        subscriptionDate: this.state.subscriptionDate,
                        lastReceipt: this.state.lastReceipt,
                        rate:this.state.rate,
                        cityId: this.state.Name_city,
                        customerTypeId: this.state.Name_client,
                        subscriptionStatusId: this.state.Name_status,
                        subscriptionTypeId: this.state.Name_type,
                      }
                    }).then(res => {
                      console.log(res.data)
                    })
                  })
                  {
                    this.setState({
                      message: 'تمت العملية بنجاح',
                      alert: true
                    })
                  }

                }

                else {
                  {
                    this.setState({
                      message: 'لا يسمح بهذه العملية',
                      alert: true
                    })
                  }
                }
              }}>
              
              
                <Image source={require('../../../Images/true.png')} style={Styles.updateicon} />
                <Text style={Styles.update_txt} >  تأكيد البيانات</Text>
              </View>
            </View>


          </View>



    {/******************CITY MODEL***************/}
    <Modal  transparent = {true} 
                 visible = {this.state.modalVisible_city } > 
                 <View style = {Styles.model} > 
                 <TouchableOpacity onPress={()=>{
                   this.setState({ modalVisible_city : false ,
                  })
                 }}>
             <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
                 </TouchableOpacity>
              
                 <FlatList style={Styles.scroll}
              data={this.props.city}
              keyExtractor={(item, index) => item.index}
              renderItem={({ item, index }) =>
           
              <TouchableOpacity onPress = {()=>{
                
                AsyncStorage.getItem("app_Token").then((value) => {
                  this.setState({ token: value , Name_city : item.id });
                }).then(res => {
                  {this.setState({
                     city:item.localText
                  })}
                 
                  this.setState({ modalVisible_city : false,
                 })
                }) 

              }}>
            <Text style = {Styles.city_name}>{item.localText}</Text>              
              </TouchableOpacity>
              }/>
              <View  style = {{ height : 5 }}/>
                </View>
                </Modal>

              {/******************CLIENT MODEL***************/}
              <Modal  transparent = {true} 
                 visible = {this.state.modalVisible_client} > 
                 <View style = {Styles.model} > 
                 <TouchableOpacity onPress={()=>{
                   this.setState({ modalVisible_client : false })
                 }}>
             <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
                 </TouchableOpacity>
                 <FlatList style={Styles.scroll}
              data={this.props.user_client}
              keyExtractor={(item, index) => item.index}
              renderItem={({ item, index }) =>
           
              <TouchableOpacity onPress = {()=>{
                AsyncStorage.getItem("app_Token").then((value) => {
                  this.setState({ token: value , Name_client : item.id });
                }).then(res => {
                  {this.setState({
                   customerType:item.localText
                  })}
                  
                  this.setState({ modalVisible_client : false})
                }) 
              }}>
            <Text style = {Styles.model_name}>{item.localText}</Text>              
              </TouchableOpacity>
              }/>
                </View>
                </Modal>

              {/******************Status MODEL***************/}
              <Modal  transparent = {true} 
                 visible = {this.state.modalVisible_status} > 
                 <View style = {Styles.model} > 
                 <TouchableOpacity onPress={()=>{
                   this.setState({ modalVisible_status: false })
                 }}>
             <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
                 </TouchableOpacity>
                 <FlatList style={Styles.scroll}
              data={this.props.subscription}
              keyExtractor={(item, index) => item.index}
              renderItem={({ item, index }) =>
           
              <TouchableOpacity onPress = {()=>{
                AsyncStorage.getItem("app_Token").then((value) => {
                  this.setState({ token: value , Name_status : item.id });
                }).then(res => {
                  {this.setState({
                    subscriptionStatus:item.localText
                  })} 
                  
                  this.setState({ modalVisible_status : false})
                }) 
              }}>
            <Text style = {Styles.model_name}>{item.localText}</Text>              
              </TouchableOpacity>
              }/>
                </View>
                </Modal>

              {/******************Type MODEL***************/}
              <Modal  transparent = {true} 
                 visible = {this.state.modalVisible_type} > 
                 <View style = {Styles.model} > 
                 <TouchableOpacity onPress={()=>{
                   this.setState({ modalVisible_type : false })
                 }}>
             <Image source={require('../../../Images/model_close.png')} style={Styles.close}/>
                 </TouchableOpacity>
                 <FlatList style={Styles.scroll}
              data={this.props.types}
              keyExtractor={(item, index) => item.index}
              renderItem={({ item, index }) =>
           
              <TouchableOpacity onPress = {()=>{
                AsyncStorage.getItem("app_Token").then((value) => {
                  this.setState({ token: value , Name_type : item.id });
                }).then(res => {
                  {this.setState({
                    subscriptionType:item.localText
                  })} 
                  
                  this.setState({ modalVisible_type: false})
                }) 
              }}>


            <Text style = {Styles.model_name}>{item.localText}</Text>              
              </TouchableOpacity>
              }/>
                </View>
                </Modal>   

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
              this.props.navigation.pop()
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
    subscription: state.subscription_name.subscription,
    types: state.type_sub.types,
    user_client: state.user_type.user_client,

  }
}

export default connect(mapStateToProps, {

  Get_city, Get_user_type, Get_type_sub,
  Get_subscription
})(withNavigation(EditClient));


