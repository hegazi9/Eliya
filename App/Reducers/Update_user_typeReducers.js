

const INITIAL_STATE = { update : [] , loading : false , error : ''}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'USER_TYPE_UPDATE_SUCCESS':
            return {...INITIAL_STATE , loading : false , update : action.update}
    
        default : 
            return state ;
    }
}