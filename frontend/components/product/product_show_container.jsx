import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapState = (state, { match }) => {
  const productId = parseInt(match.params.productId);
  const product = selectProduct(state.entities, productId);
  return {
    product,
    users: state.entities.users,
    userId: state.session.id
  };
};

const mapDispatch = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
});

export default withRouter(connect(mapState, mapDispatch)(ProductShow));
