
import axios from 'axios' ;
export const delete_clientType  = (Token , del_clientType)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + del_clientType)
    dispatch({ type : 'DELETE_CLIENTYPE_SUCCESS'});
    

    axios({
      method: 'delete',
      url: `http://188.225.184.107:7071/api/CustomerTypes/${del_clientType}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
