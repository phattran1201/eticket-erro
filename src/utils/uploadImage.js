import { BASE_URL } from '../constants/Constants';

export const uploadImage = (listImages, token) =>
  new Promise((resolve, reject) => {
    const dataImage = [];
    if (listImages.length === 0) resolve([]);
    let index = -1;
    listImages.forEach(image => {
      if (image.uri.slice(0, 4) === 'http') {
        dataImage.push(image.uri);
        index++;
        if (index === listImages.length - 1) {
          resolve(dataImage);
        }
      } else {
        const body = new FormData();
        const indexOfDot = image.uri.lastIndexOf('.');
        const fileName = image.uri.slice(indexOfDot - 1, image.uri.length);
        body.append('image', {
          uri: image.uri,
          name: image.fileName ? image.fileName : fileName,
          type: 'multipart/form-data'
        });

        fetch(`${BASE_URL}image/upload`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body
        })
          .then(res => res.json())
          .then(res => {
            if (res.code === 200) {
              dataImage.push(res.results.object.url);
            } else {
              reject(res);
            }
          })
          .catch(e => reject(e))
          .done(() => {
            index++;
            if (index === listImages.length - 1) {
              resolve(dataImage);
            }
          });
      }
    });
  });
