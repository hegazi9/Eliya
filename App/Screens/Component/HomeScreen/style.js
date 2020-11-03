import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Platform } from 'react-native'
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
        flexDirection : 'column'  , alignItems : 'center' , marginTop : hp('-2%')
    },
    body : 
    {
        flexDirection : 'row' , marginLeft : wp('20%') , marginTop : hp('3%')
    },
    Logo :
    {
        width: 100 , height : 100  ,
    } , 
   
    city_icon : 
    {
        width : 60 , height : 60 ,marginTop :  hp('1%') ,marginLeft :  wp('-1%') ,
    }, 

    close : Platform.OS == "ios" ? 
    {
        width : 25 , height : 25 ,marginTop :  hp('8%') ,marginLeft :  wp('4%') ,
    }:
    {
        width : 25 , height : 25 ,marginTop :  hp('3%') ,marginLeft :  wp('4%') ,
    }, 

    city_text: Platform.OS == "ios" ? 
    {
        alignSelf : "center" ,  marginLeft :  wp('-8%') , color : 'white',
        fontSize :  hp('2.5%') , height : 35 
    }:
    {
        alignSelf : "center" ,  marginLeft :  wp('-8%') , color : 'white',
            fontSize :  hp('2.5%') , height : 35 , fontFamily : 'ge-ss-two-medium' ,
    },

    moshtarek_icon : 
    {
        width : 70 , height : 70  ,marginTop :  hp('4.5%') ,marginLeft :  wp('-3%') ,
    },

    moshtarek_text : Platform.OS == "ios" ? 
    {
        alignSelf : "center" ,  marginLeft :  wp('-12%') , marginTop :  hp('1%') ,
        fontSize :  hp('2.5%') , height : 35 ,  color : 'white'
    }:
    {
        alignSelf : "center" ,  marginLeft :  wp('-12%') , marginTop :  hp('1%') ,
        fontSize :  hp('2.5%') , height : 35 , fontFamily : 'ge-ss-two-medium' ,  color : 'white'
    },

    user_icon : 
    {
        width : 95 , height : 95 ,marginTop :  hp('8%') ,marginLeft :  wp('-5%') , marginTop :  hp('5.8%')
    }, 

    user_text : Platform.OS == "ios" ? 
    {
        alignSelf : "center" ,  marginLeft :  wp('-8%') ,marginTop :  hp('.5%'), color : 'white',
        fontSize :  hp('2.5%') , height : 40 
    }:
    {
        alignSelf : "center" ,  marginLeft :  wp('-8%') ,marginTop :  hp('.5%'), color : 'white',
            fontSize :  hp('2.5%') , height : 40 , fontFamily : 'ge-ss-two-medium' ,
    }, 




    icon_location2 : 
    {
        width : 60 , height : 60 ,marginTop :  hp('1%') ,marginLeft :  wp('1%') ,
    }, 

    icon_setting : 
    {
        width : 80 , height : 80 , marginTop :  hp('4%') , marginLeft :  wp('-4%') ,
    }, 

    icon_setting_user : 
    {
        width : 95 , height : 80 , marginTop :  hp('4%') , marginLeft :  wp('-5%') ,
    }, 

    icon_setting_user2 : 
    {
        width : 95 , height : 80  , marginTop :  hp('4%') , marginLeft :  wp('-5.5%') ,
    }, 

    icon_setting2 : 
    {
        width : 90 , height : 90 , marginTop :  hp('7%') , marginLeft :  wp('-4%') ,
    }, 

    text_location: Platform.OS == "ios" ? 
    {
        alignSelf : "center" ,  marginLeft :  wp('-8%') , color : 'white',
        fontSize :  hp('2.5%') , height : 35 
    }:
    {
        alignSelf : "center" ,  marginLeft :  wp('-8%') , color : 'white',
            fontSize :  hp('2.5%') , height : 35 , fontFamily : 'ge-ss-two-medium' ,
    },

    text_location2: Platform.OS == "ios" ?
    {
        alignSelf : "center" ,  color : 'white' , marginLeft :  wp('-2.5%') ,
        fontSize :  hp('2.5%') , height : 35 ,
    }:
    {
        alignSelf : "center" ,  color : 'white' , marginLeft :  wp('-2.5%') ,
            fontSize :  hp('2.5%') , height : 35 , fontFamily : 'ge-ss-two-medium' ,
    },

    text_logout: Platform.OS == "ios" ?
    {
        alignSelf : "center" , color : 'white', 
        fontSize :  hp('2.5%') , height : 35
    }:
    {
        alignSelf : "center" , color : 'white',  fontFamily : 'ge-ss-two-medium' ,
            fontSize :  hp('2.5%') , height : 35
    },

    col : 
    {
         flexDirection : 'column' , marginLeft : wp('22%')
    },

    logout : 
    {
             width : 40 , height : 40 , color : 'white' , marginTop : hp('1%')
        
    }, 
    row : 
    {
        flexDirection : 'row' , marginLeft : wp('40%') , marginTop : 50 , marginLeft :  wp('28%') ,
    }
}; 