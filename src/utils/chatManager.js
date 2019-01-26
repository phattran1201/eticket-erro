// import { DeviceEventEmitter } from 'react-native';
// import moment from 'moment';
// import firebase from 'react-native-firebase';
// import request from './request';
// import {
//   BASE_URL,
//   CONVERSATION_API,
//   SOCKET_URL,
//   UPDATE_CONVERSATION_CONNECTION_STATE
// } from '../constants/Constants';
// import io from 'socket.io-client/dist/socket.io'; //eslint-disable-line
// import { uploadImage } from './uploadImage';
// import store from '../config/redux/store';

// export const socket = null;

// export function getConversation(conversationId, token) {
//   return new Promise((resolve, reject) => {
//     request
//       .get(
//         `${BASE_URL}${CONVERSATION_API}?fields=["$all"]&filter={"id": "${conversationId}"}`
//       )
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${token}`)
//       .finish((err, res) => {
//         if (
//           !err &&
//           res.body.code === 200 &&
//           res.body.results.objects &&
//           res.body.results.objects.rows &&
//           res.body.results.objects.rows.length > 0
//         ) {
//           resolve(res.body.results.objects.rows[0]);
//         } else {
//           reject(err);
//         }
//       });
//   });
// }

// export function checkExitsAndGetGroup(
//   otherUser,
//   userData,
//   listLocalConversation = []
// ) {
//   //return doc of 1 group depend on "group" we get from API
//   return new Promise((resolve, reject) => {
//     let isExistLocally = false;
//     listLocalConversation.forEach(conversation => {
//       //If a conversation directly to user exists, return it
//       if (conversation.users_in_conversation.length === 2 && !isExistLocally) {
//         if (
//           conversation.users_in_conversation[0].user_id === otherUser.id &&
//           conversation.users_in_conversation[1].user_id === userData.id &&
//           conversation.status
//         ) {
//           resolve(conversation);
//           isExistLocally = true;
//         }

//         if (
//           conversation.users_in_conversation[1].user_id === otherUser.id &&
//           conversation.users_in_conversation[0].user_id === userData.id &&
//           conversation.status
//         ) {
//           resolve(conversation);
//           isExistLocally = true;
//         }
//       }
//     });

//     if (isExistLocally) {
//       return;
//     }

//     request
//       .post(`${BASE_URL}${CONVERSATION_API}/get_conversation`)
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${userData.token}`)
//       .send({
//         user_id: otherUser.id
//       })
//       .finish((err, res) => {
//         let doesGroupExist = false;
//         if (
//           !err &&
//           res &&
//           res.body &&
//           res.body.results &&
//           res.body.results.object
//         ) {
//           if (res.body.results.object.rows.length > 0) {
//             const listConversation = res.body.results.object.rows;
//             listConversation.forEach(conversation => {
//               //If a conversation directly to user exists, return it
//               if (
//                 conversation.users_in_conversation.length === 2 &&
//                 !doesGroupExist
//               ) {
//                 if (
//                   conversation.users_in_conversation[0].user_id ===
//                     otherUser.id &&
//                   conversation.users_in_conversation[1].user_id === userData.id
//                 ) {
//                   resolve(conversation);
//                   doesGroupExist = true;
//                 }

//                 if (
//                   conversation.users_in_conversation[1].user_id ===
//                     otherUser.id &&
//                   conversation.users_in_conversation[0].user_id === userData.id
//                 ) {
//                   resolve(conversation);
//                   doesGroupExist = true;
//                 }
//               }
//             });
//           }
//         }

//         if (doesGroupExist) return;

//         //If a conversation directly to user does not exist, create the group and return it
//         createGroup(userData.token, otherUser.fullname, [otherUser.id])
//           .then(res2 => {
//             resolve(res2);
//           })
//           .catch(err2 => {
//             reject(err2);
//           });
//       });
//   });
// }

