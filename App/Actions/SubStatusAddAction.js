
import axios from 'axios' ;
export const sub_status_add  = (Token , sub_status)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + sub_status)
    dispatch({ type : 'SUB_STATUS_ADD_SUCCESS'});
    

    axios({
      method: 'post',
      url: 'http://188.225.184.107:7071/api/SubscriptionStatus',
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         localText: sub_status,
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
