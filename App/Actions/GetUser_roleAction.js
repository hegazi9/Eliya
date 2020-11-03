import axios from 'axios' ;

export const Get_user_role = (Token)=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_USER_ROLE_ATTEMPT'});
    
    //call the backend 
      axios.get(`http://188.225.184.107:7071/api/Account/users`,
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

const onGetCity = ( dispatch , user    ) => 
{
        dispatch({ type : 'GET_USER_ROLE_SUCCESS' , user  }) 
}