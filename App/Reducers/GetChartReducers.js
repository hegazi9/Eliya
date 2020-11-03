const INITIAL_STATE = { user : [] , user_data : [] , b : [] ,  loading : true , status : null}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_CHART_ATTEMPT':
            return {...state , loading : true}
        
        case 'GET_CHART_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  user : action.user  ,
                     user_data : action.user_data ,  b  : action.b   }
    
        
        default : 
            return state ;
    }
}