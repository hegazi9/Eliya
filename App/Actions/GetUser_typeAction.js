import axios from 'axios' ;
import AsyncStorage from '@react-native-community/async-storage';

export const Get_user_type = (Token)=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_USER_TYPE_ATTEMPT'});
    
    //call the backend 
      axios.get(`http://188.225.184.107:7071/api/CustomerTypes`,
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
    onGetCity( dispatch , data.data , data.data  )
}

const onGetCity = ( dispatch , user  ,user_client   ) => 
{
        dispatch({ type : 'GET_USER_TYPE_SUCCESS' , user , user_client }) 
}