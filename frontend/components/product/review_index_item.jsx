import React from 'react';
import { GiCow } from 'react-icons/gi';

const ReviewIndexItem = props => {
  return(
    <li className="review-item">
      <div><GiCow />&nbsp;{props.user.first_name}&nbsp;{props.user.last_name}</div>
      <p className="review-title">{props.review.title}</p>
      <p className="review-rating">Rating: {props.review.rating}</p>
      <p className="review-body">{props.review.body}</p>
    </li>
  )
}

export default ReviewIndexItem;