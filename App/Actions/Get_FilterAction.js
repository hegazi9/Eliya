import axios from 'axios' ;
//, Name_city , Name_client , Name_type , Name_status
export const Get_filter = ( Token ,  offset , CITY , TYPE , STATUS , CLIENT)=> 
    {
   return (dispatch) =>
   {
    dispatch({ type : 'GET_FILTER_ATTEMPT'});
    
    //call the backend 
      axios.get(`http://188.225.184.107:7071/api/Customers/Filtered/?offset=${offset}&limit=4&city=${CITY}&subscribtiontype=${TYPE}&subscribtionstatus=${STATUS}&customertype=${CLIENT}`,
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
    onGetCity( dispatch , data.data.data)
    console.log(data.data.data)
}

const onGetCity = ( dispatch , filter    ) => 
{
        dispatch({ type : 'GET_FILTER_SUCCESS' , filter  }) 
}