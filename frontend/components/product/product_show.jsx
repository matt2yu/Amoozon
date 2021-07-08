import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showFeedback: false
    };
    this.addToCart = this.addToCart.bind(this);
    this.successfulAddToCart = this.successfulAddToCart.bind(this);


  }

  componentWillMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.product_id !== nextProps.match.params.productId) {
        this.props.fetchProduct(nextProps.match.params.productId);
    }
  }
  
  addToCart() {
    this.props.createCartItem({ user_id: this.props.userId, product_id: this.props.product.id, quantity: 1}).then(()=>this.setState({showFeedback: true}));
  }
  
  successfulAddToCart() {
    if (!this.state.showFeedback) {
      return null;
    } else {
      return(
        <div className="cart-confirmation">
          <h3>Added to Cart</h3>
          <button className="write-review continue-shopping" onClick={()=>this.setState({showFeedback: false})}>Continue Shopping</button>
          <Link className="add-to-cart view-cart" to="/cart">View Cart</Link>
        </div>
      )
    }
  }


  render() {
    const { product, reviews, users } = this.props;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let allReviews = reviews.map((review, i) => <ReviewIndexItem user={users[review.user_id]} review={review} key={`review-${i}`} />);
    
    let slowDelivery = new Date();
    slowDelivery.setDate(slowDelivery.getDate() + 7);
    let slowDay = days[slowDelivery.getDay()];
    let slowMonth = months[slowDelivery.getMonth()];
    let slowDate = slowDelivery.getDate();

    let fastDelivery = new Date();
    fastDelivery.setDate(fastDelivery.getDate() + 2);
    let fastDay = days[fastDelivery.getDay()];
    let fastMonth = months[fastDelivery.getMonth()];
    let fastDate = fastDelivery.getDate();

    const currentTime = new Date();
    const midnight = new Date(currentTime);
    midnight.setHours(24, 0, 0, 0);
    const hoursTilMidnight = Math.floor((midnight.getTime()-currentTime.getTime())/3600/1000);
    const minutesTilMidnight = Math.floor((midnight.getTime()-currentTime.getTime())/60/1000 - (60 * hoursTilMidnight));

    return(
      <div className="product-show-page">
        {this.successfulAddToCart()}
        <main className="product-info">
          <section>
            <h1>{product.name}</h1>
            <div>{product.average_rating ? (
              <div className="star-ratings-css-product">
                <div className="star-ratings-css-product-top" 
                  style={{width: `${parseFloat(product.average_rating).toFixed(1)}em`}}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="star-ratings-css-product-bottom">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>) : 'No Reviews yet'}
            </div>
            <span className="rating-count">{this.props.reviews.length} {this.props.reviews.length === 1 ? "rating" : "ratings"}</span>
            <hr />
            <div>Price: <span className="product-price">${parseFloat(product.price).toFixed(2)}</span> & FREE Returns</div>
            <hr />
            <h3 className="bold">About this item</h3>
            <li>{product.description}</li>
          </section>

          <aside>
            <h3><span className="product-price">${parseFloat(product.price).toFixed(2)}</span></h3>
            <div>& FREE Returns</div>
            <br />
            <p>FREE delivery: <span className="bold">{`${slowDay}, ${slowMonth} ${slowDate}`}</span></p>
            <br />
            <div>
              <div className="line-height">
                Fastest delivery: <span className="bold">{`${fastDay}, ${fastMonth} ${fastDate}`}</span><br></br>
                Order within {hoursTilMidnight} {hoursTilMidnight === 1 ? "hour" : "hours"} and {minutesTilMidnight} mins
              </div>
            </div>
            <p className="in-stock">In Stock.</p>
            <button onClick={()=>this.addToCart()} className="add-to-cart">Add to Cart</button>
            <div className="shipped-by line-height">
              <div><span className="gray">Ships from</span> &nbsp;&nbsp;Amoozon.com</div>
              <div><span className="gray">Sold by</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amoozon.com</div>
            </div>
          </aside>

        </main>
        <section className="reviews">
          <section className="review-ratings">
            <h2>Customer reviews</h2><br></br>
            <div>{product.average_rating ? (
            <div className="star-ratings-css-review">
              <div className="star-ratings-css-review-top" style={{width: `${parseFloat(product.average_rating).toFixed(1)}em`}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className="star-ratings-css-review-bottom">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                </div>
            </div>) : 'No Reviews yet'}</div>
            <p className="gray">{reviews.length} global {reviews.length === 1 ? "rating" : "ratings"}</p>
            <hr />
            <h3>Review this product</h3>
            <p>Share your thoughts with other customers</p>
            <Link to={`/products/${product.id}/review`}>
              <button type="button" className="write-review glow-on-click">Write a customer review</button>
            </Link>
            <hr></hr>
          </section>
          <section className="review-details">
            <h3>Top reviews from the United States</h3>
            <ul>
              {allReviews.length === 0 ? <li>There are no customer reviews yet.</li> : allReviews }
            </ul>
          </section>
        </section>
      </div>
    )
  };

};

export default ProductShow;