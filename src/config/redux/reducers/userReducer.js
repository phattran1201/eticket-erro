import update from 'react-addons-update';
import {
  UPDATE_CURRENT_USER_DATA,
  UPDATE_CURRENT_TOKEN,
  UPDATE_USER_SETTINGS,
  UPDATE_USER_TYPE,
  SELECT_CHILDREN,
  GET_LINK
} from '../../../constants/Constants';

const initialState = {
  token: '',
  userData: null,
  selectedChildren: 0,
  listLink: {}
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER_DATA:
      return update(state, {
        userData: {
          $set: action.payload
        }
      });
    case UPDATE_CURRENT_TOKEN:
      return update(state, {
        token: {
          $set: action.payload
        }
      });
    case UPDATE_USER_SETTINGS:
      return update(state, {
        currentSettings: {
          $set: action.payload
        }
      });
    case UPDATE_USER_TYPE:
      return update(state, {
        userData: {
          $set: {
            ...state.userData,
            user_type: action.payload
          }
        }
      });
    case SELECT_CHILDREN:
      return update(state, {
        selectedChildren: {
          $set: action.payload
        }
      });
    case GET_LINK:
      return update(state, {
        listLink: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
};

export default UserReducer;
