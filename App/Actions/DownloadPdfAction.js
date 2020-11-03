import axios from 'axios' ;
import AsyncStorage from '@react-native-community/async-storage';

export const Download_Pdf = (Token)=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'DOWNLOAD_PDF_ATTEMPT'});
    
    //call the backend 
      axios.get(`http://188.225.184.107:7071/api/Customers/ExportPDF?type=العملاء`,
      {  
       headers:
       { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`}
       })
      .then(response => {
          // If request is good...
          console.log(response)
          onhandleResponse( dispatch , response) 

       })

    
   }
   
}
const onhandleResponse = ( dispatch , data) =>
{
    onDownloadPdf( dispatch , data.data )
}

const onDownloadPdf = ( dispatch , pdf    ) => 
{
        dispatch({ type : 'DOWNLOAD_PDF_SUCCESS' , pdf  }) 
}