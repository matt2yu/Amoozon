import React from 'react';
import CartIndexItem from './cart_index_item';
import { Link } from 'react-router-dom';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      update: false,
      loaded: false
    };

    this.subtotal = this.subtotal.bind(this);
    this.quantity = this.quantity.bind(this);
  }

  changeState() {
    this.setState({update: true});
  }

  componentWillMount() {
    this.props.fetchCart().then(()=>this.setState({ loaded: true }))
  };

  subtotal() {
    let subtotal = this.props.cartItems.map(item => item.quantity * parseFloat(this.props.products[item.product_id].price));
    return subtotal.reduce((a,b) => a + b, 0).toFixed(2);
  };

  quantity() {
    let quantity = this.props.cartItems.map(item => item.quantity);
    return quantity.reduce((a,b) => a + b, 0);
  };

  emptyCart() {
    return(
      <div className="empty-cart-page">
        <div className="empty-cart">
          <div className="empty-cart-text">
            <h1>Your Amoozon Cart is empty.</h1>
            <p>Your Shopping Cart lives to serve. Give it purpose — fill it with dairy, cowbells, grass, and more.</p><br />
            <p>Continue shopping on the <Link className="link-to-home" to="/*">Amoozon.com homepage.</Link></p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.loaded) {
      let cartItems = this.props.cartItems.map((cartItem, i) => <CartIndexItem key={`cartItem-${i}`} cartItem={cartItem} product={this.props.products[cartItem.product_id]} fetchCart = {this.props.fetchCart} deleteCartItem={this.props.deleteCartItem} updateCartItem={this.props.updateCartItem}/>)
      if (cartItems.length === 0) {
        return(this.emptyCart())
      } else {
        return(
          <div className="shopping-cart">
            <ul className="cart-index">
              <h1>Shopping Cart</h1>
              <h3>Price</h3>
              { cartItems }
              <h2 className="subtotal-cart">Subtotal ({this.quantity()} items): <span className="bold">${this.subtotal()}</span></h2>
            </ul>
            <section className="cart-total">
              <h2 className="subtotal-cart subtotal">Subtotal ({this.quantity()} items): <span className="bold">${this.subtotal()}</span></h2>
              <div>
                <input type="checkbox" />&nbsp;
                <span>This order contains a gift</span>
              </div>
              <button className="auth-button proceed-to-checkout" type="button">Proceed to checkout</button>
            </section>
          </div>
        )
      }
    } else {
      return null;
    }
  }
}

export default CartIndex;