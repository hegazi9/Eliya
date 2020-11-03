import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform } from 'react-native' ;

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
        flexDirection : 'column'  , alignItems : 'center' , marginTop : hp('10%') , justifyContent : 'center'
    },

    Logo :
    {
        width: 200 , height : 200 , marginTop : hp('1%') 
    } , 

    input : Platform.OS == "ios" ? 
    {
        width: 150, fontSize : 17 ,  height: 60 , color : 'white' , marginLeft : wp('5%') ,
         textAlign : 'center'
    }:
    {   
        width: 150, fontSize : 17 ,  height: 60 , color : 'white' , marginLeft : wp('5%') ,
        fontFamily : 'ge-ss-two-medium' , textAlign : 'center'

    },
    icon : 
    {
         width : 30 , height : 30 , marginTop : hp('3%') , color : 'white' 
    },
    icon_pass : 
    {
         width : 27 , height : 27 , marginTop : hp('3%') , color : 'white' ,
    },
    line : 
    {  
        height: 1 , backgroundColor: 'white' , width : 200 ,  marginLeft  : wp('-18%')  , marginTop : hp('-1%')
    },

    row_name : 
    {
         flexDirection : 'row' , marginTop : hp('8%') ,
    } ,
    row_pass : 
    {
         flexDirection : 'row' , marginTop : hp('3%')
    } ,
    button : Platform.OS == "ios" ? 
    {
        padding : hp('.5%') , borderColor : 'white' , width : wp('40%') , backgroundColor : '#d1d3d4' , 
        margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('5%')  ,
        shadowColor: '#000', marginTop : hp('5%') ,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }:
    {

     padding : hp('.5%') , borderColor : 'white' , width : wp('40%') , backgroundColor : '#d1d3d4' , 
      margin : hp('1.5%'), borderRadius : hp('5%')   , height : hp('5%')  ,
      shadowColor: '#000', marginTop : hp('5%') ,fontFamily : 'ge-ss-two-medium',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    } , 
    
    text : Platform.OS == "ios" ? 
    {
        alignSelf : "center" , color : '#14789d',
            fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%')
    }:
    {
        alignSelf : "center" , color : '#14789d', fontFamily : 'ge-ss-two-medium' , 
            fontSize :  hp('2%') , height : 35 , marginTop : hp('.5%')
    },

    center : 
    {
        justifyContent : 'center' , alignItems : 'center' , marginTop : hp('5%')
    },

    error : Platform.OS == "ios" ? 
    {
        justifyContent : 'center'  , marginTop : hp('5%') 
        , textAlign : 'center' , color : '#9ad9e8' , fontSize : hp('2%') , width : wp('70%') , 
    }:
    {
        justifyContent : 'center'  , marginTop : hp('5%') ,fontFamily : 'ge-ss-two-medium' 
      , textAlign : 'center' , color : '#9ad9e8' , fontSize : hp('2%') , width : wp('70%') , 
    }
    
}; 