// function createGroup(token, title, userIds) {
//   return new Promise((resolve, reject) => {
//     request
//       .post(`${BASE_URL}${CONVERSATION_API}/create_conversation`)
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${token}`)
//       .send({
//         title,
//         member_ids: userIds
//       })
//       .finish((err, res) => {
//         // console.log('Create conversation done', err, res);
//         if (!err && res && res.body.code === 200) {
//           request
//             .get(
//               `${BASE_URL}${CONVERSATION_API}?fields=["$all"]&filter={"id": "${
//                 res.body.results.object.conversation.id
//               }"}`
//             )
//             .set('Content-Type', 'application/json')
//             .set('Authorization', `Bearer ${token}`)
//             .finish((err2, res2) => {
//               // console.log('Get the created conversation done', err2, res2);
//               if (!err2 && res2 && res2.body.code === 200) {
//                 resolve(
//                   res2.body &&
//                     res2.body.results &&
//                     res2.body.results.objects &&
//                     res2.body.results.objects.rows &&
//                     res2.body.results.objects.rows.length > 0
//                     ? res2.body.results.objects.rows[0]
//                     : {}
//                 );
//               } else {
//                 reject(err2 || res2);
//               }
//             });
//         } else {
//           reject(err || res);
//         }
//       });
//   });
// }

// export function getGroup(id) {
//   //return doc of 1 group depend on "id"
//   return new Promise((resolve, reject) => {
//     firebase
//       .firestore()
//       .collection('chat_rooms')
//       .get()
//       .then(docs => {
//         docs.forEach(doc => {
//           if (id === doc.data().department.id) {
//             resolve(doc);
//           }
//         });
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }
// export function closeSocketConnection() {
//   if (socket) {
//     socket.disconnect();
//     socket = null;
//   }
// }

// export function getListDataFiltered(
//   listConversation,
//   currentUserId,
//   listConnectedUserIds
// ) {
//   const listData = [];
//   listConversation.forEach(conversation => {
//     if (
//       conversation.users_in_conversation &&
//       conversation.users_in_conversation.length === 1 &&
//       conversation.users_in_conversation[0].user_id === currentUserId
//     ) {
//       return;
//     }
//     let userDataExists = true;

//     if (conversation.users_in_conversation) {
//       conversation.users_in_conversation.forEach(user => {
//         if (!user.user) {
//           userDataExists = false;
//         }
//       });
//     }

//     if (
//       userDataExists &&
//       conversation.messages &&
//       conversation.messages.length > 0
//     ) {
//       let thisConversationIsDisabled = false;
//       if (conversation.users_in_conversation.length === 2) {
//         conversation.users_in_conversation.forEach(userInConversation => {
//           if (
//             userInConversation.user_id !== currentUserId &&
//             userInConversation.user
//           ) {
//             conversation.avatar = userInConversation.user.avatar || '';
//             conversation.conversationName =
//               userInConversation.user.fullname || '';
//             conversation.conversationAge = userInConversation.user.age || '';
//             conversation.conversationFlag =
//               userInConversation.user.country_id || '';
//             conversation.conversationGender = userInConversation.user.sex || '';
//             conversation.conversationUserId = userInConversation.user.id || '';
//             conversation.conversationAvatar =
//               userInConversation.user.avatar || '';

//             conversation.visibility = undefined;
//             listConnectedUserIds.forEach(uid => {
//               if (userInConversation.user_id === uid) {
//                 conversation.visibility = userInConversation.user.visibility;
//               }
//             });
//           }
//           if (
//             userInConversation.user_id === currentUserId &&
//             !userInConversation.status
//           ) {
//             thisConversationIsDisabled = true;
//           }
//         });
//       }
//       if (!thisConversationIsDisabled) {
//         listData.push(conversation);
//       }
//     }
//   });
//   return listData.sort(
//     (a, b) =>
//       new Date(b.messages[0].created_at).getTime() -
//       new Date(a.messages[0].created_at).getTime()
//   );
// }

