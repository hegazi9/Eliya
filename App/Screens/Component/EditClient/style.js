import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

        row3:
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





        back:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2.5%'), height: 25, fontFamily: 'ge-ss-two-medium'
        },
        detailsRow: {
            flexDirection: 'row-reverse', marginLeft: wp('5%'),
            marginTop: wp('2%'),
        },
        txt: {
            color: 'white',
            fontSize: hp('2.5%'), height: 25, fontFamily: 'ge-ss-two-medium'

        },

        title:
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
        title1:
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

        text:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 100, fontFamily: 'ge-ss-two-medium',
            justifyContent: 'center', textAlign: 'center',
            marginTop: hp('.5%'), marginLeft: hp('1%')

        },
        details:
        {
            marginTop: hp('4%'), flexDirection: 'column'
            , borderColor: 'white', width: wp('100%'), backgroundColor: 'white',
            borderRadius: hp('1%'), height: hp('80%'),
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,flex: 1,
            justifyContent: "space-around"
        },
        txt1:
        {
            alignSelf: "center", color: 'white',
            fontSize: hp('2%'), height: 25, fontFamily: 'ge-ss-two-medium',
            justifyContent: 'center', textAlign: 'center', width: wp('60%'),
            marginTop: hp('.5%'),
            color: '#14789d'

        },

        update_view:
        {
            flexDirection: 'row',
            borderColor: 'white', width: wp('50%'), backgroundColor: '#14789d',
            borderRadius: hp('2%'), height: hp('5%'), margin: wp('1%'), marginTop: hp('-3%'),
            shadowColor: '#000', fontFamily: 'ge-ss-two-medium',
            shadowOffset: {
                width: 0,
                height: 2, marginLeft: hp('1%'),
                alignItems: 'center', justifyContent: 'center',
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },

        update_txt:
        {
            fontFamily: 'ge-ss-two-medium', color: 'white', fontSize: hp('2%'), marginTop: hp('1%')
            , marginLeft: wp('8%')
        },

        updateicon:
        {
            width: 25, height: 25, marginLeft: wp('6%'), marginTop: hp('.5%'),
        },

        delete:
        {
            width: 25, height: 30, color: '#14789d', marginLeft: wp('5%'), marginTop: hp('2%')

        },

        txticon:
        {
            fontFamily: 'ge-ss-two-medium', color: '#14789d', fontSize: hp('1.4%') , marginLeft : wp('3%')
        },
        username:
        {
            color: '#14789d', marginLeft: wp('15%'),
            marginTop: wp('2.75%'), width: wp('70%'),
            fontSize: hp('2%'), height: 30, height: 30, fontFamily: 'ge-ss-two-medium'
        },
        rowName: {
            flexDirection: 'row'

        },

        text_line :
        {
            borderBottomWidth :  .5  , padding : hp('1%') , borderColor : '#14789d' , height : hp('5%')
        , fontSize : hp('2%') , width : wp('65%') , color : '#14789d' , textAlign : 'center' ,
        borderRadius : hp('3%') ,fontFamily: 'ge-ss-two-medium', 
        textAlign:'center',justifyContent: 'center',
        marginTop:wp('2%')
        } ,
        text_line1 :
        {
            borderBottomWidth :  .5  , padding : hp('1%') , borderColor : '#14789d' , height : hp('5%')
        , fontSize : hp('2%') , width : wp('65%') , color : '#14789d' , textAlign : 'center' ,
        borderRadius : hp('3%') ,
        textAlign:'center',justifyContent: 'center',
        marginTop:wp('2%')
        } ,

        city_model  : 
        {
         padding : hp('.5%') , borderColor : 'white' , width : wp('50%') , backgroundColor : '#d1d3d4' , 
          borderRadius : hp('2%')    ,marginLeft:wp('25%'),marginBottom:hp('1%'),
          shadowColor: '#000', marginTop : hp('37%') ,fontFamily : 'ge-ss-two-medium',height:hp('60%'),
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowRadius: 5,
          shadowOpacity: 1.0
      
        },
    
        city_name : 
    {
         color : '#0b485b',  marginTop : hp('1.5%'), fontFamily : 'ge-ss-two-medium' ,
        fontSize :  hp('2%') , height : 25 , textAlign:'center'
    },
    
    close : 
        {
            width : 25 , height : 25 , marginTop :  hp('1.5%') ,marginLeft :  wp('5%') 
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
    
        model_name : 
    {
         color : '#0b485b',  marginTop : hp('1.5%'), fontFamily : 'ge-ss-two-medium' ,
        fontSize :  hp('2%') , height : 25 , textAlign:'center'
    },
    



    };