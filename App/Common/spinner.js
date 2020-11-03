import React from 'react' ;
import { View , ActivityIndicator   } from 'react-native' ;

const Spinner  = () => 
{
    return (
        <View style = {{ flex : 1 , justifyContent : 'center' , marginBottom : '4%' ,
         alignItems : 'center', marginTop : '14%' }}>
            <ActivityIndicator size = {'small'} color = 'white'/>
        </View>
    )
} 


export { Spinner } ;