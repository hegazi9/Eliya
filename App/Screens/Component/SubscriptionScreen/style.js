import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform  }  from 'react-native' ;
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
        flexDirection : 'column'  , alignItems : 'center' , marginTop : hp('2%')
    },
   
    Logo :
    {
        width: 120 , height : 120  ,
    } , 
   
    row : Platform.OS == "ios" ?
    {
        flexDirection : 'row' , marginLeft : wp('40%') , marginTop : wp('8%') , marginLeft :  wp('4%') ,
    }:
    {
        flexDirection : 'row' , marginLeft : wp('40%') , marginTop : wp('4%') , marginLeft :  wp('4%') ,
    },
    back: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white',  marginTop : hp('.5%'),
        fontSize :  hp('2.5%') , height : 35 , marginLeft :  wp('2%')
    }:
    {
        alignSelf : "center" , color : 'white',  marginTop : hp('1%'),
            fontSize :  hp('2.5%') , height : 35 ,  fontFamily : 'ge-ss-two-medium' ,
    },
    txt: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white',  marginTop : hp('1.5%'),
        fontSize :  hp('2%') , height : 35 ,
    }:
    {
        alignSelf : "center" , color : 'white',  marginTop : hp('1.5%'),
            fontSize :  hp('2%') , height : 35 ,  fontFamily : 'ge-ss-two-medium' ,
    },
    rowline : 
    {
        flexDirection : 'row' , marginTop : wp('10%')  , justifyContent : 'center'
    },

    logout : 
    {
             width : 30 , height : 30 , color : 'white' , marginTop : hp('1%')
        
    }, 
    right : 
    {
             width : 30 , height : 30 , color : 'white' , marginTop : hp('1%'),  marginLeft : hp('1%')
        
    }, 

    input: Platform.OS == "ios" ?
    {
        textAlign : 'center' , fontSize : hp('2.5%') , width : wp('60%') , color : 'white' , 
       marginLeft : hp('2%') , height : hp('6%') ,
    }:
    {  
       textAlign : 'center' , fontSize : hp('2.5%') , width : wp('60%') , color : 'white' , 
       marginLeft : hp('2%') , height : hp('6%') , fontFamily : 'ge-ss-two-medium' ,
    },

    View_search : 
    {
        justifyContent : 'center', alignItems : 'center' , 
        width : wp('75%') , borderRadius : hp('5%') , flexDirection : 'row' , marginTop : hp('-2%') ,
          height : hp('5%') , marginLeft : hp('1%') ,  borderColor : 'white' , borderWidth : 1
    },
    center : 
    {
        justifyContent : 'center' , alignItems : 'center' , marginTop : hp('5%')
    },

    search:
    {
        width : 25, height : 25 , color : 'white' , marginLeft : wp('2%')
    },    
    txt_name : Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white',  marginLeft : wp('30%'),marginTop : hp('1%'),
        fontSize :  hp('2.5%') , color : '#0b485b' , height : 35 ,  
    }:
    {
        alignSelf : "center" , color : 'white',  marginLeft : wp('30%'),marginTop : hp('1%'),
        fontSize :  hp('2.5%') , color : '#0b485b' , height : 35 ,  
        fontFamily : 'ge-ss-two-medium' , 
    },

    sort : 
    {
             width : 30 , height : 30 , marginTop : hp('1.8%') ,  marginLeft : wp('5%'),
        
    }, 

    button :
    {
     marginTop : hp('5%') ,flexDirection : 'row' ,
     padding : hp('1%') , borderColor : 'white' , width : wp('80%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('9%')  ,
      shadowColor: '#000', 
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    } , 
    

    model  : Platform.OS == "ios" ? 
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('90%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('60%')  ,marginLeft : wp('5%') ,
      shadowColor: '#000', marginTop : hp('25%') ,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    }:
    {
     padding : hp('.5%') , borderColor : 'white' , width : wp('90%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('2%')   , height : hp('60%')  ,marginLeft : wp('5%') ,
      shadowColor: '#000', marginTop : hp('25%') ,fontFamily : 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
  
    },
    
    close : 
    {
        width : 25 , height : 25 ,marginTop :  hp('-1.5%') ,marginLeft :  wp('-25%') ,
    }, 


    view_title : Platform.OS == "ios" ? 
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('26%') , backgroundColor : '#14789D' , 
      margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('5%')  ,
      shadowColor: '#000', marginTop : hp('-1.5%') ,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    }:
    {

     padding : hp('.5%') , borderColor : 'white' , width : wp('26%') , backgroundColor : '#14789D' , 
      margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('5%')  ,
      shadowColor: '#000', marginTop : hp('-1.5%') ,fontFamily : 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    } , 
    
    title : Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : '#9ad9e8',
        fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%') ,
    }:
    {
        alignSelf : "center" , color : '#9ad9e8', fontFamily : 'ge-ss-two-medium' , 
            fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%') ,
    },
    
   
    delete_txt: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('.5%') ,
        fontSize :  hp('1%') , height : 25 , marginLeft : wp('3%'),
    }:
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('.5%'), fontFamily : 'ge-ss-two-medium' ,
            fontSize :  hp('1%') , height : 25 , marginLeft : wp('3%'),
    },

    city_name : Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('.5%') ,
        fontSize :  hp('2%') , height : 40 , marginLeft : wp('15%'), alignItems : 'center' , width : 100 
    }:
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('.5%'), fontFamily : 'ge-ss-two-medium' ,
        fontSize :  hp('2%') , height : 40 , marginLeft : wp('5%'), alignItems : 'center' , width : 100 
    },
    city_no: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('.5%'),
        fontSize :  hp('1.5%') , height : 25 , marginLeft : wp('15%'),
    }:
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('.5%'), 
        fontSize :  hp('1.5%') , height : 25 , marginLeft : wp('26%'),
    },

    delete : 
    {
             width : 25 , height : 25 , marginTop : hp('1%') ,  marginLeft : wp('4%'),
    
    }, 
    row_icon : 
    {
        flexDirection : 'row'
    },

    col_icon : 
    {
        flexDirection : 'column'
    },

      
    scroll : 
    {
          height : hp('30%')
    },


    input_add: Platform.OS == "ios" ?
    {
        borderWidth :  1.5  , padding : hp('1.5%') , borderColor : '#0b485b' , fontFamily : 'ge-ss-two-medium' 
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
        fontSize :  hp('2%') , height : 25 , alignItems : 'center' , width : 200  ,marginLeft: wp('0%')  
    } :
    {
        alignSelf : "center" , color : '#0b485b',  marginTop : hp('-3%'), fontFamily : 'ge-ss-two-medium' ,
        fontSize :  hp('2%') , height : 25 , alignItems : 'center' , width : 200  ,marginLeft: wp('-11%')   
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

    view_title_add : Platform.OS == "ios" ?
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('25%') , backgroundColor : '#14789D' , 
        margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('5%')  ,
        shadowColor: '#000', marginTop : hp('-1.5%') ,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }:
    {

     padding : hp('.5%') , borderColor : 'white' , width : wp('25%') , backgroundColor : '#14789D' , 
      margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('5%')  ,
      shadowColor: '#000', marginTop : hp('-1.5%') ,fontFamily : 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    } , 
    
    title_add : Platform.OS == "ios" ? 
    {
        alignSelf : "center" , color : 'white', 
        fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%')
    }:
    {
        alignSelf : "center" , color : 'white', fontFamily : 'ge-ss-two-medium' , 
            fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%')
    },
}; 