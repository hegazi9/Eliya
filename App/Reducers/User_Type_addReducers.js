

const INITIAL_STATE = { type : [] , loading : false , error : ''}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'USER_TYPE_ADD_SUCCESS':
            return {...INITIAL_STATE , loading : false , type : action.type}
    
        default : 
            return state ;
    }
}