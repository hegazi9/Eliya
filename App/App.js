
import React, { Component } from 'react';
import RootNavigator from './Navigation/RootNavigator';
import { createStore , applyMiddleware  } from 'redux' ;
import { Provider } from 'react-redux' ;
import Reducers from './Reducers';
import ReduxThunk from  'redux-thunk';


export default class App extends Component {

  render() {

      return  (
     
        <Provider store={createStore(Reducers , {}  , applyMiddleware(ReduxThunk))}>
        <RootNavigator /> 
      </Provider>
      );
      }
    }


    /*
    
    adb shell input keyevent 82
/*  adb -s <58KRX19109005789> reverse tcp:8081 tcp:8081
Resolve Error --->  $ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
$ cd (path to project/android folder) && ./gradlew clean && cd .. && react-native run-android
$ gradlew assembleDebug

cd (path to project/android folder)  ./gradlew app:assembleRelease   //release.apk
gradlew bundleRelease -x bundleReleaseJsAndAssets
$ gradlew assembleRelease // playstore
npx react-native run-android --variant=release

keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android


npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
./gradlew assembleRelease -x bundleReleaseJsAndAssets
npm i -g react-native-cli
cd android && ./gradlew assembleRelease -x bundleReleaseJsAndAssets
*/
 
    
 
