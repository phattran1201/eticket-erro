/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FS,
  SCALE_RATIO_HEIGHT_BASIS,
  WIDTH_DEVICE,
  HEIGHT_DEVICE
} from '../../../constants/Constants';
import style from '../../../constants/style';
import MyComponent from '../../view/MyComponent';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

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

// const IS_IOS = Platform.OS === 'ios';
// const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
//   'window'
// );

// function wp(percentage) {
//   const value = (percentage * viewportWidth) / 100;
//   return Math.round(value);
// }

// const slideHeight = viewportHeight * 0.6;
// const slideWidth = wp(75);
// const itemHorizontalMargin = wp(2);

// export const sliderWidth = WIDTH_DEVICE();
// export const itemWidth = slideWidth + itemHorizontalMargin * 2;

// const 8 = 8;

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
        <Carousel
          data={dataIntroSlider}
          renderItem={this._renderItem}
          hasParallaxImages
          sliderWidth={WIDTH_DEVICE()}
          itemWidth={WIDTH_DEVICE('70%')}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={{
            marginTop: 15,
            overflow: 'visible'
          }}
          contentContainerCustomStyle={{
            paddingTop: SCALE_RATIO_HEIGHT_BASIS(25)
          }}
          loop
          loopClonesPerSide={2}
          autoplay
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fafafa',
            justifyContent: 'center'
          }}
        >
          <Text style={style.text}>Connect with</Text>
          <View
            style={{
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
          <Text style={{ textAlign: 'center', fontSize: FS(12) }}>
            Connect with
          </Text>
        </View>
      </View>
    );
  }
}
export const styles = StyleSheet.create({
  slideInnerContainer: {
    width: WIDTH_DEVICE('70%'),
    height: HEIGHT_DEVICE(0.6),
    paddingHorizontal: WIDTH_DEVICE(3),
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: WIDTH_DEVICE(3),
    right: WIDTH_DEVICE(3),
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
