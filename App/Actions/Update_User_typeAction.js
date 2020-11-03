
import axios from 'axios' ;
export const user_type_update_fun  = (Token , user_update , user_id)=> 
{
   return (dispatch) =>
   {
   //   alert(city_id + "      " + city_update )
    dispatch({ type : 'USER_TYPE_UPDATE_SUCCESS'});
    

    axios({
      method: 'put',
      url: `http://188.225.184.107:7071/api/CustomerTypes/${user_id}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         id : user_id , 
         localText: user_update,
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
