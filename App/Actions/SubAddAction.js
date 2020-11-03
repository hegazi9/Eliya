
import axios from 'axios' ;
export const sub_types_add  = (Token , sub_types)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + sub_types)
    dispatch({ type : 'SUB_TYPES_ADD_SUCCESS'});
    

    axios({
      method: 'post',
      url: 'http://188.225.184.107:7071/api/SubscriptionTypes',
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         localText: sub_types,
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
