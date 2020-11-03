import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform } from 'react-native';

export default 
{
    
    container : 
    {
    flex: 1, 
    
    },
    BackImg : 
    {
        width: wp('100%'), 
        height : hp('100%')
    },

    View :
    {
        flexDirection : 'column'  , alignItems : 'center' , marginTop : hp('0%')
    },
   
    Logo :
    {
        width: 120 , height : 120  ,
    } , 
   
    row : Platform.OS == "ios" ?
    {
      flexDirection : 'row' , marginLeft : wp('40%') , marginTop : hp('4%') , marginLeft :  wp('4%') ,

    }:
    {
        flexDirection : 'row' , marginLeft : wp('40%') , marginTop : wp('4%') , marginLeft :  wp('4%') ,
    },
    back: Platform.OS == "ios" ?
    {
      alignSelf : "center" , color : 'white',  marginTop : hp('1%'),
      fontSize :  hp('2.5%') , height : 35 , marginLeft : wp('1%'),
    }:
    {
        alignSelf : "center" , color : 'white',  marginTop : hp('1%'),
            fontSize :  hp('2.5%') , height : 35 ,  fontFamily : 'ge-ss-two-medium' ,
    },
  
 

    logout : 
    {
             width : 30 , height : 30 , color : 'white' , marginTop : hp('1%')
        
    }, 
    right : 
    {
             width : 30 , height : 30 , color : 'white' , marginTop : hp('1%'),  marginLeft : hp('1%')
        
    }, 

  

   
    center : 
    {
        justifyContent : 'center' , alignItems : 'center' , marginTop : hp('2%')
    },

    search:
    {
        width : 25, height : 25 , color : 'white' , marginLeft : wp('2%')
    },    
   
    input_add:  Platform.OS == "ios" ?
    {
      borderWidth :  1.5  , padding : hp('1.5%') , borderColor : '#0b485b' 
      , borderRadius : hp('2%') , marginTop : hp('4%') , height : hp('7%') , marginLeft: wp('2%') 
      , fontSize : hp('2.5%') , width : wp('85%') , color : '#0b485b' , textAlign : 'center'
    }:
    {  
        borderWidth :  1.5  , padding : hp('1.5%') , borderColor : '#0b485b' , fontFamily : 'ge-ss-two-medium' 
      , borderRadius : hp('2%') , marginTop : hp('4%') , height : hp('7%') , marginLeft: wp('2%') 
      , fontSize : hp('2.5%') , width : wp('85%') , color : '#0b485b' , textAlign : 'center'
    },

    city_add : Platform.OS == "ios" ?
    {
      alignSelf : "center" , color : '#0b485b',  marginTop : hp('-3%'),
      fontSize :  hp('2.5%') , height : 25 , alignItems : 'center' , width : 140  ,marginLeft: wp('-1%')
    }:
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('-3%'), fontFamily : 'ge-ss-two-medium' ,
        fontSize :  hp('2.5%') , height : 25 , alignItems : 'center' , width : 140  ,marginLeft: wp('-1%')   
    },

    model_add : Platform.OS == "ios" ?
    {
      padding : hp('.5%') , borderColor : 'white' , width : wp('90%') , backgroundColor : '#d1d3d4' , 
        margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('27.5%')  ,marginLeft : wp('5%') ,
        shadowColor: '#000', marginTop : hp('32%') ,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }:
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('90%') , backgroundColor : '#d1d3d4' , 
        margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('27.5%')  ,marginLeft : wp('5%') ,
        shadowColor: '#000', marginTop : hp('32%') ,fontFamily : 'ge-ss-two-medium',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },

    row_add : 
    {
        flexDirection : 'row'  , marginTop : wp('10%') , marginLeft :  wp('13%') ,
    },

    
    
    title_add : Platform.OS == "ios" ?
    {
      alignSelf : "center" , color : 'white',
      fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%')
    }:
    {
        alignSelf : "center" , color : 'white', fontFamily : 'ge-ss-two-medium' , 
            fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%')
    },
    submit:
    {
        marginTop : hp('2%') ,flexDirection : 'row' ,
        padding : hp('0%') , borderColor : 'white' , width : wp('30%') , backgroundColor : '#d1d3d4' , 
         margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('7%')  ,
         shadowColor: '#000', 
         shadowOffset: {
           width: 0,
           height: 2,
           
         },
         shadowRadius: 5,
         shadowOpacity: 1.0
       } , 
       submit_name: Platform.OS == "ios" ?
       {
        alignSelf : "center" , color : 'white',  marginLeft : wp('7%'),marginTop : hp('0%'),
        fontSize :  hp('3%') , color : '#0b485b' , height : 35 ,  
       }:
       {
        alignSelf : "center" , color : 'white',  marginLeft : wp('6%'),marginTop : hp('0.5%'),
        fontSize :  hp('3%') , color : '#0b485b' , height : 35 ,  
        fontFamily : 'ge-ss-two-medium' , 
    },
   
    close : 
    {
        width : 25 , height : 25 , marginTop :  hp('1.5%') ,marginLeft :  wp('5%') 
    }, 
    model  : Platform.OS == "ios" ?
    {
      padding : hp('.5%') , borderColor : 'white' , width : wp('40%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('50%')  ,marginLeft : wp('12.25%') ,
      shadowColor: '#000', marginTop : hp('35%') ,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    }:
    {
     padding : hp('.5%') , borderColor : 'white' , width : wp('40%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('50%')  ,marginLeft : wp('12.25%') ,
      shadowColor: '#000', marginTop : hp('35%') ,fontFamily : 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
  
    },
    city_name : Platform.OS == "ios" ?
    {
      alignSelf : "center" , color : '#0b485b',  marginTop : hp('1.5%'), 
      fontSize :  hp('2%') , height : 25 , marginLeft : wp('5%'), alignItems : 'center' , width : 100 
    }:
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('1.5%'), fontFamily : 'ge-ss-two-medium' ,
        fontSize :  hp('2%') , height : 25 , marginLeft : wp('5%'), alignItems : 'center' , width : 100 
    },
    client_model  : Platform.OS == "ios" ?
    {
      padding : hp('.5%') , borderColor : 'white' , width : wp('60%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('30%')  ,marginLeft : wp('13%') ,
      shadowColor: '#000', marginTop : hp('45%') ,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    }:
    {
     padding : hp('.5%') , borderColor : 'white' , width : wp('60%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('30%')  ,marginLeft : wp('13%') ,
      shadowColor: '#000', marginTop : hp('45%') ,fontFamily : 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
  
    },

    client_name : Platform.OS == "ios" ?
    {
      alignSelf : "center" , color : '#0b485b',  marginTop : hp('1.5%'), 
      fontSize :  hp('2%') , height : 25 , marginLeft : wp('5%'), alignItems : 'center' , width : 160 
    }:
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('1.5%'), fontFamily : 'ge-ss-two-medium' ,
        fontSize :  hp('2%') , height : 25 , marginLeft : wp('5%'), alignItems : 'center' , width : 160 
    },

    Status_model  : Platform.OS == "ios" ?
    {
      padding : hp('.5%') , borderColor : 'white' , width : wp('60%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('25%')  ,marginLeft : wp('13%') ,
      shadowColor: '#000', marginTop : hp('54%') ,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    }:
    {
     padding : hp('.5%') , borderColor : 'white' , width : wp('60%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('25%')  ,marginLeft : wp('13%') ,
      shadowColor: '#000', marginTop : hp('54%') ,fontFamily : 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
  
    },
    Type_model: Platform.OS == "ios" ?
    {
      padding : hp('.5%') , borderColor : 'white' , width : wp('60%') , backgroundColor : '#d1d3d4' , 
         margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('25%')  ,marginLeft : wp('13%') ,
         shadowColor: '#000', marginTop : hp('62%') ,
         shadowOffset: {
           width: 0,
           height: 2
         },
         shadowRadius: 5,
         shadowOpacity: 1.0
     
    }:
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('60%') , backgroundColor : '#d1d3d4' , 
         margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('25%')  ,marginLeft : wp('13%') ,
         shadowColor: '#000', marginTop : hp('62%') ,fontFamily : 'ge-ss-two-medium',
         shadowOffset: {
           width: 0,
           height: 2
         },
         shadowRadius: 5,
         shadowOpacity: 1.0
     
       },
       scroll : 
       {
             height : hp('30%'),
       },
  
       txt_login  : Platform.OS == "ios" ?
       {
        justifyContent : 'center' , marginTop : hp('.5%') ,marginBottom : hp('.5%') ,
        textAlign : 'center' , color : '#9ad9e8' , fontSize : hp('2%') , width : wp('70%') , 
       }:

       {
        justifyContent : 'center'  ,fontFamily : 'ge-ss-two-medium' , marginTop : hp('.5%') ,marginBottom : hp('.5%') ,
        textAlign : 'center' , color : '#9ad9e8' , fontSize : hp('2%') , width : wp('70%') , 
   
       },

       txt_name : Platform.OS == "ios" ?
       {
        color : 'white',marginTop : hp('1%'), width : 200 , 
        fontSize :  hp('2.5%') , color : '#0b485b' , height : 35 ,  
       textAlign : 'center' ,
       }:
       {
            color : 'white',marginTop : hp('1%'), width : 200 , 
           fontSize :  hp('2.5%') , color : '#0b485b' , height : 35 ,  
           fontFamily : 'ge-ss-two-medium' , textAlign : 'center' ,
       },
   
       sort : 
       {
                width : 30 , height : 30 , marginTop : hp('.5%') , 
           
       }, 
   
       button :
       {
        marginTop : hp('1%') ,flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center' , 
        padding : hp('1%') , borderColor : 'white' , width : wp('75%') , backgroundColor : '#d1d3d4' , 
         margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('8%')  ,
         shadowColor: '#000', 
         shadowOffset: {
           width: 0,
           height: 2
         },
         shadowRadius: 5,
         shadowOpacity: 1.0
       } , 
       
      }