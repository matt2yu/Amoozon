import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  fetchProducts: (search, category) => dispatch(fetchProducts(search, category))
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);
