import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_PRODUCT, RECEIVE_REVIEW } from '../../actions/product_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, action.users);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;