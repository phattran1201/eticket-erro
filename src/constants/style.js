/* eslint-disable no-mixed-operators */
import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  FS,
  SCALE_RATIO_HEIGHT_BASIS,
  SCALE_RATIO_WIDTH_BASIS,
  WIDTH_DEVICE,
  headerHeight
} from './Constants';

const style = StyleSheet.create({
  text: {
    fontSize: FS(13),
    fontFamily: 'helveticaneue',
    color: '#707070',
    backgroundColor: 'transparent'
  },
  textCaption: {
    fontSize: FS(10),
    fontFamily: 'helveticaneue',
    color: '#9297D3',
    backgroundColor: 'transparent'
  },
  textCenter: {
    textAlign: 'center'
  },
  //Button
  button: {
    height: 41 * SCALE_RATIO_HEIGHT_BASIS,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: (41 * SCALE_RATIO_HEIGHT_BASIS) / 2,
    paddingVertical: 8 * SCALE_RATIO_HEIGHT_BASIS,
    paddingHorizontal: 25 * SCALE_RATIO_WIDTH_BASIS,
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowRadius: 5
  },
  buttonBottom: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48 * SCALE_RATIO_HEIGHT_BASIS,
    bottom: 0,
    width: WIDTH_DEVICE(),
    backgroundColor: '#AE92D3'
  },
  //textInput
  textInput: {
    fontSize: FS(14),
    fontFamily: 'helveticaneue',
    color: '#9297D3',
    // fontWeight: '500',
    backgroundColor: 'transparent'
  },
  textButton: {
    fontSize: FS(9),
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
    height: 43 * SCALE_RATIO_HEIGHT_BASIS,
    borderRadius: (43 * SCALE_RATIO_HEIGHT_BASIS) / 2,
    paddingVertical: 8 * SCALE_RATIO_HEIGHT_BASIS,
    paddingHorizontal: 25 * SCALE_RATIO_WIDTH_BASIS,
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
    fontSize: FS(14),
    fontFamily: 'helveticaneue',
    color: '#AE92D3',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  header: {
    borderTopWidth: 0,
    height: headerHeight,
    width: WIDTH_DEVICE(),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(true) : 0,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  //modal
  textModal: {
    fontSize: FS(16),
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
    marginHorizontal: 10 * SCALE_RATIO_WIDTH_BASIS,
    borderRadius: 15 * SCALE_RATIO_HEIGHT_BASIS,
    paddingVertical: 12 * SCALE_RATIO_HEIGHT_BASIS,
    paddingHorizontal: 20 * SCALE_RATIO_WIDTH_BASIS,
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
    fontSize: FS(14),
    fontFamily: 'helveticaneue',
    color: '#9297D3',
    backgroundColor: 'transparent'
  },
  //icon
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42 * SCALE_RATIO_WIDTH_BASIS,
    width: 42 * SCALE_RATIO_WIDTH_BASIS,
    borderRadius: (42 * SCALE_RATIO_WIDTH_BASIS) / 2,
    backgroundColor: '#AE92D3'
  }
});

export default style;
