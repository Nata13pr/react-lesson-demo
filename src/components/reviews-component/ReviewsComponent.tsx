import './ReviewsComponent.css'
import type {FC} from "react";
import ReviewComponent from "../../review-component/ReviewComponent.tsx";
import type {IReviews} from "../../models/IProduct.ts";

type ReviewsPropsType = {
    reviews: IReviews[]
}
const ReviewsComponent: FC<ReviewsPropsType> = ({reviews}) => {
    return (
        <div>
            <p><span>Reviews : </span></p>
            <ul>
                {reviews.map((review, index) => <ReviewComponent key={index} review={review}/>)}
            </ul>
        </div>
    )
}
export default ReviewsComponent;