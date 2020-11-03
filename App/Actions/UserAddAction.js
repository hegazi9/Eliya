
import axios from 'axios' ;
export const user_add  = (Token , user_name , user_pass , user_role )=> 
{
   return (dispatch) =>
   {
       console.log( user_name  + user_pass + user_role  )
    dispatch({ type : 'USER_ADD_SUCCESS'});
    

    axios({
      method: 'post',
      url: 'http://188.225.184.107:7071/api/Account/users',
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         username  : user_name, 
         password  : user_pass, 
         role      : user_role, 
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
