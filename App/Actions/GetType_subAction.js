import axios from 'axios' ;

export const Get_type_sub = (Token)=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_TYPE_SUBBUB_ATTEMPT'});
    
    //call the backend 
      axios.get(`http://188.225.184.107:7071/api/SubscriptionTypes`,
      {  
       headers:
       { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`}
       })
      .then(response => {
          // If request is good...
          console.log("hhhhhhhhhhhhh" + response)
          onhandleResponse( dispatch , response) 

       })

    
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
    onGetCity( dispatch , data.data )
}

const onGetCity = ( dispatch , types    ) => 
{
        dispatch({ type : 'GET_TYPE_SUBBUB_SUCCESS' , types  }) 
}