import { Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ROUTE_KEY } from '../constants/Constants';
import SplashComponent from '../modules/screen/splash/SplashComponent';
import LoginComponent from '../modules/screen/SignIn/LoginComponent';

const routeAppConfiguration = {
  [ROUTE_KEY.SPLASH]: {
    screen: SplashComponent,
    navigationOptions: { header: null }
  },
  [ROUTE_KEY.LOGIN]: {
    screen: LoginComponent,
    navigationOptions: { header: null }
  }
};

const CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  return {
    opacity,
    transform: [{ scaleY }]
  };
};

const SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};
const slowFade = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1]
  });
  return { opacity };
};

const TransitionConfiguration = () => ({
  transitionSpec: {
    duration: 500,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const width = layout.initWidth;
    const { index, route } = scene;
    const params = route.params || {}; // <- That's new
    const transition = params.transition || 'default'; // <- That's new
    return {
      collapseExpand: CollapseExpand(index, position),
      none: null,
      slowFade: slowFade(index, position),
      default: SlideFromRight(index, position, width)
    }[transition];
  }
});

const stackAppConfiguration = {
  initialRouteName: ROUTE_KEY.SPLASH,
  navigationOptions: {
    gesturesEnabled: false
  },
  transitionConfig: TransitionConfiguration
};

const AppNavigator = createStackNavigator(
  routeAppConfiguration,
  stackAppConfiguration
);
export default createAppContainer(AppNavigator);
