import { combineReducers} from 'redux';
import AuthReducer from './AuthReducers';
import GetCityReducers from './GetCityReducers';
import GetSubscriptionReducers from './GetSubscriptionReducers';
import GetUser_typeReducers from './GetUser_typeReducers';
import GetUser_roleReducers from './GetUser_roleReducers';
import GetType_SubReducers from './GetType_SubReducers';
import Get_client_idReducers from './Get_client_idReducers';
import City_addReducers from './City_addReducers';
import GetAll_clientsReducers from './GetAll_clientsReducers';
import Sub_TypesReducers from './Sub_TypesReducers';
import Sub_StatusReducers from './Sub_StatusReducers';
import User_Type_addReducers from './User_Type_addReducers';
import Del_CityReducers from './Del_CityReducers';
import Del_SubStatusReducers from './Del_SubStatusReducers';
import Del_SubTypeReducers from './Del_SubTypeReducers';
import Del_ClientTypeReducer from './Del_ClientTypeReducer';
import Del_UsersTypeReducer from './Del_UsersTypeReducer';
import Del_CustomerReducer from './Del_CustomerReducers';
import GetChartReducers from './GetChartReducers';
import User_addReducers from './User_addReducers';
import City_Update_Reducers from './City_Update_Reducers';
import Update_Sub_Reducers from './Update_Sub_Reducers';
import Update_Sub_TypeReducers from './Update_Sub_TypeReducers';
import Update_user_typeReducers from './Update_user_typeReducers';
import Update_usersReducers from './Update_usersReducers';
import Client_addReducers from './Client_addReducers';
import GetFiltersReducers from './GetFiltersReducers';

import DownloadPdfReducer from './DownloadPdfReducer';



export default combineReducers({
    auth : AuthReducer ,
    city_name :  GetCityReducers ,
    subscription_name : GetSubscriptionReducers ,
    user_type : GetUser_typeReducers ,
    user_role : GetUser_roleReducers ,
    type_sub : GetType_SubReducers , 
    add_city : City_addReducers ,
    client_name : GetAll_clientsReducers ,
    sub_types : Sub_TypesReducers ,
    sub_status : Sub_StatusReducers ,
    user_add_type : User_Type_addReducers , 
    delete_city : Del_CityReducers , 
    delete_subStatus : Del_SubStatusReducers,
    delete_subTypes : Del_SubTypeReducers,
    delete_clientType : Del_ClientTypeReducer,
    delete_usersType : Del_UsersTypeReducer,
    user_add : User_addReducers ,
    city_update : City_Update_Reducers ,
    sub_update : Update_Sub_Reducers , 
    sub_type_update : Update_Sub_TypeReducers , 
    user_update : Update_user_typeReducers , 
    users : Update_usersReducers , 
    client_add:Client_addReducers,
    delete_customer:Del_CustomerReducer,
    data_filter : GetFiltersReducers , 
    chart  : GetChartReducers , 
    Download_Pdf_Reducer:DownloadPdfReducer , 
    client_by_id : Get_client_idReducers    

});