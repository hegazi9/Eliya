
import axios from 'axios' ;
import AsyncStorage from '@react-native-community/async-storage';
export const loginuser = ({ username , password })=> 
{
   return (dispatch) =>
   {
    dispatch({ type : 'LOGIN_ATTEMPT'});
    
    //call the backend 
    axios.post('http://188.225.184.107:7071/api/Account/login',
    { username , password })
    .then(response =>  {
        onhandleResponse( dispatch , response) 
        console.log(response)
        
    }  
    ) 
    .catch(res =>  {
        console.log("HEGAZY" + JSON.stringify(res.response.data.errors))
         dispatch({ type : 'LOGIN_NOT' , error : JSON.stringify(res.response.data.errors) })    
    })

   }
   
}

const onhandleResponse = ( dispatch , data) =>
{
        onLoginSuccess( dispatch , data.config.data , data.data.token  , data.data.role)
        console.log(data.data.role)
}

const onLoginSuccess = ( dispatch , user , token , role  ) => 
{
     AsyncStorage.setItem('app_Token', token)
    .then(() => {
        dispatch({ type : 'LOGIN_SUCCESS' , user  }) 
       
    });
    
    AsyncStorage.setItem('ROLE', role )
    .then(() => {
        dispatch({ type : 'ROLE_SUCCESS' , user   }) 
       
    });

}
