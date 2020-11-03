import axios from 'axios' ;
export const client_add  = 
   (
         Token   , name , phoneNumber1 ,phoneNumber2 , phoneNumber3 ,address 
   )=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'CLIENT_ADD_SUCCESS'});
    

    axios({
      method: 'post',
      url: 'http://188.225.184.107:7071/api/Customers',
      headers : 
      {
         'Authorization': `Bearer ${Token}`
      },
      data: {
     
         name : name , phoneNumber1 : phoneNumber1 ,phoneNumber2  : phoneNumber2 ,
         phoneNumber3 :  phoneNumber3 ,address : address , note  : note 
        
    
      }
    }).then(res => {
       console.log(res.data)
    })
   
   }
}
/**
 * 
 * ,note ,contractNo , subscriptionNumbers ,
         subscriptionMonthNumbers , bottleNumbers , price , bottleBalances , due , receiptNumbers ,
         Name_city , Name_type ,  Name_status , Name_client , subscriptionDate , lastReceipt , gracePeriod 


,note  : note , contractNo : contractNo ,
         subscriptionNumbers : subscriptionNumbers,  subscriptionMonthNumbers : subscriptionMonthNumbers ,
         bottleNumbers : bottleNumbers , price  : price  , bottleBalances : bottleBalances ,
         due : due  , receiptNumbers : receiptNumbers ,
         Name_city  : Name_city , Name_type : Name_type ,  Name_status : Name_status ,
         Name_client : Name_client , subscriptionDate : subscriptionDate , lastReceipt : lastReceipt 
         , gracePeriod : gracePeriod 



   */