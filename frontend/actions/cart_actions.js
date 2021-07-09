import * as APIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

export const receiveCartItems = ({ cart_items, products }) => ({
  type: RECEIVE_CART_ITEMS,
  cart_items,
  products
});

export const dropCartItem = cart_item => ({
  type: DELETE_CART_ITEM,
  cart_item
});

export const fetchCart = () => dispatch => (
  APIUtil.getCart().then(payload => dispatch(receiveCartItems(payload)))
);

export const deleteCartItem = cartId => dispatch => (
  APIUtil.removeCartItem(cartId).then(cart_item => dispatch(dropCartItem(cart_item)))
);

export const createCartItem = cart_item => dispatch => (
  APIUtil.addCartItem(cart_item).then(payload => dispatch(receiveCartItems(payload)))
);

export const updateCartItem = cart_item => dispatch => (
  APIUtil.updateQuantity(cart_item).then(payload => dispatch(receiveCartItems(payload)))
);