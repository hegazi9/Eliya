const INITIAL_STATE = { pdf : [] , loading : false , status : null}
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'DOWNLOAD_PDF_ATTEMPT':
            return {...state , loading : false}
        
        case 'DOWNLOAD_PDF_SUCCESS':
                return {...INITIAL_STATE , loading : false ,  pdf : action.pdf  }
    
        
        default : 
            return state ;
    }
}