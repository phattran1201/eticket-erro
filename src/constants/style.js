/* eslint-disable no-mixed-operators */
import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  FONTSIZE,
  SCALE_HEIGHT,
  SCALE_WIDTH,
  WIDTH_DEVICE,
  headerHeight
} from './Constants';

export const COLOR_PRIMARY = '#007AFF';
export const COLOR_SECONDARY = '#111';
export const FONT_NORMAL = 'helveticaneue';
export const FONT_BOLD = 'helveticaneuebold';
export const FONT_LIGHT = 'helveticaneuelight';
export const FONT_MEDIUM = 'helveticaneuemedium';
export const BORDER_RADIUS = 5;

const style = StyleSheet.create({
  text: {
    fontSize: FONTSIZE(14),
    fontFamily: 'helveticaneue',
    color: '#707070',
    backgroundColor: 'transparent'
  },
  textCaption: {
    fontSize: FONTSIZE(12),
    fontFamily: 'helveticaneue',
    color: '#9297D3',
    backgroundColor: 'transparent'
  },
  textCenter: {
    textAlign: 'center'
  },
  //Button
  button: {
    height: 41 * SCALE_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: (41 * SCALE_HEIGHT) / 2,
    paddingVertical: 8 * SCALE_HEIGHT,
    paddingHorizontal: 25 * SCALE_WIDTH,
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowRadius: 5
  },
  buttonBottom: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48 * SCALE_HEIGHT,
    bottom: 0,
    width: WIDTH_DEVICE,
    backgroundColor: '#AE92D3'
  },
  //textInput
  textInput: {
    fontSize: FONTSIZE(14),
    fontFamily: 'helveticaneue',
    color: '#9297D3',
    // fontWeight: '500',
    backgroundColor: 'transparent'
  },
  textButton: {
    fontSize: FONTSIZE(9),
    textAlign: 'left',
    fontFamily: 'helveticaneue',
    fontWeight: '500',
    backgroundColor: 'transparent'
  },
  viewInput: {
    flexDirection: 'row',
    borderColor: Platform.OS === 'ios' ? '#AE92D330' : '#70707010',
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 43 * SCALE_HEIGHT,
    borderRadius: (43 * SCALE_HEIGHT) / 2,
    paddingVertical: 8 * SCALE_HEIGHT,
    paddingHorizontal: 25 * SCALE_WIDTH,
    shadowColor: '#AE92D3',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3
  },
  //shadow
  shadow: {
    borderColor: Platform.OS === 'ios' ? '#AE92D330' : '#70707010',
    borderWidth: 1,
    shadowColor: '#AE92D3',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3
  },
  //header
  titleHeader: {
    fontSize: FONTSIZE(14),
    fontFamily: 'helveticaneue',
    color: '#AE92D3',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  header: {
    borderTopWidth: 0,
    height: headerHeight,
    width: WIDTH_DEVICE,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(true) : 0,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  //modal
  textModal: {
    fontSize: FONTSIZE(16),
    fontFamily: 'helveticaneue',
    color: '#9297D3',
    fontWeight: '600',
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'center'
  },
  viewModal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Platform.OS === 'ios' ? '#AE92D330' : '#70707010',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10 * SCALE_WIDTH,
    borderRadius: 15 * SCALE_HEIGHT,
    paddingVertical: 12 * SCALE_HEIGHT,
    paddingHorizontal: 20 * SCALE_WIDTH,
    shadowColor: '#AE92D3',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3
  },

  textNormal: {
    fontSize: FONTSIZE(14),
    fontFamily: 'helveticaneue',
    color: '#9297D3',
    backgroundColor: 'transparent'
  },
  //icon
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42 * SCALE_WIDTH,
    width: 42 * SCALE_WIDTH,
    borderRadius: (42 * SCALE_WIDTH) / 2,
    backgroundColor: '#AE92D3'
  }
});
export default style;
