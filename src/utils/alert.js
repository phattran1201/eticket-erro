import { Alert } from 'react-native';
import AndroidOpenSettings from 'react-native-android-open-settings';
import strings from '../constants/Strings';

export const alert = (title, detail, func) => {
  Alert.alert(
    title,
    detail,
    [
      {
        text: 'OK',
        onPress: func
      }
    ],
    { cancelable: false }
  );
};

export const alertGoToSetting = (self, needGoBack = true) => {
  Alert.alert(
    strings.alert,
    strings.request_permission,
    [
      {
        text: strings.back,
        onPress: () => {
          if (self.props.navigation && needGoBack) {
            self.props.navigation.goBack();
          }
        }
      },
      {
        text: strings.go_to_device_setting,
        onPress: () => {
          if (self.props.navigation && needGoBack) {
            self.props.navigation.goBack();
          }
          setTimeout(() => {
            AndroidOpenSettings.appDetailsSettings();
          });
        }
      }
    ],
    {
      cancelable: false
    }
  );
};