// //subcribe last message
// export function subscribeMessages(token, uid) {
//   if (!socket && token !== '') {
//     socket = io(SOCKET_URL, {
//       jsonp: false,
//       query: {
//         token,
//         uid
//       },
//       forceNew: true
//     });

//     socket.on('connect', () => {
//       // console.log('connect');
//     });

//     socket.on('connect_error', err => {
//       // console.log('connect_error', err);
//     });

//     socket.on('reconnect', () => {
//       // console.log('reconnect');
//     });

//     socket.on('connect_timeout', () => {
//       // console.log('connect_timeout');
//     });

//     socket.on('error', err => {
//       // console.log('error', err);
//     });

//     socket.on('disconnect', () => {
//       // console.log('disconnect');
//     });

//     socket.on('reconnect', () => {
//       // console.log('reconnect');
//     });

//     socket.on('message', data => {
//       DeviceEventEmitter.emit('onMessagesUpdate', data.message);
//       DeviceEventEmitter.emit('onConversationUpdate', data);
//     });

//     socket.on('connection_state', data => {
//       DeviceEventEmitter.emit('onConnectionStateChanged', data);
//       store.dispatch({
//         type: UPDATE_CONVERSATION_CONNECTION_STATE,
//         payload: { userIds: data.user_ids, isConnected: data.is_connected }
//       });
//     });

//     socket.on('vnpay_completed', data => {
//       DeviceEventEmitter.emit('onVNPayCompleted', data);
//     });

//     socket.on('being_called', data => {
//       console.log('being_called data', data);
//       DeviceEventEmitter.emit('being_called_from_other_user', data);
//     });

//     socket.on('call_ended', data => {
//       DeviceEventEmitter.emit('being_cancel_from_other_user', data);
//     });
//   }
// }

// export function loadMore20Messages(
//   token,
//   conversationId,
//   lastMessageObject,
//   onDoneFunc
// ) {
//   return new Promise((resolve, reject) => {
//     const url = lastMessageObject
//       ? `${BASE_URL}${CONVERSATION_API}/${conversationId}/messages?id=${
//           lastMessageObject.id
//         }&limit=20`
//       : `${BASE_URL}${CONVERSATION_API}/${conversationId}/messages`;
//     // //console.log('babi url', url);
//     request
//       .get(url)
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${token}`)
//       .finish((err, res) => {
//         if (!err && res.body.code === 200) {
//           //console.log(res);
//           const results = res.body.results.objects.rows;
//           onDoneFunc(results[results.length - 1]);
//           resolve(results);
//         } else {
//           reject(err);
//         }
//       });
//   });
// }

// export function sendMessage(
//   conversationId,
//   user,
//   type,
//   content,
//   currentTime = moment()
// ) {
//   return new Promise((resolve, reject) => {
//     // currentTime.add('hours', currentTime.utcOffset() / 60);
//     const currentTimeServerFormat = `${currentTime.format(
//       'YYYY-MM-DDTHH:mm:ss.SSS'
//     )}Z`;
//     request
//       .post(`${BASE_URL}${CONVERSATION_API}/${conversationId}/send`)
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${user.token}`)
//       .send({
//         message: {
//           type,
//           content,
//           timestamp: currentTimeServerFormat
//         }
//       })
//       .finish((err, res) => {
//         if (!err && res && res.body.code === 200) {
//           resolve(res.body.results.object.message);
//         } else {
//           reject(err);
//         }
//       });
//   });
// }

// //upload image to firestore and get image url:
// export function uploadAndGetImageURL(token, listImages) {
//   return new Promise((resolve, reject) => {
//     uploadImage(listImages, token)
//       .then(dataImages => {
//         if (dataImages && dataImages.length > 0) {
//           dataImages.map(item => ({ downloadURL: item, type: 'image' }));
//           resolve(dataImages);
//         } else {
//           reject();
//         }
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }
