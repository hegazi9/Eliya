const INITIAL_STATE = { filter : [] , loading : false , status : null,load : true}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_FILTER_ATTEMPT':
            return {...state , loading : false}
        
        case 'GET_FILTER_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  filter : action.filter ,load :false }
    
        
        default : 
            return state ;
    }
}