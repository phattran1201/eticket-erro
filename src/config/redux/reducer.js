import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import UserReducer from './reducers/userReducer';
// import ProductReducer from './reducers/productReducer';
// import PostReducer from './reducers/postReducer';
// import UserReducer from './reducers/userReducer';
// import AreaReducer from './reducers/areaReducer';
// import FilterReducer from './reducers/filterReducer';
// import profileProductReducer from './reducers/profileProductReducer';
// import profilePostReducer from './reducers/profilePostReducer';
// import categoryFilterReducer from './reducers/categoryFilterReducer';
// import NotificationReducer from './reducers/notificationReducer';
// import ConversationReducer from './reducers/conversationReducer';
// import TransactionReducer from './reducers/transactionReducer';
// import HistorydrawReducer from './reducers/historydrawReducer';
// import historyTransactionReducer from './reducers/historyTransactionReducer';
// import localReducer from './reducers/localReducer';
// import mediaReducer from './reducers/mediaReducer';
// import groupReducer from './reducers/groupReducer';
// import organizationReducer from './reducers/organizationReducer';
// import PartnersReducer from './reducers/partnersReducer';
// import RatingReducer from './reducers/ratingReducer';
// import BlockingReducer from './reducers/blockingReducer';

const reducer = combineReducers({
  // post: persistReducer(
  //   {
  //     key: 'Post',
  //     storage: AsyncStorage
  //   },
  //   PostReducer
  // ),
  // product: persistReducer(
  //   {
  //     key: 'Product',
  //     storage: AsyncStorage
  //   },
  //   ProductReducer
  // ),
  user: persistReducer(
    {
      key: 'User',
      storage: AsyncStorage
    },
    UserReducer
  )
  // area: persistReducer(
  //   {
  //     key: 'Area',
  //     storage: AsyncStorage
  //   },
  //   AreaReducer
  // ),
  // filter: persistReducer(
  //   {
  //     key: 'Filter',
  //     storage: AsyncStorage
  //   },
  //   FilterReducer
  // ),
  // profileProduct: persistReducer(
  //   {
  //     key: 'ProfileProduct',
  //     storage: AsyncStorage,
  //     blacklist: ['listProductForUser']
  //   },
  //   profileProductReducer
  // ),
  // profilePost: persistReducer(
  //   {
  //     key: 'ProfilePost',
  //     storage: AsyncStorage
  //   },
  //   profilePostReducer
  // ),
  // categoryFilter: persistReducer(
  //   {
  //     key: 'CategoryFilter',
  //     storage: AsyncStorage
  //   },
  //   categoryFilterReducer
  // ),
  // notification: persistReducer(
  //   {
  //     key: 'Notification',
  //     storage: AsyncStorage
  //   },
  //   NotificationReducer
  // ),
  // conversation: persistReducer(
  //   {
  //     key: 'Conversation',
  //     storage: AsyncStorage
  //   },
  //   ConversationReducer
  // ),
  // transaction: persistReducer(
  //   {
  //     key: 'Transaction',
  //     storage: AsyncStorage
  //   },
  //   TransactionReducer
  // ),
  // drawmoney: persistReducer(
  //   {
  //     key: 'Drawmoney',
  //     storage: AsyncStorage
  //   },
  //   HistorydrawReducer
  // ),
  // wallet: persistReducer(
  //   {
  //     key: 'Wallet',
  //     storage: AsyncStorage
  //   },
  //   historyTransactionReducer
  // ),
  // local: persistReducer(
  //   {
  //     key: 'Local',
  //     storage: AsyncStorage
  //   },
  //   localReducer
  // ),
  // media: persistReducer(
  //   {
  //     key: 'media',
  //     storage: AsyncStorage
  //   },
  //   mediaReducer
  // ),
  // group: persistReducer(
  //   {
  //     key: 'Group',
  //     storage: AsyncStorage
  //   },
  //   groupReducer
  // ),
  // organization: persistReducer(
  //   {
  //     key: 'Organization',
  //     storage: AsyncStorage
  //   },
  //   organizationReducer
  // ),
  // partners: PartnersReducer,
  // rating: RatingReducer,
  // blocking: BlockingReducer
});

export default reducer;
