import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_REVIEW, CLEAR_PRODUCTS } from '../../actions/product_actions';

const productsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {[action.product.id]: action.product});
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_REVIEW:
      const newState = Object.assign({}, state);
      return newState;
      // const { review, averageRating } = action;
      // newState[review.productId].reviewIds.push(review.id);
      // newState[review.productId].averageRating = averageRating;
    case CLEAR_PRODUCTS:
      return {};
    default:
      return state;
  }
}

export default productsReducer;