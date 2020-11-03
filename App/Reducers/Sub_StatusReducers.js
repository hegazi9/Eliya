

const INITIAL_STATE = { sub_status : [] , loading : false , error : ''}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'SUB_STATUS_ADD_SUCCESS':
            return {...INITIAL_STATE , loading : false , sub_status : action.sub_status}
    
        default : 
            return state ;
    }
}