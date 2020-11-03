

const INITIAL_STATE = { del : [] , loading : false , error : ''}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'DELETE_SUBSTATUS_SUCCESS':
            return {...INITIAL_STATE , loading : false , del : action.del}
    
        default : 
            return state ;
    }
}