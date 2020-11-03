
import axios from 'axios' ;
export const deete_coustomer  = (Token , del_customer)=> 
{
   return (dispatch) =>
   {
       console.log(Token + "      " + del_customer)
    dispatch({ type : 'DELETE_CUSTOMER_SUCCESS'});
    

    axios({
      method: 'delete',
      url: `http://188.225.184.107:7071/api/Customers/${del_customer}`,
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      }
    }).then(res => {
       console.log(res)
    })
   
   }
}

   
