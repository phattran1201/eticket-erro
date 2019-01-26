import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import IntroSliderComponent from './src/modules/screen/IntroSlider/IntroSliderComponent';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => IntroSliderComponent);
