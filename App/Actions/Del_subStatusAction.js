
import axios from 'axios' ;
export const delete_subStatus  = (Token , del_subStatus)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + del_subStatus)
    dispatch({ type : 'DELETE_SUBSTATUS_SUCCESS'});
    

    axios({
      method: 'delete',
      url: `http://188.225.184.107:7071/api/SubscriptionStatus/${del_subStatus}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
