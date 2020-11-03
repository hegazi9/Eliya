const INITIAL_STATE = { user : [] , loading : false , status : null,load : true}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_ALL_CLIENTS_ATTEMPT':
            return {...state , loading : false}
        
        case 'GET_ALL_CLIENTS_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  user : action.user ,load :false }
    
        
        default : 
            return state ;
    }
}