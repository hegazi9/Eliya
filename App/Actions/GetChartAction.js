import axios from 'axios' ;
import { Item } from 'native-base';

export const get_chart = (Token)=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'GET_CHART_ATTEMPT'});
    
    //call the backend 
      axios.get(`http://188.225.184.107:7071/api/Customers/Report`,
      {  
       headers:
       { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`}
       })
      .then(response => {
          // If request is good...
          onhandleResponse( dispatch , response) 

       })

    
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
   let v = []
   data.data.cityCustomers.map( i => {
      v.push(i.y)
   })
   let x = []
    x.push(data.data)

   let  todayNewCustomers = 0 
   let  monthNewCustomers = 0
   let  totalActiveCustomers = 0
   let  notReturnedBottles = 0
   let  customersToLawyer = 0
   let  customersWithExpiredGracePeriod = 0
   let  customerClosedFromCompany = 0
   let  customersDone = 0
   let  withdrawCustomers = 0
   
    x.map( item => {
      todayNewCustomers = item.todayNewCustomers
      monthNewCustomers = item.monthNewCustomers
      totalActiveCustomers = item.totalActiveCustomers
      notReturnedBottles = item.notReturnedBottles
      customersToLawyer = item.customersToLawyer
      customersWithExpiredGracePeriod = item.customersWithExpiredGracePeriod
      customerClosedFromCompany = item.customerClosedFromCompany
      customersDone = item.customersDone
      withdrawCustomers = item.withdrawCustomers
    })

      let b = [ todayNewCustomers , monthNewCustomers , totalActiveCustomers , notReturnedBottles, 
         customersToLawyer , customersWithExpiredGracePeriod , customerClosedFromCompany , customersDone ,
         withdrawCustomers  ]
      b.push()
     

    onGetCity( dispatch , data.data.cityCustomers , v  , b )
  //  console.log(data.data.cityCustomers)

}

const onGetCity = ( dispatch , user  , user_data  , b  ) => 
{
        dispatch({ type : 'GET_CHART_SUCCESS' , user , user_data  , b  }) 
}