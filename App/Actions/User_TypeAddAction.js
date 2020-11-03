
import axios from 'axios' ;
export const user_type_add  = (Token , user_type)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + user_type)
    dispatch({ type : 'USER_TYPE_ADD_SUCCESS'});
    

    axios({
      method: 'post',
      url: 'http://188.225.184.107:7071/api/CustomerTypes',
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         localText: user_type,
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
