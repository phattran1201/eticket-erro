import { StackNavigator } from 'react-navigation';
import { ROUTE_KEY } from '../constants/Constants';
// import EditProfileComponent from '../modules/screen/editprofile/EditProfileComponent';
// import ForgotPassComponent from '../modules/screen/forgotpass/ForgotPassComponent';
// import LoginComponent from '../modules/screen/login/LoginComponent';
// import PreLoginComponent from '../modules/screen/prelogin/PreLoginComponent';
// import EmailSignUpComponent from '../modules/screen/emailsignup/EmailSignUpComponent';
// import SmsVerificationComponent from '../modules/screen/smsverifycation/SmsVerificationComponent';
// import MainComponent from '../modules/screen/main/MainComponent';
// import ContentNotFoundComponent from '../modules/screen/notification/contentNotFoundComponent';
// import OtherProductDetailComponent from '../modules/screen/otherProductDetail/OtherProductDetailComponent'; //eslint-disable-line
// import PopupMenuAreaFilterComponent from '../modules/screen/popupMenuAreaFilter/PopupMenuAreaFilterComponent'; //eslint-disable-line
// import PopupMenuCategoryFilterComponent from '../modules/screen/popupMenuCategoryFilter/PopupMenuCategoryFilterComponent'; //eslint-disable-line
// import PreviewBeforePostComponent from '../modules/screen/previewbeforepost/PreviewBeforePostComponent'; //eslint-disable-line
// import PrivatePermissionComponent from '../modules/screen/privatepermission/PrivatePermissionComponent'; //eslint-disable-line
// import RegisterComponent from '../modules/screen/register/RegisterComponent';
// import SplashComponent from '../modules/screen/splash/SplashComponent';
// import WebRTC from '../modules/screen/webrtc/WebRTC';
// import IncomingCallNotification from '../modules/view/IncomingCallNotification';
// import PartnersDetailComponent from '../modules/screen/partnersDetail/PartnersDetailComponent';
// import SignInComponent from '../modules/screen/signin/SignInComponent';
// import AddProfileComponent from '../modules/screen/addprofile/AddProfileComponent';
// import InterestComponent from '../modules/screen/interest/InterestComponent';
// import CreatePostComponent from '../modules/screen/createPost/CreatePostComponent';
// import ExchangeComponent from '../modules/screen/exchange/ExchangeComponent';
// import PaypalComponent from '../modules/screen/paypal/PaypalComponent';
// import FavouriteTopicComponent from '../modules/screen/favouriteTopic/FavouriteTopicComponent';
// import SettingsComponent from '../modules/screen/settings/SettingsComponent';
// import HistoryComponent from '../modules/screen/history/HistoryComponent';
// import MessageComponent from '../modules/screen/message/MessageComponent';
// import DetailMessageComponent from '../modules/screen/detailMessage/DetailMessageComponent';
// import BlockFriendsComponent from '../modules/screen/blockfriends/BlockFriendsComponent';
// import TermsConditionsComponent from '../modules/screen/termsconditions/TermsConditionsComponent';
// import TermsConditionsWebView from '../modules/screen/termsconditionwebview/TermsConditionsWebView';
// import StoreComponent from '../modules/screen/store/StoreComponent';
// import MyPostComponent from '../modules/screen/posting/MyPostComponent';
// import ExchangeTab from '../modules/screen/exchangetab/ExchangeTopTab';

const routeAppConfiguration = {
  // [ROUTE_KEY.MAIN]: {
  //   screen: MainComponent,
  //   navigationOptions: {
  //     header: null,
  //     gesturesEnabled: false
  //   }
  // },
  // [ROUTE_KEY.SPLASH]: {
  //   screen: SplashComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.LOGIN]: {
  //   screen: LoginComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.PRELOGIN]: {
  //   screen: PreLoginComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.EMAILSIGNUP]: {
  //   screen: EmailSignUpComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.SMSVERIFY]: {
  //   screen: SmsVerificationComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.SIGNIN]: {
  //   screen: SignInComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.ADDPROFILE]: {
  //   screen: AddProfileComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.BLOCKFRIENDS]: {
  //   screen: BlockFriendsComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.TERMSCONDITIONS]: {
  //   screen: TermsConditionsComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.TERMSCONDITIONSWEBVIEW]: {
  //   screen: TermsConditionsWebView,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.INTEREST]: {
  //   screen: InterestComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.STORE]: {
  //   screen: StoreComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.REGISTER]: {
  //   screen: RegisterComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.FORGOT_PASS]: {
  //   screen: ForgotPassComponent,
  //   navigationOptions: { header: null }
  // },
  // [ROUTE_KEY.EDIT_PROFILE]: {
  //   screen: EditProfileComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.WEB_RTC]: {
  //   screen: WebRTC,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.CONTENT_NOT_FOUND]: {
  //   screen: ContentNotFoundComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.INCOMING_CALL_NOTIFICATION]: {
  //   screen: IncomingCallNotification,
  //   navigationOptions: {
  //     header: null,
  //     title: 'videocall'
  //   }
  // },
  // [ROUTE_KEY.PARTNER_DETAIL_COMPONENT]: {
  //   screen: PartnersDetailComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.CREATE_POST_COMPONENT]: {
  //   screen: CreatePostComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.MY_POST_COMPONENT]: {
  //   screen: MyPostComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.EXCHANGE_COMPONENT]: {
  //   screen: ExchangeComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.PAYPAL_COMPONENT]: {
  //   screen: PaypalComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.EXCHANGE_TAB]: {
  //   screen: ExchangeTab,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.FAVOURITE_TOPIC_COMPONENT]: {
  //   screen: FavouriteTopicComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.SETTINGS_COMPONENT]: {
  //   screen: SettingsComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.HISTORY_COMPONENT]: {
  //   screen: HistoryComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.MESSAGE_COMPONENT]: {
  //   screen: MessageComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  // [ROUTE_KEY.DETAIL_MESSAGE_COMPONENT]: {
  //   screen: DetailMessageComponent,
  //   navigationOptions: {
  //     header: null
  //   }
  // }
};

const stackAppConfiguration = {
  initialRouteName: ROUTE_KEY.SPLASH,
  navigationOptions: {
    gesturesEnabled: true
  }
};

export const AppNavigator = StackNavigator(routeAppConfiguration, stackAppConfiguration);
