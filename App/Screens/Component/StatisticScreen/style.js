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
            backgroundColor:'#14789d'
        },

        row3:
        {
            flexDirection: 'row', marginLeft: wp('5%'), marginTop: wp('6%')
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
            borderWidth:4,
            marginTop:hp('80%'),
            backgroundColor:'black'

            
        },
        back: 
        {
            alignSelf : "center" , color : 'white',
                fontSize :  hp('2.5%') , height : 25,fontFamily: 'ge-ss-two-medium'
        },

        title : 
        {
            alignSelf : "center" , color : 'white', marginLeft : wp('15%'),
                fontSize :  hp('4%') , height : 40,fontFamily: 'ge-ss-two-medium'
        },

        name  : 
        {
            alignSelf: "center", color: 'white', fontFamily: 'ge-ss-two-medium',
            textAlign: 'center', width: 100,
            fontSize: hp('2%'), height: 35, marginTop: hp('2%'),
        },

        y : 
        {
            alignSelf: "center", color: 'white', 
            fontSize: hp('2%'), height: 40, marginTop: hp('2%') , 

        },
        y1 : 
        {
            alignSelf: "center", color: 'white', fontFamily: 'ge-ss-two-medium',
            fontSize: hp('2%'), height: 40, marginTop: hp('1%') , 
            marginleft : wp('-5%')
           
        },

        sq : 
        {
            height: 55, backgroundColor: '#A6ACAF',
            marginTop: hp('0%')
            , width: 40, borderRadius: 5,
            marginRight: wp('2%')
          
        },
        card : 
        {
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            padding: hp('1%'), borderColor: 'white', width: wp('40%'), backgroundColor: '#14789d',
            borderRadius: hp('1%'), height: hp('5%'), marginLeft: wp('3%'),
            shadowColor: '#000', marginRight: wp('3%'), marginTop: hp('1%'),
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
          },

          card1 : 
          {
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            padding: hp('1%'), borderColor: 'white', width: wp('40%'), backgroundColor: '#14789d',
            borderRadius: hp('1%'), height: hp('7%'), marginLeft: wp('3%'),
            shadowColor: '#000', marginRight: wp('3%'), marginTop: hp('1%'), transform:[{rotateY:'180deg'}] ,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
          },

          name1  : 
          {
              alignSelf: "center", color: 'white', fontFamily: 'ge-ss-two-medium',
              textAlign: 'center', width: 100,
              fontSize: hp('2%'), height: 40, marginTop: hp('-.5%'),
          },

          name3  : 
        {
            alignSelf: "center", color: 'white', fontFamily: 'ge-ss-two-medium',
            textAlign: 'center', width: 80,
            fontSize: hp('2%'), height: 35, marginTop: hp('2%'),
        },

        y3 : 
        {
            alignSelf: "center", color: 'white', fontFamily: 'ge-ss-two-medium',
            fontSize: hp('1.8%'), height: 40, marginTop: hp('3%') , 

        },


       
};