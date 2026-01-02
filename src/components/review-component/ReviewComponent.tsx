import './ReviewComponent.css'
import type {IReviews} from "../models/IProduct.ts";
import type {FC} from "react";

type ReviewPropsType = {
    review: IReviews
}
const ReviewComponent: FC<ReviewPropsType> = ({review}) => {
    return (
        <li>
            <h3><span>Name</span> - {review.reviewerName}. <span>Email</span> - {review.reviewerEmail}</h3>
            <h3><span>Comment</span> - {review.comment}</h3>
            <p><span>Rating</span> - {review.rating}</p>
            <p><span>Date</span> - {review.date}</p>
        </li>
    )
}
export default ReviewComponent;