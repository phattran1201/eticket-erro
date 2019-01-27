import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import LoginComponent from './src/modules/screen/SignIn/LoginComponent';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => LoginComponent);
