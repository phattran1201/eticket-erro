/* eslint-disable no-undef */
import { BASE_URL } from '../constants/Constants';

export const uploadImageToGroup = (groupId, listImages, token) =>
  new Promise((resolve, reject) => {
    const dataImage = [];
    if (listImages.length === 0) resolve([]);
    let index = -1;
    listImages.forEach(image => {
      const body = new FormData();
      const indexOfDot = image.uri.lastIndexOf('.');
      const fileName = image.uri.slice(indexOfDot - 1, image.uri.length);
      body.append('image', {
        uri: image.uri,
        name: image.fileName ? image.fileName : fileName,
        type: 'multipart/form-data'
      });

      fetch(`${BASE_URL}group/${groupId}/image/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body
      })
        .then(res => res.json())
        .then(res => {
          dataImage.push(res.results.object.url);
        })
        .catch(e => reject(e))
        .done(() => {
          index++;
          if (index === listImages.length - 1) {
            resolve(dataImage);
          }
        });
    });
  });
