import React from 'react';

const ReviewIndexItem = props => {
  return(
    <li className="review-item">
      {/* <div>&nbsp;{props.user.firstName}&nbsp;{props.user.lastName}</div> */}
      <p className="review-title">{props.review.title}</p>
      <p className="review-rating">Rating: {props.review.rating}</p>
      <p className="review-body">{props.review.body}</p>
    </li>
  )
}

export default ReviewIndexItem;