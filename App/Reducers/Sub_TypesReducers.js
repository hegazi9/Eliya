

const INITIAL_STATE = { sub_type : [] , loading : false , error : ''}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'SUB_TYPES_ADD_SUCCESS':
            return {...INITIAL_STATE , loading : false , sub_type : action.sub_type}
    
        default : 
            return state ;
    }
}