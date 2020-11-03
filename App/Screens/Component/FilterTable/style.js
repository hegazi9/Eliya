import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform } from 'react-native'

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
            backgroundColor:'#14789d'
        },

        row3: Platform.OS == "ios" ?
        {
            flexDirection: 'row', marginLeft: wp('5%'), marginTop: hp('6%')

        }:
        {
            flexDirection: 'row', marginLeft: wp('5%'), marginTop: wp('6%')
        },
        row4:
        {
            flexDirection: 'row', marginLeft: wp('75%'), marginTop: hp('-4.5%')
        },
        row:
        {
            flexDirection: 'row', marginLeft: wp('40%'), marginTop: wp('4%'), marginLeft: wp('4%'),
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

        line:
        {
            width:wp('100%'),
            height:hp('1.5%'),
            color:'black',
            borderWidth:4,
            marginTop:hp('80%'),
            backgroundColor:'black'

            
        },


    
    back: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white',
        fontSize :  hp('2.5%') , height : 30,
    }:
    {
        alignSelf : "center" , color : 'white',
            fontSize :  hp('2.5%') , height : 25,fontFamily: 'ge-ss-two-medium'
    },
    rate: 
    {
        alignSelf : "center" , color : 'white',
            fontSize :  hp('3%') , height : 29
    },

    txticon: Platform.OS == "ios" ?
    {
        color : '#14789d',fontSize :  hp('1.4%') , textAlign : 'right'

    }:
    {
        fontFamily: 'ge-ss-two-medium', color : '#14789d',fontSize :  hp('1.4%')
    },

  
    txt: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white'  ,marginTop : hp('1%') ,
        fontSize :  hp('2%') , height : 29,
    }:
    {
        alignSelf : "center" , color : 'white'  ,marginTop : hp('1%') ,
            fontSize :  hp('2%') , height : 29,fontFamily: 'ge-ss-two-medium'
    },
    menu_txt: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white'  ,marginTop : hp('1%') ,
        fontSize :  hp('2%') , height : 29 ,
    }:
    {
        alignSelf : "center" , color : 'white'  ,marginTop : hp('1%') ,
            fontSize :  hp('2%') , height : 29 ,fontFamily: 'ge-ss-two-medium'
    },

    menu_txt2: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white'  ,marginTop : hp('-1%') ,
        fontSize :  hp('2%') , height : 29 ,
    }:
    {
        alignSelf : "center" , color : 'white'  ,marginTop : hp('-1%') ,
            fontSize :  hp('2%') , height : 29 ,fontFamily: 'ge-ss-two-medium'
    },

    txt_name :  Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white',  marginLeft : wp('1%'),
        fontSize :  hp('2%') , height : 25 , color : '#14789d' , height : 30,
    }:
    {
        alignSelf : "center" , color : 'white',  marginLeft : wp('1%'),
        fontSize :  hp('2%') , height : 25 , color : '#14789d' , height : 30,fontFamily: 'ge-ss-two-medium'
    },

    username : Platform.OS == "ios" ?
    {
        color : '#14789d',  marginLeft : wp('10%'),
        marginTop : wp('3%'),width: wp('60%'),
        fontSize :  hp('2%') , height : 30 , height : 30,
    }:
    {
        color : '#14789d',  marginLeft : wp('10%'),
        marginTop : wp('3%'),width: wp('60%'),
        fontSize :  hp('2%') , height : 30 , height : 30,fontFamily: 'ge-ss-two-medium'
    },

    delete : 
    {
             width : 25 , height : 30 , color : '#14789d' , marginLeft : wp('5%'),marginTop : hp('-.5%')
        
    }, 

    update : 
    {
        width : 25 , height : 25 ,marginLeft : wp('5%'),marginTop : hp('0%')
        
    }, 
   
    space : 
    {
             width : wp('12%') , 
        
    }, 

    button :
    {
     marginTop : hp('2%') ,flexDirection : 'column' 
    , borderColor : 'white' , width : wp('95%') , backgroundColor : 'white' , 
       borderRadius : hp('1%')   , height : hp('8%')  ,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    } , 
    
    title : Platform.OS == "ios" ?
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('30%') , backgroundColor : '#14789d' , 
     borderRadius : hp('5%')   , height : hp('5%')  , margin : wp('1%'),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,marginLeft : hp('1%')
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    }:
    {

     padding : hp('.5%') , borderColor : 'white' , width : wp('30%') , backgroundColor : '#14789d' , 
     borderRadius : hp('5%')   , height : hp('5%')  , margin : wp('1%'),
      shadowColor: '#000',fontFamily: 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2,marginLeft : hp('1%')
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    } , 
    
    text : Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white', 
            fontSize :  hp('2%') , height : 25 ,
            justifyContent:'center',textAlign:'center',
            marginTop:hp('.5%'),marginLeft : hp('1%')
    }:
    {
        alignSelf : "center" , color : 'white', 
            fontSize :  hp('2%') , height : 25 , fontFamily: 'ge-ss-two-medium',
            justifyContent:'center',textAlign:'center',
            marginTop:hp('.5%'),marginLeft : hp('1%')

    },

    center : 
    {
        justifyContent : 'center' , alignItems : 'center' , marginTop : hp('5%')
    },

    search:
    {
        width : 25, height : 25 , color : 'white' , marginLeft : wp('2%')
    },    
    input: 
    {  
       textAlign : 'center' , fontSize : hp('2.5%') , width : wp('60%') , color : 'white' , 
       marginLeft : hp('2%') , height : hp('6%') ,
    },

    small_input: Platform.OS == "ios" ?
    {
        height : hp('6%')
        , fontSize : hp('2%') , width : wp('60%') , color : 'white' , textAlign : 'center' ,
       marginLeft : wp('1.5%') , 
        marginBottom : hp('3%'),
    }:
    {
        height : hp('6%')
        , fontSize : hp('2%') , width : wp('60%') , color : 'white' , textAlign : 'center' ,
       marginLeft : wp('1.5%'),fontFamily: 'ge-ss-two-medium' , 
        marginBottom : hp('3%'),
    }, 

    name_search : 
    {
      flexDirection : 'row' ,    borderWidth :  1.5 ,width : wp('80%') , height : hp('6%')
      , padding : hp('-.5%') , borderColor : 'white' ,   marginTop : hp('2%'),
      borderRadius : hp('3%') , 
    },

    backicon1:
    {   marginLeft : wp('5%'),
        marginTop : hp('1%'),
        width: 25,
        height: 25,
        marginTop: 5,
    },

    View_search : 
    {
        justifyContent : 'center', alignItems : 'center' , 
        width : wp('75%') , borderRadius : hp('5%') , flexDirection : 'row' , marginTop : hp('-2%') ,
          height : hp('5%') , marginLeft : hp('1%') ,  borderColor : 'white' , borderWidth : 1
    },

    first_line : 
    {
        flexDirection : 'row' , marginTop : hp('3%') ,marginLeft : hp('1%')
    }, 
    line  : Platform.OS == "ios" ?
    {
        flexDirection : 'row' ,marginTop : hp('1%') ,marginLeft : hp('1%')

    }:
    {
        flexDirection : 'row' ,marginTop : hp('1%') ,fontFamily: 'ge-ss-two-medium',marginLeft : hp('1%')
    }, 
    icons  : 
    {
        flexDirection : 'row' 
    }, 
    second_line:
    {
        flexDirection : 'row' , marginTop : 20  
    },

   
row4:
        {
            flexDirection: 'row', marginLeft: wp('75%'), marginTop: hp('-4.5%')
        },

};   