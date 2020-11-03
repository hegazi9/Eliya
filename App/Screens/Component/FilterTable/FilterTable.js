import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground, TextInput, FlatList, Image, ToastAndroid,
  ActivityIndicator, Modal
} from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { Icon } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Get_filter } from '../../../Actions/Get_FilterAction';
import { connect } from 'react-redux';
import { deete_coustomer } from '../../../Actions/Del_customerAction';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ConfirmDialog } from "react-native-simple-dialogs";


class FilterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false, del_alert: false,
      message: '', loading: true, filter: null,
      serverData: [], fetching_from_server: false,
      visible: true, header: '', test: '', check: true, token: '', delete_icon: '',
      arr: [], role_name: '',
      contractNo: 0,
      name: '',refresh:false, 
    }
    this.offset = 0;
    this.offset1 = 0;
  }

  static navigationOptions = { header: null };


  componentDidMount() {
    const{navigation}= this.props;
    this.foucsListener =navigation.addListener('willFocus',()=>{
      this.offset = 0;
      this.setState({
        serverData:[],
      })
    this._get_Clients()
    AsyncStorage.getItem('ROLE').then((res) => {
      this.setState({
        role_name: res
      })
    })
  })
  }

  _get_Clients() {
    const CITY = this.props.navigation.getParam('CITY');
    const TYPE = this.props.navigation.getParam('TYPE');
    const STATUS = this.props.navigation.getParam('STATUS');
    const CLIENT = this.props.navigation.getParam('CLIENT');

    AsyncStorage.getItem('app_Token').then((Token) => {

      axios.get(`http://188.225.184.107:7071/api/Customers?offset=${this.offset}&limit=20&city=${CITY}&subscribtiontype=${TYPE}&subscribtionstatus=${STATUS}&customertype=${CLIENT}`,
        {
          headers:
          {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
          }
        })
        .then(responseJson => {
          console.log(responseJson.data.data)
          console.log('hehehehheheh')
          this.offset = this.offset + 1;

          this.setState({
            serverData: [...this.state.serverData, ...responseJson.data.data],
            refresh:false, 
            loading: false, Checker: false
          });
        })
        .catch(error => {
          console.error(error);
        });

    })
  }


  set_search(text) {
    const CITY = this.props.navigation.getParam('CITY');
    const TYPE = this.props.navigation.getParam('TYPE');
    const STATUS = this.props.navigation.getParam('STATUS');
    const CLIENT = this.props.navigation.getParam('CLIENT');
    AsyncStorage.getItem('app_Token').then(Token => {

      axios.get(`http://188.225.184.107:7071/api/Customers?offset=${this.offset1}&limit=10&CustomerName=${text}&city=${CITY}&subscribtiontype=${TYPE}&subscribtionstatus=${STATUS}&customertype=${CLIENT}`,
        {
          headers:
          {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
          }
        })
        .then(responseJson => {
          this.offset = this.offset1 + 1;
          console.log('hegazy')
          console.log(responseJson.data.data)

          this.setState({
            arr: responseJson.data.data, Checker: true
          });

        })
        .catch(error => {
          console.error(error);
        });

    })
  }

  _delete_user() {
    if (this.state.role_name == 'Admin') {
      AsyncStorage.getItem("app_Token").then((value) => {
        this.setState({ token: value });
      }).then(res => {
        this.props.deete_coustomer(this.state.token, this.state.delete_icon)
        this.setState({

         del_alert: false
        })
      })
      //this.props.navigation.pop()
      this.handleRefresh()


    }
    else {
      {
        this.setState({
          message: 'لا يسمح بهذه العملية',
          alert: true
        })
      }
    }

  }

  handleRefresh  = () => {
    this.offset = 0;
    this.setState({
      refresh:true,
      serverData:[],
    })
    
      this._get_Clients()
  }
  

  handleLoadMore = () => {
    const CITY = this.props.navigation.getParam('CITY');
    const TYPE = this.props.navigation.getParam('TYPE');
    const STATUS = this.props.navigation.getParam('STATUS');
    const CLIENT = this.props.navigation.getParam('CLIENT');
    AsyncStorage.getItem('app_Token').then((Token) => {

      axios.get(`http://188.225.184.107:7071/api/Customers?offset=${this.offset}&limit=20&city=${CITY}&subscribtiontype=${TYPE}&subscribtionstatus=${STATUS}&customertype=${CLIENT}`,
        {
          headers:
          {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}`
          }
        })
        .then(responseJson => {
          //Successful response from the API Call

          this.offset = this.offset + 1;
          //After the response increasing the offset for the next API call.
          this.setState({
            serverData: [...this.state.serverData, ...responseJson.data.data],
            //adding the new data with old one available in Data Source of the List
            fetching_from_server: false,
            //updating the loading state to false
          });
        })
        .catch(error => {
          console.error(error);
        });
    });
  };



  render() {
    // const loading= true
    return (
      this.state.loading
        ?
        <View style={Styles.container} style={{ backgroundColor: '#14789d', justifyContent: 'center', alignItems: 'center', height: hp('100%') }}>
          <ActivityIndicator size="large" animating color='white' />

        </View>
        :

        <View >

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

              <View style={Styles.name_search}>
                <TouchableOpacity onPress={() => {

                  this.set_search(this.state.filter)
                }}>
                  <Image
                    style={Styles.backicon1}
                    source={require('../../../Images/search.png')}
                  />
                </TouchableOpacity>
                <TextInput style={Styles.small_input}
                  placeholderTextColor={'#9ad9e8'} placeholder="بحث بالاسم"
                  onChangeText={(filter) => this.setState({ filter })}
                  value={this.state.filter} />
              </View>

            </View>
            <FlatList style={{ height: hp('80%') }}

              data={!this.state.Checker ? this.state.serverData : this.state.arr}
              refreshing={this.state.refresh}
              onRefresh={this.handleRefresh}
              onEndReachedThreshold={0.5}
              onEndReached={this.handleLoadMore}
              renderItem={({ item, index }) =>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                  <View style={Styles.button}>

                    <View style={Styles.line}>
                      <View style={{ flexDirection: 'column' }}
                        onStartShouldSetResponder={() => {
                          this.setState({
                            delete_icon: item.id, del_alert: true,
                            message: 'هل تريد حذف العميل ؟',
                          })
                        }}>
                        <Image source={require('../../../Images/delete.png')} style={Styles.delete} />
                        <Text style={Styles.txticon} > حذف</Text>
                      </View>

                      <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('ClientDetails', {
                          'CHECKER': 'true',
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
                          'Client_subscriptionMonthNumbers': String(item.subscriptionMonthNumbers),
                          'Client_subscriptionNumbers': String(item.subscriptionNumbers),

                          'Client_gracePeriod': String(item.gracePeriod),
                          'Client_price': String(item.price),
                          'Client_lastReceipt': item.lastReceipt,


                        })
                      }}>
                        <Text numberOfLines={1} style={Styles.username} > {item.name}</Text>
                      </TouchableOpacity>

                    </View>

                  </View>
                </View>

              } />
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

            <ConfirmDialog dialogStyle={{ marginLeft: wp('12%'), borderRadius: 20, width: wp('65%') }}
              message={this.state.message} messageStyle={{ textAlign: 'center', color: '#14789d' }}
              visible={this.state.del_alert}

              positiveButton={{
                title: "لا",
                onPress: () => {
                  //  alert("No touched!")
                  this.setState({
                    del_alert: false
                  })
                }
              }}
              negativeButton={{
                title: "نعم",
                onPress: () => {
                  this._delete_user()
                }
              }
              } />


            <View style={{ height: 50, width: '100%' }}>
            </View>
          </ImageBackground>

        </View>
    );

  }
}

const mapStateToProps = state => {
  return {
    filter: state.data_filter.filter,
    load: state.data_filter.load,
    del: state.delete_customer.del,

  }
}

export default connect(mapStateToProps, {
  Get_filter, deete_coustomer,
})(withNavigation(FilterTable));
