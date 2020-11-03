import axios from 'axios' ;
import AsyncStorage from '@react-native-community/async-storage';

export const Get_subscription = (Token)=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_SUBSCRIPTION_ATTEMPT'});
    
    //call the backend 
      axios.get(`http://188.225.184.107:7071/api/SubscriptionStatus`,
      {  
       headers:
       { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`}
       })
      .then(response => {
          // If request is good...
          console.log(response.data)
          onhandleResponse( dispatch , response) 

       })

    
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
    onGetCity( dispatch , data.data )
}

const onGetCity = ( dispatch , subscription    ) => 
{
        dispatch({ type : 'GET_SUBSCRIPTION_SUCCESS' , subscription  }) 
}