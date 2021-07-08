import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';

export const receiveProduct = ({product, users}) => ({
  type: RECEIVE_PRODUCT,
  product,
  users
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});

export const fetchProduct = productId => dispatch => {
  APIUtil.getProduct(productId).then(payload => dispatch(receiveProduct(payload)))
};

export const fetchProducts = (search, category) => dispatch => {
  APIUtil.getProducts(search, category).then(products => dispatch(receiveProducts(products)))
};

