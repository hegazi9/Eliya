
import axios from 'axios' ;
export const sub_update_fun  = (Token , sub_update , sub_id)=> 
{
   return (dispatch) =>
   {
   //   alert(city_id + "      " + city_update )
    dispatch({ type : 'SUB_UPDATE_SUCCESS'});
    

    axios({
      method: 'put',
      url: `http://188.225.184.107:7071/api/SubscriptionStatus/${sub_id}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         id : sub_id , 
         localText: sub_update,
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
