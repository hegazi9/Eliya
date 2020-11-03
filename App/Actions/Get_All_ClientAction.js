import axios from 'axios' ;
import AsyncStorage from '@react-native-community/async-storage';

export const Get_all_clients = (offset)=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_ALL_CLIENTS_ATTEMPT'});
    
    //call the backend 

      axios.get(`http://188.225.184.107:7071/api/Customers?offset=${offset}&limit=3`)
      .then(response => {
          // If request is good...
          onhandleResponse( dispatch , response) 

       })

    
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
    onGetCity( dispatch , data.data.data )
 //   console.log(data.data.data)

}

const onGetCity = ( dispatch , user    ) => 
{
        dispatch({ type : 'GET_ALL_CLIENTS_SUCCESS' , user  }) 
}