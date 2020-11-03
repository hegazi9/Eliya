const INITIAL_STATE = { user : [] , loading : false , status : null}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_USER_ROLE_ATTEMPT':
            return {...state , loading : false}
        
        case 'GET_USER_ROLE_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  user : action.user  }
    
        
        default : 
            return state ;
    }
}