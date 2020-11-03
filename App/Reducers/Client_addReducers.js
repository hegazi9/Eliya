const INITIAL_STATE = { add  : [] , loading : false , error : ''}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'CLIENT_ADD_SUCCESS':
            return {...INITIAL_STATE , loading : false , add : action.add}
    
        default : 
            return state ;
    }
}