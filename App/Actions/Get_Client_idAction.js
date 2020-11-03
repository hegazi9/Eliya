import axios from 'axios' ;
import AsyncStorage from '@react-native-community/async-storage';

export const Get_client_id = ( Token ,  id )=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_CLIENT_ATTEMPT_ID'});
    
    //call the backend 

      axios.get(`http://188.225.184.107:7071/api/Customers/${id}`,
      {
         headers : 
         {
            'Authorization': `Bearer ${Token}`
         },
       })
      .then(response => {
          // If request is good...
          onhandleResponse( dispatch , response) 

       })

    
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
    let x = '' ;
    data.data.map( item => {
      x = item.subscriptionDate
    })

    onGetCity( dispatch , data.data  , x )
    
}

const onGetCity = ( dispatch , user_id  , subscriptionDate   ) => 
{
        dispatch({ type : 'GET_CLIENT_SUCCES_ID' , user_id  , subscriptionDate  }) 
}