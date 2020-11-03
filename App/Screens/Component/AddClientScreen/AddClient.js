import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Modal, FlatList,
  KeyboardAvoidingView, ImageBackground, TextInput, ScrollView
} from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { Icon, Toast, Root } from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Get_city } from '../../../Actions/GetCityAction';
import { Get_user_type } from '../../../Actions/GetUser_typeAction';
import { Get_subscription } from '../../../Actions/GetSubscriptionAction';
import { Get_type_sub } from '../../../Actions/GetType_subAction';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ConfirmDialog } from "react-native-simple-dialogs";




class AddClient extends Component {
  constructor() {
    super()
    this.state = {
      message: '', alert: false,
      token: '',
      contractNo: 0,
      name: '',
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: '',
      address: '',
      bottleBalances: 0,
      bottleNumbers: 0,
      city: '',
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
      modalVisible_city: false,
      modalVisible_client: false,
      modalVisible_type: false,
      modalVisible_status: false,

      Name_city: '', Name_type: '', Name_status: '', Name_client: '',
      city_test: 'المدينة', type_test: 'نوع الاشتراك', status_test: 'حالة الاشتراك',
      client_test: 'نوع العميل',
    }
  }
  static navigationOptions = { header: null };


  _add_Client() {

    if (this.state.subscriptionDate == '') {
      Toast.show({
        text: '                     تاكد من تاريخ الاشتراك                     ',
        style: { marginTop: -30 },
        position: 'top',
      })
    }

    /*
    else if(this.state.lastReceipt == '')
    {
      Toast.show({
        text: '                    تاكد من تاريخ الاستلام                     ',
        style : {marginTop : -30},
        position : 'top',
      })
    }
    else if(this.state.Name_city == '')
    {
      Toast.show({
        text: '               برجاء ادخال المدينة                       ',
        style : {marginTop : -30},
        position : 'top',
      })
    }
    else if(this.state.Name_status == '')
    {
      Toast.show({
        text: '               برجاء ادخال حالة الاشتراك                       ',
        style : {marginTop : -30},
        position : 'top',
      })
    }
    else if(this.state.Name_client == '')
    {
      Toast.show({
        text: '               برجاء ادخال العميل                       ',
        style : {marginTop : -30},
        position : 'top',
      })
    }
    else if(this.state.Name_type == '')
    {
      Toast.show({
        text: '               برجاء ادخال نوع الاشتراك                       ',
        style : {marginTop : -30},
        position : 'top',
      })
    }
    */
    else if (this.state.name == '') {
      Toast.show({
        text: '               برجاء ادخال  اسم المشترك                       ',
        style: { marginTop: -30 },
        position: 'top',
      })
    }
    else {

      AsyncStorage.getItem("app_Token").then((value) => {
        this.setState({ token: value });
      }).then(res => {

        axios({
          method: 'post',
          url: 'http://188.225.184.107:7071/api/Customers',
          headers:
          {
            'Authorization': `Bearer ${this.state.token}`
          },
          data: {
            name: this.state.name, phoneNumber1: this.state.phoneNumber1,
            phoneNumber2: this.state.phoneNumber2,
            phoneNumber3: this.state.phoneNumber3,
            address: this.state.address, note: this.state.note,
            contractNo: parseInt(this.state.contractNo),
            subscriptionNumbers: parseInt(this.state.subscriptionNumbers),
            //     subscriptionMonthNumbers : parseInt(this.state.subscriptionMonthNumbers) ,
            bottleNumbers: parseInt(this.state.bottleNumbers),
            bottleBalances: parseInt(this.state.bottleBalances),
            receiptNumbers: parseFloat(this.state.receiptNumbers),

            price: parseFloat(this.state.price),
            due: parseFloat(this.state.due),


            cityId: this.state.Name_city, customerTypeId: this.state.Name_client,
            subscriptionStatusId: this.state.Name_status, subscriptionTypeId: this.state.Name_type,

            subscriptionDate: this.state.subscriptionDate,
            lastReceipt: this.state.lastReceipt,
            //    gracePeriod : parseInt(this.state.subscriptionMonthNumbers)/parseInt(this.state.receiptNumbers) ,

          }
        }).then(res => {
          console.log(res.data)
        })
      })
      this.setState({
        message: 'تمت اضافة العميل بنجاح', alert: true
      })
      this.props.navigation.navigate('ReceptTableScreen')
    }
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
      <Root>


        <View style={Styles.container}>
          <ImageBackground source={require('../../../Images/login.jpg')}
            style={Styles.BackImg}>
            <KeyboardAvoidingView behavior="padding">

              <ScrollView>
                <View style={Styles.row1}>
                  <View style={Styles.row}
                    onStartShouldSetResponder={() => {
                      this.props.navigation.pop(),
                      this.setState({
                        modalVisible_city: false,
                        modalVisible_client: false,
                        modalVisible_type: false,
                        modalVisible_status: false,
                      })
                    }}

                  >

                    <Image
                      style={Styles.backicon}
                      source={require('../../../Images/back.png')}

                    />
                    <Text style={Styles.back} >  رجــوع  </Text>
                  </View>

                  <Text style={Styles.title}>اضافة عميل </Text>
                  <View style={{ alignItems: 'center' }}>

                    <View style={Styles.detailsRow}>

                      <View onStartShouldSetResponder={() => {
                        this.setState({
                          modalVisible_city: true
                        })
                        this._get_cities()

                      }}>
                        <Text style={Styles.text_line}>{this.state.city_test}</Text>


                        <Icon type="AntDesign" name="down" style={{ fontSize: 15, color: 'white', marginLeft: wp('-10%'), padding: hp('2.5%'), marginTop: hp('-5.5%') }} />
                      </View>

                    </View>

                    <View style={Styles.detailsRow}>


                      <View onStartShouldSetResponder={() => {
                        this._get_client()

                        this.setState({
                          modalVisible_client: true
                        })
                      }}>
                        <Text style={Styles.text_line}>{this.state.client_test}</Text>
                        <Icon type="AntDesign" name="down" style={{ fontSize: 15, color: 'white', marginLeft: wp('-10%'), padding: hp('2.5%'), marginTop: hp('-5.5%') }} />
                      </View>

                    </View>

                    <View style={Styles.detailsRow}>

                      <View onStartShouldSetResponder={() => {
                        this._get_sub()

                        this.setState({
                          modalVisible_status: true
                        })
                      }}>
                        <Text style={Styles.text_line}>{this.state.status_test}</Text>
                        <Icon type="AntDesign" name="down" style={{ fontSize: 15, color: 'white', marginLeft: wp('-10%'), padding: hp('2.5%'), marginTop: hp('-5.5%') }} />
                      </View>
                    </View>


                    <View style={Styles.detailsRow}>

                      <View onStartShouldSetResponder={() => {
                        this._get_type()

                        this.setState({
                          modalVisible_type: true
                        })
                      }}>
                        <Text style={Styles.text_line}>{this.state.type_test}</Text>
                        <Icon type="AntDesign" name="down" style={{ fontSize: 15, color: 'white', marginLeft: wp('-10%'), padding: hp('2.5%'), marginTop: hp('-5.5%') }} />
                      </View>

                    </View>


                  </View>
                </View>

                <View style={Styles.center}>
                  <View style={Styles.first_line}>

                    {/******************CITY MODEL***************/}
                    <Modal transparent={true}
                      animationType="fade"
                      onPressOutside={() => this.setState({ modalVisible_city: false })}

                      coverScreen={false}
                      visible={this.state.modalVisible_city} >
                      <View style={Styles.model} >
                        <TouchableOpacity onPress={() => {
                          this.setState({
                            modalVisible_city: false,
                            city_test: 'المدينة'
                          })
                        }}>
                          <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                        </TouchableOpacity>

                        <FlatList style={Styles.scroll}
                          data={this.props.city}
                          keyExtractor={(item, index) => item.index}
                          renderItem={({ item, index }) =>

                            <TouchableOpacity onPress={() => {
                              this.setState({
                                Name_city: item.id, modalVisible_city: false,
                                city_test: item.localText
                              })
                            }}>
                              <Text style={Styles.city_name}>{item.localText}</Text>
                            </TouchableOpacity>
                          } />
                      </View>
                    </Modal>


                    {/******************CLIENT MODEL***************/}
                    <Modal transparent={true}
                      animationType="fade"

                      visible={this.state.modalVisible_client} >
                      <View style={Styles.model} >
                        <TouchableOpacity onPress={() => {
                          this.setState({
                            modalVisible_client: false,
                            client_test: 'نوع العميل'
                          })
                        }}>
                          <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                        </TouchableOpacity>
                        <FlatList style={Styles.scroll}
                          data={this.props.user}
                          keyExtractor={(item, index) => item.index}
                          renderItem={({ item, index }) =>

                            <TouchableOpacity onPress={() => {
                              this.setState({
                                Name_client: item.id, modalVisible_client: false,
                                client_test: item.localText
                              })
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
                      <View style={Styles.model} >
                        <TouchableOpacity onPress={() => {
                          this.setState({
                            modalVisible_status: false,
                            status_test: 'حالة الاشتراك'
                          })
                        }}>
                          <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                        </TouchableOpacity>
                        <FlatList style={Styles.scroll}
                          data={this.props.subscription}
                          keyExtractor={(item, index) => item.index}
                          renderItem={({ item, index }) =>

                            <TouchableOpacity onPress={() => {
                              this.setState({
                                Name_status: item.id, modalVisible_status: false,
                                status_test: item.localText
                              })
                            }}>
                              <Text style={Styles.client_name}>{item.localText}</Text>
                            </TouchableOpacity>
                          } />
                        <Text>{'\n'}</Text>
                      </View>
                    </Modal>

                    {/******************Type MODEL***************/}
                    <Modal transparent={true}
                      animationType="fade"

                      visible={this.state.modalVisible_type} >
                      <View style={Styles.model} >
                        <TouchableOpacity onPress={() => {
                          this.setState({
                            modalVisible_type: false,
                            type_test: ' نوع الاشتراك'
                          })
                        }}>
                          <Image source={require('../../../Images/model_close.png')} style={Styles.close} />
                        </TouchableOpacity>
                        <FlatList style={Styles.scroll}
                          data={this.props.types}
                          keyExtractor={(item, index) => item.index}
                          renderItem={({ item, index }) =>

                            <TouchableOpacity onPress={() => {
                              this.setState({
                                Name_type: item.id, modalVisible_type: false,
                                type_test: item.localText
                              })
                            }}>
                              <Text style={Styles.client_name}>{item.localText}</Text>
                            </TouchableOpacity>
                          } />
                        <Text>{'\n'}</Text>

                      </View>
                    </Modal>


                  </View>







                  <ScrollView style={{ width: '100%', height: '100%' }}>

                    <TextInput style={Styles.input} keyboardType="phone-pad"
                      placeholder=' العقد' placeholderTextColor={'white'}
                      onChangeText={(contractNo) => this.setState({ contractNo })} />
                    <TextInput style={Styles.input}
                      placeholder=' اسم المشترك ' placeholderTextColor={'white'}
                      onChangeText={(name) => {
                        this.setState({ name })
                      }} />
                    <TextInput style={Styles.input}
                      placeholder=' رقم الجوال ١ ' placeholderTextColor={'white'}
                      keyboardType="phone-pad"
                      onChangeText={(phoneNumber1) => this.setState({ phoneNumber1 })} />
                    <TextInput style={Styles.input}
                      keyboardType="phone-pad"
                      placeholder=' رقم الجوال ٢ ' placeholderTextColor={'white'}
                      onChangeText={(phoneNumber2) => this.setState({ phoneNumber2 })} />
                    <TextInput style={Styles.input}
                      placeholder=' رقم الجوال ٣ ' placeholderTextColor={'white'}
                      keyboardType="phone-pad"
                      onChangeText={(phoneNumber3) => this.setState({ phoneNumber3 })} />
                    <TextInput style={Styles.input}
                      placeholder=' العنوان ' placeholderTextColor={'white'}
                      onChangeText={(address) => this.setState({ address })} />
                    <TextInput style={Styles.input}
                      placeholder=' رصيد العبوات ' placeholderTextColor={'white'}
                      keyboardType="phone-pad"
                      onChangeText={(bottleBalances) => this.setState({ bottleBalances })} />
                    <TextInput style={Styles.input} keyboardType="phone-pad"
                      placeholder=' العبوات ' placeholderTextColor={'white'}
                      keyboardType="phone-pad"
                      onChangeText={(bottleNumbers) => {
                        this.setState({ bottleNumbers })
                      }} />

                    <TextInput style={Styles.input}
                      placeholder=' المديونية ' placeholderTextColor={'white'}
                      keyboardType="phone-pad"
                      onChangeText={(due) => this.setState({ due })} />
                    <TextInput style={Styles.input}
                      placeholder=' الاستلامات ' placeholderTextColor={'white'} keyboardType="phone-pad"
                      onChangeText={(receiptNumbers) => this.setState({ receiptNumbers })} />

                    <TextInput style={Styles.input}
                      placeholder='ملاحظات ' placeholderTextColor={'white'}
                      onChangeText={(note) => this.setState({ note })} />

                    <DatePicker
                      style={{ width: 300, marginTop: hp('3%') }}
                      mode="date"
                      placeholder={'  اخر استلام     ' + this.state.lastReceipt}
                      placeholderTextColor={'white'}
                      format="YYYY-MM-DD"
                      minDate="2020-05-01"
                      maxDate="2022-07-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: wp('10%'),
                        },
                        dateInput: {
                          borderBottomWidth: .5,
                          borderTopWidth: .0,
                          borderLeftWidth: .0,
                          borderRightWidth: 0,
                          borderColor: 'white',
                          width: wp('40%'),
                          marginLeft: wp('10%')


                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(lastReceipt) => { this.setState({ lastReceipt: lastReceipt }) }}
                    />



                    <TextInput style={Styles.input}
                      placeholder='السعر ' placeholderTextColor={'white'} keyboardType="phone-pad"
                      onChangeText={(price) => this.setState({ price })} />

                    <TextInput style={Styles.input} keyboardType="phone-pad"
                      placeholder='الاشتراكات ' placeholderTextColor={'white'}
                      onChangeText={(subscriptionNumbers) => this.setState({ subscriptionNumbers })} />

                    <DatePicker
                      style={{ width: 300, marginTop: hp('3%') }}
                      mode="date"
                      placeholder={'  تاريخ الاشتراك   ' + this.state.subscriptionDate}
                      placeholderTextColor={'white'}
                      format="YYYY-MM-DD"
                      minDate="2020-05-01"
                      maxDate="2022-07-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: wp('10%'),
                        },
                        dateInput: {
                          borderBottomWidth: .5,
                          borderTopWidth: .0,
                          borderLeftWidth: .0,
                          borderRightWidth: 0,
                          borderColor: 'white',
                          width: wp('40%'),
                          marginLeft: wp('10%')


                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(subscriptionDate) => { this.setState({ subscriptionDate: subscriptionDate }) }}
                    />
                    <View style = {{ alignItems : 'center'}}> 
                    <View style={Styles.view_btn}>
                      <TouchableOpacity
                        onPress={() => { this.props.navigation.pop() }}
                        style={Styles.button}>
                        <Text style={Styles.text} >الغــاء</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={Styles.button} onPress={() => {
                        this._add_Client()

                      }}>
                        <Text style={Styles.text} > حفظ </Text>
                      </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{ height: hp('5%') }} />
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
                        }
                      }}

                    />


                  </ScrollView>


                </View>

              </ScrollView>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>

      </Root>
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
})(withNavigation(AddClient));
