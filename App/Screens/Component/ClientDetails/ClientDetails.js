import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground, TextInput, FlatList, Image, ToastAndroid,
  ActivityIndicator, Modal, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard
} from 'react-native';
import Styles from './style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { withNavigation } from 'react-navigation';
import { Get_client_id } from '../../../Actions/Get_Client_idAction';
import { connect } from 'react-redux';
import { ConfirmDialog } from "react-native-simple-dialogs";
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';



class ClientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [2],
      width: wp('50%'),
      height: hp('5%'),
      token: '',
      id: '',
      name: '',
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
      gracePeriod: 0,
      subscriptionNumbers: 0,
      subscriptionMonthNumbers: 0,
      subscriptionDate: '',
      contractNo: 0,
      city: '', customerType: '',
      cityId: '',
      customerTypeId: '',
      subscriptionStatusId: '',
      subscriptionTypeId: '',
      alert: false, message: '',
      rate: '',
      View_he: hp('60%'),
      today:moment().format("YYYY-MM-DD") ,

      okey : ''
    };
  }

  componentDidMount() {


    this.setState({
      width: wp('50%'),
      height: hp('5%'),
      View_he: hp('60%')
    })
    
 
    
    this.setState({
      width: wp('50%'),
      height: hp('5%'),
      View_he: hp('60%')
    })
    const{navigation}= this.props;
    this.foucsListener =navigation.addListener('willFocus',()=>{
      this._get_client_by_id()
      AsyncStorage.getItem('ROLE').then((res) => {
        this.setState({
          role_name: res
        })
      })

    })

    this.props.user_id.map(i=>{
      this.setState({
        subscriptionDate:i.subscriptionDate
      })
    })

  }
 
  monthsDiff() 
  {  
    console.log("   today   "+this.state.today+"  months  "+this.props.subscriptionDate)
  var startDate = this.props.subscriptionDate;
  var endDate = this.state.today;
  
  
  var start = new Date(Date.parse(startDate));
  var end = new Date(Date.parse(endDate))
  console.log("   start   "+start+"  end  "+end)
  var total_months = (end.getFullYear() - start.getFullYear())*12 + (end.getMonth() - start.getMonth())
  
  return (total_months) + 1  
  }
  

  _get_client_by_id() {
    const id = this.props.navigation.getParam('Client_id');
    AsyncStorage.getItem('app_Token').then(val => {
      this.props.Get_client_id(val, id)
    })
    console.log('hhhhhhhhhhh')
    console.log(this.props.user_id)
  }

  render() {
    return (
      this.props.load
        ?
        <View style={Styles.container} style={{ backgroundColor: '#14789d', justifyContent: 'center', alignItems: 'center', height: hp('100%') }}>
          <ActivityIndicator size="large" animating color='white' />

        </View>
        :

        <View>
          <ImageBackground
            style={Styles.BackImg}>
            <TouchableOpacity style={Styles.row3}
              onPress={() => {
                this.props.navigation.pop()

              }}>
              <Image
                style={Styles.backicon}
                source={require('../../../Images/back.png')}
              />
              <Text style={Styles.back} >  رجــوع  </Text>

            </TouchableOpacity>

            <View style={Styles.col}>

              <Image
                style={Styles.clientspng}
                source={require('../../../Images/users.png')}
              />

            </View>


            <View style={Styles.details} >

              <FlatList

                data={this.props.user_id}
                renderItem={({ item, index }) =>
                  <View>
                    <View style={Styles.rowName}>
                      <View style={{ flexDirection: 'column' }} onStartShouldSetResponder={() => {
                        this.props.navigation.navigate('EditClient', {
                          'Client_id': item.id,
                          'Client_name': item.name,
                          'Client_contractNo': item.contractNo,
                          'Client_phoneNumber1': item.phoneNumber1,
                          'Client_phoneNumber2': item.phoneNumber2,
                          'Client_phoneNumber3': item.phoneNumber3,
                          'Client_address': item.address,

                          'Client_city': item.city,
                          'Client_bottleNumbers': String(item.bottleNumbers),
                          'Client_bottleBalances': String(item.bottleBalances),
                          'Client_receiptNumbers': String(item.receiptNumbers),
                          'Client_due': String(item.due),
                          'Client_customerType': item.customerType,

                          'Client_note': item.note,
                          'Client_subscriptionType': item.subscriptionType,
                          'Client_subscriptionStatus': item.subscriptionStatus,
                          'Client_subscriptionDate': String(item.subscriptionDate),
                          'Client_subscriptionMonthNumbers': this.monthsDiff(),
                          'Client_subscriptionNumbers': String(item.subscriptionNumbers),

                          'Client_gracePeriod': String(item.gracePeriod),
                          'Client_price': String(item.price),
                          'Client_lastReceipt': item.lastReceipt,

                          'Client_cityId': item.cityId,
                          'Client_customerTypeId': item.customerTypeId,
                          'Client_subscriptionStatusId': item.subscriptionStatusId,
                          'Client_subscriptionTypeId': item.subscriptionTypeId,
                          'Client_rate': item.rate,
                        })

                      }}>

                        <Image source={require('../../../Images/update.png')} style={Styles.delete} />
                        <Text style={Styles.txticon} > تعديل </Text>
                      </View>

                      <Text numberOfLines={1} style={Styles.username} > {item.name} </Text>
                    </View>
                    <View style={{ height: this.state.View_he }}>
                      <ScrollView>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >العقد</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.contractNo}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >المشترك</Text>
                          </View>
                          <Text style={Styles.text_line}>{item.name}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >الجوال 1</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.phoneNumber1}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >الجوال 2</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.phoneNumber2}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >الجوال 3</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.phoneNumber3}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >العنوان</Text>
                          </View>
                          <Text style={Styles.text_line}>{item.address}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>
                            <Text style={Styles.text} >رصيد {'\n'}العبوات</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.bottleBalances}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >العبوات</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.bottleNumbers}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >المدينة</Text>
                          </View>
                          <Text style={Styles.text_line}>{item.city}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>
                            <Text style={Styles.text} >نوع {'\n'}العميل</Text>
                          </View>
                          <Text style={Styles.text_line}>{item.customerType}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >المديونية</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.due}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >الاستلامات</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.receiptNumbers}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>
                            <Text style={Styles.text} >حالة {'\n'}الاشتراك</Text>
                          </View>
                          <Text style={Styles.text_line}>{item.subscriptionStatus}</Text>
                        </View>


                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>
                            <Text style={Styles.text} >نوع {'\n'}الاشتراك</Text>
                          </View>
                          <Text style={Styles.text_line}>{item.subscriptionType}</Text>
                        </View>


                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >ملاحظات</Text>
                          </View>
                          <Text style={Styles.text_line}>{item.note}</Text>
                        </View>


                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>

                            <Text style={Styles.text} >اخر {'\n'}استلام</Text>
                          </View>

                          <Text style={Styles.text_line1}>
                            {
                              item.lastReceipt == null
                                ? <Text></Text>
                                : <Text>{item.lastReceipt.split('T')[0]}</Text>
                            }
                          </Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >السعر</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.price}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>
                            <Text style={Styles.text} >نسبة{'\n'}الاستلام</Text>
                          </View>
                          <TextInput editable={false} maxLength={6} style={Styles.text_line1} >
                            {
                              item.rate == null ?
                                <Text>%</Text>
                                : <Text>% {(item.rate)*100}  </Text>
                            }

                          </TextInput>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title}>
                            <Text style={Styles.text} >الاشتراكات</Text>
                          </View>
                          <Text style={Styles.text_line1}>{item.subscriptionNumbers}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>
                            <Text style={Styles.text} >شهر {'\n'}الاشتراك</Text>
                          </View>
                          <Text style={Styles.text_line1}>{this.monthsDiff()}</Text>
                        </View>

                        <View style={Styles.detailsRow}>
                          <View style={Styles.title1}>
                            <Text style={Styles.text} >تاريخ {'\n'}الاشتراك </Text>
                          </View>

                          <Text style={Styles.text_line1}>
                            {
                              item.subscriptionDate == null
                                ? <Text></Text>
                                : <Text>{item.subscriptionDate.split('T')[0]}</Text>
                            }
                          </Text>
                        </View>

                      </ScrollView>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{
                        flexDirection: 'row',
                        borderColor: 'white', width: this.state.width, backgroundColor: '#14789d',
                        borderRadius: hp('2%'), height: this.state.height, margin: wp('1%'), marginTop: hp('4%'),
                        shadowColor: '#000', fontFamily: 'ge-ss-two-medium',
                        shadowOffset: {
                          width: 0,
                          height: 2, marginLeft: hp('1%'),
                          alignItems: 'center', justifyContent: 'center',
                        },
                        shadowRadius: 5,
                        shadowOpacity: 1.0
                      }}

                        onStartShouldSetResponder={() => {

                          if (this.state.role_name == 'Admin') {
                            AsyncStorage.getItem("app_Token").then((value) => {
                              this.setState({ token: value });
                            }).then(res => {
                              axios({
                                method: 'put',
                                url: `http://188.225.184.107:7071/api/Customers/${item.id}`,
                                headers:
                                {
                                  'Authorization': `Bearer ${this.state.token}`
                                },
                                data: {
                                  id: item.id,
                                  name: item.name,
                                  phoneNumber1: item.phoneNumber1,
                                  phoneNumber2: item.phoneNumber2,
                                  phoneNumber3: item.phoneNumber3,
                                  address: item.address,
                                  note: item.note,
                                  contractNo: parseInt(item.contractNo),

                                  subscriptionNumbers: parseInt(item.subscriptionNumbers),
                                  subscriptionMonthNumbers: parseInt(item.subscriptionMonthNumbers),
                                  bottleNumbers: parseInt(item.bottleNumbers),
                                  bottleBalances: parseInt(item.bottleBalances),
                                  receiptNumbers: 1 + parseFloat(item.receiptNumbers),
                                  price: parseFloat(item.price),
                                  due: parseFloat(item.due),

                                  subscriptionDate: item.subscriptionDate,
                                  lastReceipt: moment().format("YYYY-MM-DD"),
                                  rate: item.rate,
                                  cityId: item.cityId,
                                  customerTypeId: item.customerTypeId,
                                  subscriptionStatusId: item.subscriptionStatusId,
                                  subscriptionTypeId: item.subscriptionTypeId,
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
                        <Text style={Styles.update_txt} >  تم التسليم</Text>
                      </View>
                    </View>
                  </View>
                } />

            </View>

            <ConfirmDialog dialogStyle={{ marginLeft: wp('12%'), borderRadius: 20, width: wp('65%') }}
              message={this.state.message} messageStyle={{ textAlign: 'center', color: '#046567' }}
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
    load: state.client_by_id.load,
    
    subscriptionDate: state.client_by_id.subscriptionDate,

    user_id: state.client_by_id.user_id,
  }
}

export default connect(mapStateToProps, { Get_client_id })(withNavigation(ClientDetails));
