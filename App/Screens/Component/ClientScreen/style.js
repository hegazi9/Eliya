import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform  } from 'react-native' ;

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


        row: Platform.OS == "ios" ?
        {
            flexDirection: 'row', marginLeft: wp('40%'), marginTop: wp('8%'), marginLeft: wp('4%'),
        }:
        {
            flexDirection: 'row', marginLeft: wp('40%'), marginTop: wp('4%'), marginLeft: wp('4%'),
        },
        back: Platform.OS == "ios" ?
         {
            alignSelf: "center", color: 'white', 
            fontSize: hp('2.5%'), height: 35, marginLeft: wp('2%')
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2.5%'), height: 25,
            fontFamily: 'ge-ss-two-medium'
        },
        rate: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('3%'), height: 35,
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('3%'), height: 29, fontFamily: 'ge-ss-two-medium'
        },
        txt: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginTop: hp('1%'),
            fontSize: hp('2.5%'), height: 29,
        }:
        {
            alignSelf: "center", color: 'white', marginTop: hp('1%'),
            fontSize: hp('2.5%'), height: 29, fontFamily: 'ge-ss-two-medium'
        },
     

        txt_name: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white', marginLeft: wp('1%'),
            fontSize: hp('3%'), height: 25, color: '#14789d', height: 30,
        }:
        {
            alignSelf: "center", color: 'white', marginLeft: wp('1%'),
            fontSize: hp('3%'), height: 25, color: '#14789d', height: 30, fontFamily: 'ge-ss-two-medium'
        },

        username: Platform.OS == "ios" ?
        {
            color: '#14789d', marginLeft: wp('40%'),
            fontSize: hp('3%'), height: 30, height: 30,
        }:
        {
            color: '#14789d', marginLeft: wp('40%'),
            fontSize: hp('3%'), height: 30, height: 30,
            fontFamily: 'ge-ss-two-medium'
        },

        rate_view:
        {
            flexDirection: 'column',
            marginTop: hp('3')
        },

        stars:
        {
            flexDirection: 'row',

            justifyContent: 'center', alignItems: 'center' , marginTop : hp('1%')


        },

        city:
        {
            marginLeft: wp('3%'), marginTop: hp('2%')
        },
        logout:
        {
            width: 30, height: 30, color: 'white', marginTop: hp('1%')

        },
        right:
        {
            width: 30, height: 30, color: 'white', marginTop: hp('0%')

        },
        delete:
        {
            width: 30, height: 30, color: '#14789d', marginLeft: wp('5%')

        },

        update:
        {
            width: 30, height: 30, color: '#14789d', marginLeft: wp('3%')

        },

        space:
        {
            width: wp('12%'),

        },

        rowline:
        {
            flexDirection: 'row', marginTop: wp('7.5%'), justifyContent: 'center'
        },

        button:
        {
            marginTop: hp('2%'), flexDirection: 'column'
            , borderColor: 'white', width: wp('100%'), backgroundColor: 'white',
            borderRadius: hp('1%'), height: hp('60%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },

        title:
        {

            padding: hp('.5%'), borderColor: 'white', width: wp('30%'), backgroundColor: '#14789d',
            borderRadius: hp('5%'), height: hp('5%'), margin: wp('1%'),
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
            alignSelf: "center", color: 'white',
            fontSize: hp('2.5%'), height: 25, 
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2.5%'), height: 25, fontFamily: 'ge-ss-two-medium'
        },

        center:
        {
            justifyContent: 'center', alignItems: 'center', marginTop: hp('5%')
        },

        search:
        {
            width: 25, height: 25, color: 'white', marginLeft: wp('2%')
        },
        input: Platform.OS == "ios" ?
        {
            textAlign: 'center', fontSize: hp('2.5%'), width: wp('60%'), color: 'white',
            marginLeft: hp('2%'), height: hp('6%'),
        }:
        {
            textAlign: 'center', fontSize: hp('2.5%'), width: wp('60%'), color: 'white',
            marginLeft: hp('2%'), height: hp('6%'), fontFamily: 'ge-ss-two-medium'
        },

        small_input: Platform.OS == "ios" ?
        {
            borderWidth: 1.5, padding: hp('1.5%'), borderColor: '#14789d', height: hp('5%')
            , fontSize: hp('2%'), width: wp('30%'), color: '#14789d', textAlign: 'center',
            borderRadius: hp('1%'), marginLeft: wp('2%'),
        }:
        {
            borderWidth: 1.5, padding: hp('1.5%'), borderColor: '#14789d', height: hp('5%')
            , fontSize: hp('2%'), width: wp('30%'), color: '#14789d', textAlign: 'center',
            borderRadius: hp('1%'), marginLeft: wp('2%'), fontFamily: 'ge-ss-two-medium'


        },

        View_search:
        {
            justifyContent: 'center', alignItems: 'center',
            width: wp('75%'), borderRadius: hp('5%'), flexDirection: 'row', marginTop: hp('-3%'),
            height: hp('5%'), marginLeft: hp('1%'), borderColor: 'white', borderWidth: 1
        },

        first_line:
        {
            flexDirection: 'row', marginTop: hp('2%'),
        },
        line:
        {
            flexDirection: 'row', marginTop: hp('1%')
        },
        icons:
        {
            flexDirection: 'row'
        },
        second_line:
        {
            flexDirection: 'row', marginTop: 20
        },
        clientspng:
        {
            width: 70, height: 70, marginTop: -5


        },
        col: Platform.OS == "ios" ?
        {
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,
            marginTop: hp('2')
        }:
        {
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            , marginTop: hp('-5')

        },
        addicon:
        {
            width: 30, height: 30,
            marginLeft: -5,
            marginTop: hp('1%'),


        },
        arrowicon:
        {
            width: 20, height: 20,
            marginTop: hp('1.7%'),
            marginLeft: 15
        },
        backicon:
        {
            width: 30,
            height: 30,
            marginTop: 5,
        },
        searchicon:
        {
            width: 28,
            height: 28,
            marginLeft: 5
        },

        button1: Platform.OS == "ios" ?
        {
            padding: hp('1%'), borderColor: 'white', width: wp('60%'), backgroundColor: '#d1d3d4',
            margin: hp('1.5%'), height: hp('7%'),
            shadowColor: '#000', marginTop: hp('2%'),  borderBottomLeftRadius: hp('10%'),
            borderTopRightRadius: hp('10%'),

            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }:
        {

            padding: hp('1%'), borderColor: 'white', width: wp('60%'), backgroundColor: '#d1d3d4',
            margin: hp('1.5%'), height: hp('7%'),
            shadowColor: '#000', marginTop: hp('2%'), fontFamily: 'ge-ss-two-medium', borderBottomLeftRadius: hp('10%'),
            borderTopRightRadius: hp('10%'),

            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },

        text2: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: '#14789d',
            fontSize: hp('2.5%'), height: 35, marginTop: hp('.5%')
        }:
        {
            alignSelf: "center", color: '#14789d', fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2.5%'), height: 35, marginTop: hp('.5%')
        },

        model  :  Platform.OS == "ios" ?
        {
            padding : hp('.5%') , borderColor : 'white' , width : wp('100%') , backgroundColor : '#d1d3d4' , 
            margin : hp('1.5%'), borderTopLeftRadius : hp('5%')   , borderTopRightRadius : hp('5%')  ,height : hp('35%')  ,marginLeft : wp('0%') ,
            shadowColor: '#000', marginTop : hp('65%') ,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }:
        {
         padding : hp('.5%') , borderColor : 'white' , width : wp('100%') , backgroundColor : '#d1d3d4' , 
          margin : hp('1.5%'), borderTopLeftRadius : hp('5%')   , borderTopRightRadius : hp('5%')  ,height : hp('35%')  ,marginLeft : wp('0%') ,
          shadowColor: '#000', marginTop : hp('65%') ,fontFamily : 'ge-ss-two-medium',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowRadius: 5,
          shadowOpacity: 1.0
      
        },

        row5:
    {
        flexDirection:'row',
        marginTop:hp('5%'),
        marginLeft:wp('20%')
    },
    text : Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white', 
            fontSize :  hp('3%') , height : 25 , 
            justifyContent:'center',textAlign:'center',
            marginTop:hp('.7%'),
    }:
    {
        alignSelf : "center" , color : 'white', 
            fontSize :  hp('3%') , height : 25 , fontFamily: 'ge-ss-two-medium',
            justifyContent:'center',textAlign:'center',
            marginTop:hp('.7%'),

    },
    title : Platform.OS == "ios" ?
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('35%') , backgroundColor : '#14789d' , 
        borderRadius : hp('10%')   , height : hp('7%')  , margin : wp('1%'),
         shadowColor: '#000',marginLeft : wp('32.5%'),marginTop : hp('4%'),
         shadowOffset: {
           width: 0,
           height: 2,marginLeft : hp('1%')
         },
         shadowRadius: 5,
         shadowOpacity: 1.0
    }:
    {

     padding : hp('.5%') , borderColor : 'white' , width : wp('35%') , backgroundColor : '#14789d' , 
     borderRadius : hp('10%')   , height : hp('7%')  , margin : wp('1%'),
      shadowColor: '#000',fontFamily: 'ge-ss-two-medium',marginLeft : wp('32.5%'),marginTop : hp('4%'),
      shadowOffset: {
        width: 0,
        height: 2,marginLeft : hp('1%')
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    },
   
        text3: Platform.OS == "ios" ?
        {
            color: '#14789d', 
            fontSize: hp('2.5%'), height: 45, marginTop: hp('2%'),
            justifyContent: 'center',
            alignItems: 'center',
        }:
        {
           color: '#14789d', fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2.5%'), height: 45, marginTop: hp('2%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        text4: Platform.OS == "ios" ?
        {
            color: '#14789d',
            fontSize: hp('2.5%'), height: 45, marginTop: hp('3.5%'),
        }:
        {
           color: '#14789d', fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2.5%'), height: 45, marginTop: hp('3.5%'),
        
        },
        clientcol:{
            marginRight: wp('25%'),
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp('1%'),
        },
        receiptcol:{
            marginRight: wp('15%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        title1 : Platform.OS == "ios" ?
        {
            padding : hp('.5%') , borderColor : 'white' , width : wp('35%') , backgroundColor : '#14789d' , 
            borderRadius : hp('10%')   , height : hp('7%')  , margin : wp('1%'),
             shadowColor: '#000',marginLeft : wp('32.5%'),marginTop : hp('2%'),
             shadowOffset: {
               width: 0,
               height: 2,marginLeft : hp('1%')
             },
             shadowRadius: 5,
             shadowOpacity: 1.0
        }:
        {
    
         padding : hp('.5%') , borderColor : 'white' , width : wp('35%') , backgroundColor : '#14789d' , 
         borderRadius : hp('10%')   , height : hp('7%')  , margin : wp('1%'),
          shadowColor: '#000',fontFamily: 'ge-ss-two-medium',marginLeft : wp('32.5%'),marginTop : hp('2%'),
          shadowOffset: {
            width: 0,
            height: 2,marginLeft : hp('1%')
          },
          shadowRadius: 5,
          shadowOpacity: 1.0
        },

    };