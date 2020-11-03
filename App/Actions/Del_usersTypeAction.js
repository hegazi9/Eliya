
import axios from 'axios' ;
export const delete_usersType  = (Token , del_usersType)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + del_usersType)
    dispatch({ type : 'DELETE_USERSTYPE_SUCCESS'});
    

    axios({
      method: 'delete',
      url: `http://188.225.184.107:7071/api/Account/users/${del_usersType}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
