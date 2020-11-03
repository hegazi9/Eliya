
import axios from 'axios' ;
export const city_add  = (Token , city_name)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + city_name)
    dispatch({ type : 'CITY_ADD_SUCCESS'});
    

    axios({
      method: 'post',
      url: 'http://188.225.184.107:7071/api/Cities',
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
         localText: city_name,
      
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
