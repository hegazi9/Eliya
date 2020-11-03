import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native';

export default
    {

        container:
        {
            flex: 1,

        },
        BackImg:
        {
            width: wp('100%'),
            height: hp('100%'),
            backgroundColor: '#14789d'
        },

        row3: Platform.OS == "ios" ?
        {
            flexDirection: 'row', marginLeft: wp('5%'), marginTop: hp('6%') , 
            width : 100 , zIndex : 1

        }:
        {
            flexDirection: 'row', marginLeft: wp('5%'), marginTop: wp('6%')
        },


        clientspng:
        {
            width: 70, height: 70,


        },
        col:
        {
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            , marginTop: hp('-5')

        },
        backicon:
        {
            width: 30,
            height: 30,
            marginTop: 5,
        },





        back: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2.5%'), height: 30, marginLeft: wp('1%'),
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2.5%'), height: 25, fontFamily: 'ge-ss-two-medium'
        },
        detailsRow: {
            flexDirection: 'row-reverse', marginLeft: wp('5%'),
            marginTop: wp('2%'),
        },
        txt: Platform.OS == "ios" ?
        {
            color: 'white',
            fontSize: hp('2.5%'), height: 25,
        }:
         {
            color: 'white',
            fontSize: hp('2.5%'), height: 25, fontFamily: 'ge-ss-two-medium'

        },

        title: Platform.OS == "ios" ?
        {
            padding: hp('1%'), borderColor: 'white', width: wp('25%'), backgroundColor: '#14789d',
            borderRadius: hp('5%'), height: hp('6%'), margin: wp('1%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%')
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }:
        {

            padding: hp('1%'), borderColor: 'white', width: wp('25%'), backgroundColor: '#14789d',
            borderRadius: hp('5%'), height: hp('6%'), margin: wp('1%'),
            shadowColor: '#000', fontFamily: 'ge-ss-two-medium',
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%')
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },
        title1: Platform.OS == "ios" ?
        {
            padding: hp('-.5%'), borderColor: 'white', width: wp('25%'), backgroundColor: '#14789d',
            borderRadius: hp('5%'), height: hp('6%'), margin: wp('1%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%')
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }:
        {

            padding: hp('-.5%'), borderColor: 'white', width: wp('25%'), backgroundColor: '#14789d',
            borderRadius: hp('5%'), height: hp('6%'), margin: wp('1%'),
            shadowColor: '#000', fontFamily: 'ge-ss-two-medium',
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%')
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },

        text: Platform.OS == "ios" ?
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 100, 
            justifyContent: 'center', textAlign: 'center',
            marginTop: hp('.5%'), marginLeft: hp('1%')
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 100, fontFamily: 'ge-ss-two-medium',
            justifyContent: 'center', textAlign: 'center',
            marginTop: hp('.5%'), marginLeft: hp('1%')

        },
        details:
        {
            marginTop: hp('5%'), flexDirection: 'column'
            , borderColor: 'white', width: wp('100%'), backgroundColor: 'white',
            borderRadius: hp('1%'), height: hp('100%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },
        txt1: Platform.OS == "ios" ?
        {
            
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 25, 
            justifyContent: 'center', textAlign: 'center', width: wp('60%'),
            marginTop: hp('.5%'),
            color: '#14789d'
        }:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 25, fontFamily: 'ge-ss-two-medium',
            justifyContent: 'center', textAlign: 'center', width: wp('60%'),
            marginTop: hp('.5%'),
            color: '#14789d'

        },

        update_view: Platform.OS == "ios"?
        {
            flexDirection: 'row',
            borderColor: 'white', width: wp('50%'), backgroundColor: '#14789d',
            borderRadius: hp('2%'), height: hp('5%'), margin: wp('1%'), marginTop: hp('4%'),
            shadowColor: '#000' ,
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%'),
                alignItems: 'center', justifyContent: 'center',
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }:
        {
            flexDirection: 'row',
            borderColor: 'white', width: wp('50%'), backgroundColor: '#14789d',
            borderRadius: hp('2%'), height: hp('5%'), margin: wp('1%'), marginTop: hp('4%'),
            shadowColor: '#000', fontFamily: 'ge-ss-two-medium',
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%'),
                alignItems: 'center', justifyContent: 'center',
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },

        update_txt: Platform.OS == "ios" ?
        {
             color: 'white', fontSize: hp('2%'), marginTop: hp('1%')
            , marginLeft: wp('8%')
        }:
        {
            fontFamily: 'ge-ss-two-medium', color: 'white', fontSize: hp('2%'), marginTop: hp('1%')
            , marginLeft: wp('8%')
        },

        updateicon:
        {
            width: 25, height: 25, marginLeft: wp('6%'), marginTop: hp('.5%')
        },

        delete:
        {
            width: 25, height: 30, color: '#14789d', marginLeft: wp('5%'), marginTop: hp('2%')

        },

        txticon: Platform.OS == "ios" ?
        {
           color: '#14789d', fontSize: hp('1.4%') , marginLeft : wp('4%')

        }:
        {
            fontFamily: 'ge-ss-two-medium', color: '#14789d', fontSize: hp('1.4%') , marginLeft : wp('3%')
        },
        username: Platform.OS == "ios" ?
        {
            color: '#14789d', marginLeft: wp('10%'), textAlign : 'right' , 
            marginTop: wp('5%'), width: wp('70%'),
            fontSize: hp('2%'), height: 30, height: 30,
        }:
        {
            color: '#14789d', marginLeft: wp('10%'),
            marginTop: wp('5%'), width: wp('70%'),
            fontSize: hp('2%'), height: 30, height: 30, fontFamily: 'ge-ss-two-medium'
        },
        rowName: {
            flexDirection: 'row'

        },

        text_line1 :
        {
            borderBottomWidth :  .5  , padding : hp('1%') , borderColor : '#14789d' , height : hp('5%')
        , fontSize : hp('2%') , width : wp('65%') , color : '#14789d' , textAlign : 'center' ,
        borderRadius : hp('3%') ,
        textAlign:'center',justifyContent: 'center',
        marginTop:wp('2%')
        },
        text_line : Platform.OS == "ios" ?
        {
            borderBottomWidth :  .5  , padding : hp('1%') , borderColor : '#14789d' , height : hp('5%')
            , fontSize : hp('2%') , width : wp('65%') , color : '#14789d' , textAlign : 'center' ,
            borderRadius : hp('3%') ,
            textAlign:'center',justifyContent: 'center',
            marginTop:wp('2%')
        }:
        {
            borderBottomWidth :  .5  , padding : hp('1%') , borderColor : '#14789d' , height : hp('5%')
        , fontSize : hp('2%') , width : wp('65%') , color : '#14789d' , textAlign : 'center' ,
        borderRadius : hp('3%') ,fontFamily: 'ge-ss-two-medium', 
        textAlign:'center',justifyContent: 'center',
        marginTop:wp('2%')
        } 


    };