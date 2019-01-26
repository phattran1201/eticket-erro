/* eslint-disable no-param-reassign */
import { Platform, PermissionsAndroid } from 'react-native';
import { alertGoToSetting } from '../utils/alert';

//request Permission func will request a list of permissions with params:
// -requestPermissionList: list of permissions,
// -self: to access navigation props
// -canDenied: check whether or not repeat request show up
// -needGoBack: check whether or not user will go back when select "Back" button after choose "never show up again"
// -onDoneFunc: callback when granted permissions.
export const onRequestPermission = (
  requestPermissionList,
  self,
  onDoneFunc = () => {},
  canDenied = true,
  needGoBack = false
) => {
  let haveDeniedPermission = false;
  let haveNeverAskAgain = false;
  if (Platform.OS === 'ios') {
    onDoneFunc();
  } else if (Platform.Version >= 23) {
    PermissionsAndroid.requestMultiple(requestPermissionList).then(results => {
      // console.log('1st time results:', results);
      // console.log('didmount requestPermissionList', requestPermissionList);
      requestPermissionList = [];
      const resultsArrayTemp = Object.entries(results);
      resultsArrayTemp.forEach(itemArr => {
        //itemArr will have format: ["permission name", "result"]
        if (itemArr[1] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          // go to setting
          haveNeverAskAgain = true;
        } else if (itemArr[1] === PermissionsAndroid.RESULTS.DENIED) {
          //add to list temp then will use that list to request permission again later
          haveDeniedPermission = true;
          requestPermissionList.push(itemArr[0]);
        }
      });
      setTimeout(() => {
        if (!haveNeverAskAgain && !haveDeniedPermission) {
          //ALL OK
          onDoneFunc();
        } else {
          if (haveDeniedPermission && !canDenied) {
            // console.log('done didmount requestPermissionList', requestPermissionList);
            requestPermission(requestPermissionList, needGoBack, onDoneFunc);
          }
          if (haveNeverAskAgain) {
            alertGoToSetting(self, needGoBack);
          }
        }
      });
    });
  } else {
    onDoneFunc();
  }
};

export const requestPermission = async (
  updatedRequestPermissionList,
  needGoBack,
  onDoneFunc = () => {}
) => {
  try {
    // console.log('request permisioin updatedRequestPermissionList', updatedRequestPermissionList);
    let haveNeverAskAgain = false;
    let haveDeniedPermission = false;
    const results = await PermissionsAndroid.requestMultiple(
      updatedRequestPermissionList
    );
    // console.log('request permission results:', results);
    updatedRequestPermissionList = [];
    const resultsArrayTemp = Object.entries(results);
    resultsArrayTemp.forEach(itemArr => {
      //itemArr will have format: ["permission name", "result"]
      if (itemArr[1] === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        // call to go setting
        haveNeverAskAgain = true;
        return;
      } else if (itemArr[1] === PermissionsAndroid.RESULTS.DENIED) {
        haveDeniedPermission = true;
        updatedRequestPermissionList.push(itemArr[0]);
      }
    });
    setTimeout(() => {
      if (!haveNeverAskAgain && !haveDeniedPermission) {
        onDoneFunc();
      } else {
        if (haveDeniedPermission) {
          // console.log('done request permission updatedRequestPermissionList', updatedRequestPermissionList);
          requestPermission(
            updatedRequestPermissionList,
            needGoBack,
            onDoneFunc
          );
        }
        if (haveNeverAskAgain) {
          alertGoToSetting(this, needGoBack);
        }
      }
    });
  } catch (err) {
    console.warn(err);
  }
};
