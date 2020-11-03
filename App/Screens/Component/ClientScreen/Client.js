import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ImageBackground, TextInput, FlatList, Image, Modal, PermissionsAndroid,
  ToastAndroid, ScrollView

} from 'react-native';
import Styles from './style';
import { withNavigation } from 'react-navigation';
import { Icon   } from 'native-base';
import { Get_all_clients } from '../../../Actions/Get_All_ClientAction';
import { Download_Pdf } from '../../../Actions/DownloadPdfAction';
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { ConfirmDialog } from "react-native-simple-dialogs";
import RNFetchBlob from 'rn-fetch-blob'


class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false, message: '',
      visible: true, header: '', role_name: '', modalVisible: false,
      GridListItems: [
        { key: "بريك صحي" },
        { key: "مكان من زمان" },
        { key: "هون ربينا" },
      ],
      arr: [],
      offset: 0,
      modalVisible: false,
      token: '',
      choose: false,      choose1: false,


    }
  }

  static navigationOptions = { header: null };

  componentDidMount() {

    AsyncStorage.getItem('ROLE').then((res) => {
      this.setState({
        role_name: res
      })
    })
  }


  handleDownloadPdf = (url, title) => {
    let dirs = RNFetchBlob.fs.dirs

    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `${title}`,
        path: `${dirs.DownloadDir}/${title}`,
      },
    })
      .fetch('GET', url, {})
      .then((res) => {
        console.log('The file saved to ', res.path());
      })
      .catch((e) => {
        console.log(e)
      });
  }

  downloadPdf = async (url, title) => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.handleDownloadPdf(url, title);
      } else {
        Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  handleDownloadPdfClients = () => {
    let dirs = RNFetchBlob.fs.dirs

    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `العملاء.pdf`,
        path: `${dirs.DownloadDir}/العملاء.pdf`,
      },
    })
      .fetch('GET', 'http://188.225.184.107:7071/api/Customers/ExportPDF?type=%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1', {})
      .then((res) => {
        console.log('The file saved to ', res.path());
      })
      .catch((e) => {
        console.log(e)
      });
  }

  downloadPdfClients = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.handleDownloadPdfClients();
      } else {
        Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  _get_client() {

    this.props.Get_all_clients(this.state.offset)
    this.props.navigation.navigate('ClientTableScreen', {
      'USER': this.props.user
    })
  }


  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground source={require('../../../Images/login.jpg')}
          style={Styles.BackImg}>
          <View style={Styles.row1}>
            <View style={Styles.row}
              onStartShouldSetResponder={() => this.props.navigation.pop()}>



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
              <View style={Styles.rate_view}>
                <Text style={Styles.rate} >  تقييم العميل  </Text>
                <View style={Styles.stars}>
                  <Icon name="star-o" type="FontAwesome" style={Styles.right} />
                  <Icon name="star-o" type="FontAwesome" style={Styles.right} />
                  <Icon name="star-o" type="FontAwesome" style={Styles.right} />
                  <Icon name="star" type="FontAwesome" style={Styles.right} />
                  <Icon name="star" type="FontAwesome" style={Styles.right} />

                </View>
              </View>
            </View>
          </View>






          <View style={Styles.rowline}>
            <Text style={Styles.txt}
              onPress={() => {

                if (this.state.role_name == 'Admin') {
                  this.props.navigation.navigate('AddClientScreen')
                }
                else {
                  this.setState({
                    message: 'لا يسمح بهذه العملية',
                    alert: true
                  })


                }
              }}>  اضافة عمـيل   </Text>
            <Image source={require('../../../Images/plus.png')}
              style={Styles.addicon}
            />

            <Image source={require('../../../Images/arrow.png')}
              style={Styles.arrowicon}
            />
            <Text style={Styles.txt} >  العمـلاء  </Text>

          </View>

          <View style={Styles.center}>


            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={() => {
                this._get_client()
              }}
                style={Styles.button1
                }>
                <Text style={Styles.text2} >
                  العملاء</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.button1
                }
                onPress={() => {
                  this.props.navigation.navigate('ReceptTableScreen')
                }}

              >
                <Text style={Styles.text2} >
                  قائمة التسليم </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {

                this.setState({
                  modalVisible: true
                })
             }}
                style={Styles.button1
                }>

                <Text style={Styles.text2} >
                  حفظ </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
               
                this.props.navigation.navigate('StatisticScreen')
         }}
                style={Styles.button1
                }>
                <Text style={Styles.text2} >
                  إحصائيات
                  </Text>
              </TouchableOpacity>
            </View>


            <Modal transparent={true}
              animationType="fade"
              //    animationIn='slideInUp'
              animationOut='slideOutDown'
              visible={this.state.modalVisible} >
              <View style={Styles.model} >

                <View style={Styles.row5}>

                  <View style={Styles.column} onStartShouldSetResponder={() => {

                    this.setState({ modalVisible: false })
                  }}>
                    <TouchableOpacity onPress={() => {
                   
                      this.setState({
                        modalVisible: false,
                        choose: true
                      })
                    }}>

                      <Icon style={{fontSize:100,color:'#14789d' }} type="AntDesign" name="pdffile1"/>
                    </TouchableOpacity>


                  </View>

                  <View style={Styles.column} style={{ marginLeft: wp('10%') }} onStartShouldSetResponder={() => {

                            this.setState({
                              choose1: true,
                              modalVisible:false
                            })
                  }}>
                   
                   <Icon style={{fontSize:100,color:'#14789d' }} type="AntDesign" name="exclefile1"/>

                  </View>
                </View>

                <View style={Styles.title}
                  onStartShouldSetResponder={() => {
                    this.setState({ modalVisible: false ,choose1:false})
                  }}>
                  <Text style={Styles.text} >الغـــــاء </Text>
                </View>
              </View>
            </Modal>

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
              }
            }}

          />

          <Modal transparent={true}
            animationType="fade"
            animationOut='slideOutDown'
            visible={this.state.choose} >
            <View style={Styles.model} >
              <View style={{flexDirection:"row-reverse",marginTop:hp('3%')}}>
                <View style={Styles.clientcol} 
                onStartShouldSetResponder={() => {
                    this.setState({ choose:false})
                    this.downloadPdf('http://188.225.184.107:7071/api/Customers/ExportPDF?type=%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1','العملاء.pdf')
                  }}>
                <Icon type="FontAwesome" name="group" style={{fontSize:50,color:"#14789d",marginLeft: wp('1%')}} />
                <Text style={Styles.text4}>العـمــلاء</Text>
                </View>

                <View style={Styles.receiptcol}
                onStartShouldSetResponder={() => {
                    this.setState({ choose:false})
                    this.downloadPdf('http://188.225.184.107:7071/api/Customers/ExportPDF?type=%D9%82%D8%A7%D8%A6%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%84%D9%8A%D9%85','قائمة التسليم.pdf')
                  }}>
                <Icon type="FontAwesome5" name="receipt" style={{fontSize:50,color:"#14789d",marginLeft: wp('1%')}} />
          <Text style={Styles.text3}>  قائمة   {'\n'}التسليم</Text>
                </View>

              </View>
              <View style={Styles.title1}
                  onStartShouldSetResponder={() => {
                    this.setState({ choose:false,modalVisible: true })
                  }}>
                  <Text style={Styles.text} >الغـــــاء </Text>
                </View>
            </View>
          </Modal>


          <Modal transparent={true}
            animationType="fade"
            animationOut='slideOutDown'
            visible={this.state.choose1} >
            <View style={Styles.model} >
              <View style={{flexDirection:"row-reverse",marginTop:hp('3%')}}>
                <View style={Styles.clientcol} 
                onStartShouldSetResponder={() => {
                    this.setState({ choose1:false})
                    this.downloadPdf('http://188.225.184.107:7071/api/Customers/ExportExcel?type=%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1','العملاء.xlsx')
                  }}>
                <Icon type="FontAwesome" name="group" style={{fontSize:50,color:"#14789d",marginLeft: wp('1%')}} />
                <Text style={Styles.text4}>العـمــلاء</Text>
                </View>

                <View style={Styles.receiptcol}
                onStartShouldSetResponder={() => {
                    this.setState({ choose1:false})
                    this.downloadPdf('http://188.225.184.107:7071/api/Customers/ExportExcel?type=%D9%82%D8%A7%D8%A6%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%84%D9%8A%D9%85','قائمة التسليم.xlsx')
                  }}>
                <Icon type="FontAwesome5" name="receipt" style={{fontSize:50,color:"#14789d",marginLeft: wp('1%')}} />
          <Text style={Styles.text3}>  قائمة   {'\n'}التسليم</Text>
                </View>

              </View>
              <View style={Styles.title1}
                  onStartShouldSetResponder={() => {
                    this.setState({ choose:false,modalVisible: true })
                  }}>
                  <Text style={Styles.text} >الغـــــاء </Text>
                </View>
            </View>
          </Modal>

        </ImageBackground>

      </View>
    );

  }


}


const mapStateToProps = state => {
  return {
    user: state.client_name.user,
    pdf: state.Download_Pdf_Reducer.pdf
  }
}

export default connect(mapStateToProps, { Get_all_clients, Download_Pdf })(withNavigation(Client));
/**async download_songs() {
    const { config, fs } = RNFetchBlob;
    const downloads = fs.dirs.DownloadDir;

    try {

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Yaboos Music',
          message:
            'App needs access to your Files... ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              this.setState({
                    message:'Start Download...',
                    alert:true
                  })


        RNFetchBlob.config({
          fileCache: true,
          appendExt: 'mp3',
          addAndroidDownloads: {
            useDownloadManager: true,

            notification: true,
            title: 'Yaboos' + "-" + this.state.text,
            path: downloads + '/' + `${this.state.text}` + '.mp3',
            //      path: RNFetchBlob.fs.dirs.dir.DocumentDir + `${this.state.text}`, // Android platform
            description: 'Downloading the file',
          },
        })
          .fetch('GET', this.state.song_url)
          .then(res => {
            // alert('res', res);
            // alert('The file is save to ', res.path());
          });

      }
    } catch (err) {
      //  alert(err);
    }

  } */