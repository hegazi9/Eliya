
import axios from 'axios' ;
export const delete_city  = (Token , del_city)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + del_city)
    dispatch({ type : 'DELETE_CITY_SUCCESS'});
    

    axios({
      method: 'delete',
      url: `http://188.225.184.107:7071/api/Cities/${del_city}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
