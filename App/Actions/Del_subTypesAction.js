
import axios from 'axios' ;
export const delete_subTypes  = (Token , del_subTypes)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + del_subTypes)
    dispatch({ type : 'DELETE_SUBSTATUS_SUCCESS'});
    

    axios({
      method: 'delete',
      url: `http://188.225.184.107:7071/api/SubscriptionTypes/${del_subTypes}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
