import "./ReviewComponent.css"
import type {FC} from "react";
import type {IReview} from "../../models/IReview.ts";

type ReviewPropsType = {
    review: IReview
}
const ReviewComponent: FC<ReviewPropsType> = ({review}) => {
    return (
        <div  className="review">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <strong>{review.reviewerName}</strong>
                <span>{review.rating} ★</span>
            </div>
            <p style={{margin: '5px 0'}}>{review.comment}</p>
            <small style={{color: '#999'}}>{new Date(review.date).toLocaleDateString()}</small>
        </div>

    )
}
export default ReviewComponent