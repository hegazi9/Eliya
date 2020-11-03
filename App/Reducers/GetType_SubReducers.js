const INITIAL_STATE = { types : [] , loading : false , status : null}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_TYPE_SUBBUB_ATTEMPT':
            return {...state , loading : false}
        
        case 'GET_TYPE_SUBBUB_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  types : action.types }
    
        
        default : 
            return state ;
    }
}