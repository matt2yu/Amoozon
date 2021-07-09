import { connect } from 'react-redux';
import Cart from './cart';

const mapState = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  cart_items: Object.values(entities.cartItems)
});

export default connect(mapState)(Cart);