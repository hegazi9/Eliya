import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground, StyleSheet, FlatList, Image, ToastAndroid, ActivityIndicator
} from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { get_chart } from '../../../Actions/GetChartAction';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { PieChart } from 'react-native-svg-charts'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import style from './style';

let sum = 0;

const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
class Statistic extends Component {

  constructor() {
    super()
    this.state = {
      city_name: '', token: '', demo: [1, 1, 1, 1, 1, 1, 1, 1, 1],
       arr : [] , colors : [] ,  sum : 0 
    }

  }



  componentDidMount() {
    const{navigation}= this.props;
    this.foucsListener =navigation.addListener('willFocus',()=>{
    this._get_Report();
  for (let num of this.props.user_data )
 {
    sum = sum + num 
  }
    })
    this.didFocusListener =navigation.addListener('didBlur',()=>{
      this.foucsListener.remove()
    })
}

  _get_Report() {
    AsyncStorage.getItem("app_Token").then((value) => {
      this.setState({ token: value });
    }).then(res => {
      this.props.get_chart(this.state.token)

    })

  }

  static navigationOptions = { header: null };

  render() {
    const data = [50, 10, 20]
    const pieData = this.props.user_data
      .filter((value) => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill:  randomColor()

          ,
          onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
      }))

    return (
      this.props.loading
      ?
      <View style={Styles.container} style={{ backgroundColor: '#14789d', justifyContent: 'center', alignItems: 'center', height: hp('100%') }}>
        <ActivityIndicator size="large" animating color='white' />

      </View>
      :
      <View >


        <ImageBackground
          style={Styles.BackImg}>
          <View style={Styles.row3} onStartShouldSetResponder = {() => {
            this.props.navigation.pop() 
          }}>
            <TouchableOpacity onPress={() => { this.props.navigation.pop() }}>

              <Image
                style={Styles.backicon}
                source={require('../../../Images/back.png')}
              />

            </TouchableOpacity>
            <Text style={Styles.back} >  رجــوع  </Text>
            <Text style={Styles.title} >إحصائيـــات</Text>
          </View>
          <View style={{
            backgroundColor: '#D1D3D4', justifyContent: 'center', marginTop: hp('3%'),
            alignItems: 'center', height: '100%'
          }}>

            <View style={{ height: 70, marginBottom: 1 }}>


              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style ={{ scaleX : -1}}>
              
                <View style = {{ flexDirection : 'row' }}>

                <View style={style.card1} >
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[0]}</Text>
                  </View>
                  <Text style={style.name1}> زبائن جدد هذا اليوم </Text>
                </View>

                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[1]}</Text>
                  </View>
                  <Text style={style.name1}> زبائن جدد هذا الشهر </Text>
                </View>

                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[2]}</Text>
                  </View>
                  <Text style={style.name1}>  مجموع {'\n'}العملاء  </Text>
                </View>

                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[3]}</Text>
                  </View>
                  <Text style={style.name1}>عبوات {'\n'}عائقة </Text>
                </View>

                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[4]}</Text>
                  </View>
                  <Text style={style.name1}> انتهاء فترة السماح </Text>
                </View>

                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[5]}</Text>
                  </View>
                  <Text style={style.name1}>  زبائن {'\n'}محالين </Text>
                </View>

                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[6]}</Text>
                  </View>
                  <Text style={style.name1}>  زبائن{'\n'}  منسحبون </Text>
                </View>


                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[7]}</Text>
                  </View>
                  <Text style={style.name1}> عملاء تم تسليمهم  </Text>
                </View>


                <View style={style.card1}>
                  <View style={style.sq}>
                    <Text style={style.y}>{this.props.b[8]}</Text>
                  </View>
                  <Text style={style.name1}> إغلاق بواسطة الشركة   </Text>
                </View>

                </View>
              </ScrollView>

            </View>


     
            <View style={{ height: hp('65%'), marginTop: hp('2%'), marginBottom: hp('20%') }}>
              <FlatList
                data={this.props.user}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item, index }) =>
                  <View style={{
                    justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'),
                  }}>

                    <View style={style.card}>
                      <View style={{
                        height: 45, backgroundColor: '#A6ACAF',
                        marginTop: hp('-1%')
                        , width: 50, borderRadius: 5,
                        marginLeft: wp('2%')
                      }}>
                        <Text style={style.y}>{ item.y}
                         </Text>
                      </View>
                      <Text style={style.name}>{item.name}</Text>

                    </View>
                  </View>

                } />

            </View>
          </View>
        </ImageBackground>

      </View>
    );

  }


}

const mapStateToProps = state => {
  return {
    user: state.chart.user,
    user_data: state.chart.user_data,
    b: state.chart.b,
    loading: state.chart.loading
  }
}

export default connect(mapStateToProps, { get_chart })(withNavigation(Statistic));