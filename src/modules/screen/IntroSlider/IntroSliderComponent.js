/* eslint-disable no-underscore-dangle */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  IS_IOS,
  SCALE_HEIGHT,
  SCALE_HEIGHT_PERCEN,
  SCALE_WIDTH,
  SCALE_WIDTH_PERCEN,
  WIDTH_DEVICE
} from '../../../constants/Constants';
import style from '../../../constants/style';
import MyComponent from '../../view/MyComponent';

export const dataIntroSlider = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    title: 'White Pocket Sunset',
    subtitle:
      'Lorem ipsum dolor sit amet et nuncatLorem ipsum dolor sit amet et nuncatLorem ipsum dolor sit amet et nuncatLorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];

export default class IntroSliderComponent extends MyComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 1
    };
  }
  _renderItem({ item, index }, parallaxProps) {
    return (
      <View style={styles.slideInnerContainer}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={[styles.image, {}]}
          parallaxFactor={0.9}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.subtitle}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: getStatusBarHeight()
        }}
      >
        <View
          style={{
            flex: 7,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <Carousel
            data={dataIntroSlider}
            renderItem={this._renderItem}
            hasParallaxImages
            sliderWidth={WIDTH_DEVICE}
            itemWidth={SCALE_WIDTH_PERCEN(0.8)}
            firstItem={1}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            // inactiveSlideShift={20}
            containerCustomStyle={{
              overflow: 'visible',
              paddingTop: SCALE_HEIGHT(30)
            }}
            loop
            loopClonesPerSide={2}
            autoplay
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={index => this.setState({ activeSlide: index })}
          />
        </View>

        <View
          style={{
            flex: 3,
            justifyContent: 'center'
          }}
        >
          <Text style={(style.text, style.textCenter)}>Connect with</Text>
          <View
            style={{
              marginVertical: SCALE_HEIGHT(10),
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={() => {}}
              style={{}}
            >
              Login with Facebook
            </Icon.Button>
            <Icon.Button
              name="google-plus"
              backgroundColor="#CB4036"
              onPress={() => {}}
              style={{}}
            >
              Login with Google
            </Icon.Button>
          </View>
          <Text style={(style.text, style.textCenter)}>
            or {/* <MyTouchableOpacity> */}
            <Text style={(style.text, { color: '#' })} onPress={() => {}}>
              Use Your Account
            </Text>
            {/* </MyTouchableOpacity> */}
          </Text>
        </View>
      </View>
    );
  }
}
export const styles = StyleSheet.create({
  slideInnerContainer: {
    width: SCALE_WIDTH_PERCEN(0.8),
    height: SCALE_HEIGHT_PERCEN(0.6),
    paddingHorizontal: SCALE_WIDTH(8),
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: SCALE_WIDTH(3),
    right: SCALE_WIDTH(3),
    bottom: 18,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: 8
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white'
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8
  },
  imageContainerEven: {
    backgroundColor: 'black'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? 8 : 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 8,
    backgroundColor: 'white'
  },
  radiusMaskEven: {
    backgroundColor: 'black'
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - 8,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  textContainerEven: {
    backgroundColor: 'black'
  },
  title: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  titleEven: {
    color: 'white'
  },
  subtitle: {
    marginTop: 6,
    color: 'gray',
    fontSize: 12,
    fontStyle: 'italic'
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)'
  }
});
