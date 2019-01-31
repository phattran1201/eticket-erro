import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
// import LoginComponent from './src/modules/screen/SignIn/LoginComponent';
import App from './src/modules/App';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
