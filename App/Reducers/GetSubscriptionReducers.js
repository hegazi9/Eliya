const INITIAL_STATE = { subscription : [] , loading : false , status : null}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_SUBSCRIPTION_ATTEMPT':
            return {...state , loading : false}
        
        case 'GET_SUBSCRIPTION_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  subscription : action.subscription  }
    
        
        default : 
            return state ;
    }
}