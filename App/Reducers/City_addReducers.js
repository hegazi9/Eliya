

const INITIAL_STATE = { user : [] , loading : false , error : ''}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'CITY_ADD_SUCCESS':
            return {...INITIAL_STATE , loading : false , user : action.user}
    
        default : 
            return state ;
    }
}