
import axios from 'axios' ;
export const users_update_fun  = (Token , user_id  ,  username , password  , role   )=> 
{
   return (dispatch) =>
   {
   //   alert(city_id + "      " + city_update )
    dispatch({ type : 'USERS_UPDATE_SUCCESS'});
    

    axios({
      method: 'put',
      url: `http://188.225.184.107:7071/api/Account/users`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         id : user_id , 
         username : username,
         password : password , 
         role : role 
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
