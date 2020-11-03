
import axios from 'axios' ;
export const city_update_fun  = (Token , city_update , city_id)=> 
{
   return (dispatch) =>
   {
   //   alert(city_id + "      " + city_update )
    dispatch({ type : 'CITY_UPDATE_SUCCESS'});
    

    axios({
      method: 'put',
      url: `http://188.225.184.107:7071/api/Cities/${city_id}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         id : city_id , 
         localText: city_update,
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
