const INITIAL_STATE = { city : [] , loading : false , status : null}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_CITY_ATTEMPT':
            return {...state , loading : false}
        
        case 'GET_CITY_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  city : action.city  }
    
        
        default : 
            return state ;
    }
}