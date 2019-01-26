/* eslint-disable import/no-unresolved */
import { CameraRoll } from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import {
  IMAGE_RESIZE_QUALITY,
  IMAGE_RESIZE_MAXWIDTH,
  IMAGE_RESIZE_MAXHIEGHT
} from '../constants/Constants';
import strings from '../constants/Strings';

const ImagePicker = require('react-native-image-picker');

const options = {
  title: strings.image_picker_title,
  takePhotoButtonTitle: strings.take_photo_button_title,
  chooseFromLibraryButtonTitle: strings.choose_from_library_button_title,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export const showImagePicker = () =>
  new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        reject();
      } else if (response.error) {
        reject();
      } else if (response.customButton) {
        reject();
      } else {
        ImageResizer.createResizedImage(
          response.uri,
          IMAGE_RESIZE_MAXWIDTH,
          IMAGE_RESIZE_MAXHIEGHT,
          'JPEG',
          IMAGE_RESIZE_QUALITY
        )
          .then(({ uri }) => resolve({ uri }))
          .catch(err => reject(err));
      }
    });
  });

export const launchCamera = () =>
  new Promise((resolve, reject) => {
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        reject();
      } else if (response.error) {
        reject();
      } else if (response.customButton) {
        reject();
      } else {
        ImageResizer.createResizedImage(
          response.uri,
          IMAGE_RESIZE_MAXWIDTH,
          IMAGE_RESIZE_MAXHIEGHT,
          'JPEG',
          IMAGE_RESIZE_QUALITY
        )
          .then(({ uri }) => resolve({ uri }))
          .catch(err => reject(err));
      }
    });
  });

export const cameraRoll = () =>
  new Promise((resolve, reject) => {
    CameraRoll.getPhotos({
      first: 100,
      assetType: 'Photos'
    })
      .then(r => {
        const photos = [];
        const index = -1;
        resolve(
          r.edges.map(e => ({
            uri: e.node.image.uri,
            fileName: e.node.image.filename
          }))
        );
        // r.edges.forEach((e, i, array) => {
        //   ImageResizer.createResizedImage(e.node.image.uri, 400, 200, 'JPEG', 20)
        //   .then(({ uri }) => {
        //     photos.push({
        //       uri,
        //       fileName: e.node.image.filename,
        //       checked: false,
        //     });
        //     if (index >= array.length - 1) resolve(photos);
        //   })
        //   .catch(err => reject(err));

        //   TODO: Don't resize images here as there are so much work to do, the UI couldn't render properly
        //   photos.push({
        //         uri: e.node.image.uri,
        //         fileName: e.node.image.filename,
        //       });
        //   index++;
        //   console.log('hinodi xxxxxxx index, array.length - 1', index, array.length);
        //   if (index >= array.length - 1) resolve(photos);
        // });
      })
      .catch(err => {
        // console.log('hinodi err cameraroll', err);
        reject(err);
      });
  });

export const launchImageLibrary = () =>
  new Promise((resolve, reject) => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        reject();
      } else if (response.error) {
        reject();
      } else if (response.customButton) {
        reject();
      } else {
        ImageResizer.createResizedImage(
          response.uri,
          IMAGE_RESIZE_MAXWIDTH,
          IMAGE_RESIZE_MAXHIEGHT,
          'JPEG',
          IMAGE_RESIZE_QUALITY
        )
          .then(({ uri }) => resolve({ uri }))
          .catch(err => reject(err));
      }
    });
  });
