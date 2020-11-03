import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native' ;

export default
    {

        container:
        {
            flex: 1,

        },
        BackImg:
        {
            width: wp('100%'),
            height: hp('100%')
        },

        View:
        {
            flexDirection: 'column', alignItems: 'center', marginTop: hp('2%')
        },

        row: Platform.OS == "ios" ?
        {
            flexDirection: 'row', marginLeft: wp('40%'), marginTop: wp('8%'), marginLeft: wp('4%'),height:50,
        }:
        {
            flexDirection: 'row', marginLeft: wp('40%'), marginTop: wp('4%'), marginLeft: wp('4%'),height:50,
        },
        back: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginLeft: wp('2%') ,
            fontSize: hp('2.5%'), height: 25 , 
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2.5%'), height: 25
        },
        right:
        {
            width: 30, height: 30, color: 'white', marginTop: hp('0%')

        },
      

        scroll:
        {
            height: hp('30%'), 
        },


        close:
        {
            width: 25, height: 25, marginTop: hp('1.5%'), marginLeft: wp('2%'), 
        },
        model  : 
        {
         padding : hp('.5%') , borderColor : 'white' , width : wp('100%') , backgroundColor : '#d1d3d4' , borderRadius : hp('2%')   , height : hp('28%')  ,
          shadowColor: '#000', marginTop : hp('69%') ,fontFamily : 'ge-ss-two-medium',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowRadius: 5,
          shadowOpacity: 1.0
      
        },
        city_name: Platform.OS == "ios" ?
        {
            color: '#0b485b', marginTop: hp('1.5%'), 
            fontSize: hp('2%'), height: 25, marginLeft: wp('20%'), alignItems: 'center', width: 100
        }:
        {
            color: '#0b485b', marginTop: hp('1.5%'), fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2%'), height: 25, marginLeft: wp('20%'), alignItems: 'center', width: 100
        },

        title: Platform.OS == "ios" ?
        
            {
                alignSelf: "center", color: 'white', 
                fontSize: hp('3%'), height: 25, marginLeft: wp('5%'), alignItems: 'center', marginTop : hp('-4%')
            }:
            {
                alignSelf: "center", color: 'white', fontFamily: 'ge-ss-two-medium', marginTop : hp('-4%')
               , fontSize: hp('3%'), height: 25, marginLeft: wp('5%'), alignItems: 'center',  height : hp('5%')
            },
        
        client_model: Platform.OS == "ios" ?
        {
            padding: hp('.5%'), borderColor: 'white', width: wp('60%'), backgroundColor: '#d1d3d4',
            margin: hp('1.5%'), borderRadius: hp('2%'), height: hp('25%'), marginLeft: wp('30%'),
            shadowColor: '#000', marginTop: hp('30%'), 
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }:
        {
            padding: hp('.5%'), borderColor: 'white', width: wp('60%'), backgroundColor: '#d1d3d4',
            margin: hp('1.5%'), borderRadius: hp('2%'), height: hp('25%'), marginLeft: wp('30%'),
            shadowColor: '#000', marginTop: hp('30%'), fontFamily: 'ge-ss-two-medium',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0

        },

        client_name: Platform.OS == "ios" ?
        {
            alignItems: "center", color: '#0b485b', marginTop: hp('1.5%'),
            fontSize: hp('2%'), height: 25, marginLeft: wp('5%'), alignItems: 'center', width: 160
        }:
        {
            alignItems : "center", color: '#0b485b', marginTop: hp('1.5%'), fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2%'), height: 25, marginLeft: wp('15%'), alignItems: 'center', width: 160
        },

        name_test1 : Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginTop: hp('1.5%'),
            fontSize: hp('2%'), height: 25, marginLeft: wp('5%'), alignItems: 'center', width: 160
        }:
        {
            alignSelf: "center", color: 'white', marginTop: hp('1.5%'), fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2%'), height: 25, marginLeft: wp('30%'), alignItems: 'center', width: 160
        },

        name_test : Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginTop: hp('1.5%'),
            fontSize: hp('2%'), height: 25, marginRight: wp('15%'), alignItems: 'center', width: 160
        }:
        {
            alignSelf: "center", color: 'white', marginTop: hp('1.5%'), fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2%'), height: 25, marginRight: wp('25%'), alignItems: 'center', width: 160
        },

        star_icon:
        {
            color: 'white',
        },

        stars:
        {
            flexDirection: 'row',
            justifyContent: 'center', alignItems: 'center',
            marginTop: hp('1%'),
            color: 'white',
        },

        rate_txt:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('3%'), height: 29
        },
        data_txt: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('3%'), height: 35, marginTop: hp('2%'),
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('3%'), height: 35, marginTop: hp('2%'), fontFamily: 'ge-ss-two-medium'
        },
        logout:
        {
            width: 30, height: 30, color: 'white', marginTop: hp('1%')

        },
        center:
        {
            justifyContent: 'center', alignItems: 'center', marginTop: hp('1%'),
            marginLeft: wp('4%')
        },

        input: Platform.OS == "ios" ?
        {
            borderWidth: 1.5, padding: hp('1.5%'), borderColor: 'white'
            , borderRadius: hp('2%'), marginTop: hp('2.5%'), height: hp('7%'),marginLeft: hp('3%')
            , fontSize: hp('2%'), width: wp('80%'), color: 'white', textAlign: 'center',
              justifyContent:'center' 
        }:
        {
            borderWidth: 1.5, padding: hp('1.5%'), borderColor: 'white'
            , borderRadius: hp('2%'), marginTop: hp('2.5%'), height: hp('7%'),marginLeft: hp('3%')
            , fontSize: hp('2%'), width: wp('80%'), color: 'white', textAlign: 'center',
            justifyContent:'center' 
        },

        view_btn:
        {
            flexDirection: 'row', alignItems: 'center', marginTop: hp('5%')
        },

        button:
        {

            padding: hp('.5%'), borderColor: 'white', width: wp('25%'), backgroundColor: 'white',
            margin: hp('1.5%'), borderRadius: hp('5%'), height: hp('5%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },

        text: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: '#14789d', marginTop: hp('.5%'),
            fontSize: hp('2.5%'), height: 25, 
        }:
        {
            alignSelf: "center", color: '#14789d', fontFamily: 'ge-ss-two-medium', marginTop: hp('.5%'),
            fontSize: hp('2.5%'), height: 25, 
        },
        clientspng:
        {
            width: 70, height: 70, marginTop: -5


        },
        col:
        {
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            , marginTop: hp('-5')

        },
        row:
        {
            flexDirection: 'row', marginLeft: wp('40%'), marginTop: wp('4%'), marginLeft: wp('4%'),
        },
      
        backicon:
        {
            width: 30,
            height: 30,
            marginTop: 5,
        },
        rate: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('3%'), height: 29,
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('3%'), height: 29, fontFamily: 'ge-ss-two-medium'
        },
        picker:
        {
            marginLeft: hp('1%'), height: hp('6%'), width: wp('90%'), marginTop: hp('3%'),
        },
        first_line:
        {
            flexDirection: 'row', marginTop: hp('2%'),
        },
        menu_txt: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginTop: hp('1%'),
            fontSize: hp('2%'), height: 29,
        }:
        {
            alignSelf: "center", color: 'white', marginTop: hp('1%'),
            fontSize: hp('2%'), height: 29, fontFamily: 'ge-ss-two-medium'
        },

        menu_txt2: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginTop: hp('-1%'),
            fontSize: hp('2%'), height: 29,
        }:
        {
            alignSelf: "center", color: 'white', marginTop: hp('-1%'),
            fontSize: hp('2%'), height: 29, fontFamily: 'ge-ss-two-medium'
        },
        menu_txt3: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginTop: hp('2.5%'), marginLeft: hp('1%'),
            fontSize: hp('2%'), height: 29, 
        }:
        {
            alignSelf: "center", color: 'white', marginTop: hp('2.5%'), marginLeft: hp('1%'),
            fontSize: hp('2%'), height: 29, fontFamily: 'ge-ss-two-medium'
        },

        space:
        {
            width: wp('10.5%'),

        },
        right:
        {
            width: 30, height: 30, color: 'white', marginTop: hp('0%')

        },
        icons:
        {
            flexDirection: 'row',
            marginLeft: wp('3%')
        },


        detailsRow: {
        
            marginTop: wp('1%'),  width : wp('55%') , 
        },
   

        newtitle:
        {

            padding: hp('1%'), borderColor: 'white', 
            borderRadius: hp('5%'), height: hp('6%'), margin: wp('1%'),
            shadowColor: '#000', fontFamily: 'ge-ss-two-medium', 
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%')
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },
       
        newtext:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 100, fontFamily: 'ge-ss-two-medium',
            justifyContent: 'center', textAlign: 'center',
            marginTop: hp('.5%'), marginLeft: hp('1%')

        },

        newtext1:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 100, fontFamily: 'ge-ss-two-medium',
            justifyContent: 'center', textAlign: 'center',
            marginTop: hp('-.5%'), marginLeft: hp('1%')

        },

        text_line :
        {
            borderBottomWidth :  .5  , padding : hp('1%') , borderColor : 'white' , height : hp('5%')
        , fontSize : hp('2%')  , color : 'white' , textAlign : 'center' ,
        borderRadius : hp('3%') ,fontFamily: 'ge-ss-two-medium', 
        textAlign:'center',justifyContent: 'center',
        marginTop:wp('2%')
        } ,

      



    };