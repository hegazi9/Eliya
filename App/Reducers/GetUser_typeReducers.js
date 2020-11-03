const INITIAL_STATE = { user : [] , user_client : [] , loading : false , status : null}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_USER_TYPE_ATTEMPT':
            return {...state , loading : false}
        
        case 'GET_USER_TYPE_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  user : action.user 
                ,  user_client : action.user_client   }
    
        
        default : 
            return state ;
    }
}