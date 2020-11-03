const INITIAL_STATE = { user_id : [] , subscriptionDate : ''  , loading : false , status : null,load : true}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_CLIENT_ATTEMPT_ID':
            return {...state , load : true }
        
        case 'GET_CLIENT_SUCCES_ID':
                return {...INITIAL_STATE ,  user_id : action.user_id ,load :false , subscriptionDate : action.subscriptionDate  }
    
        
        default : 
            return state ;
    }
}