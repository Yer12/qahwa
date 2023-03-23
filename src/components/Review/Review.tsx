import "./Review.scss";

const Review = () => {
  return (
    <div className="review">
      <div className="container">
        <h1 className="title">🚹 Reviews</h1>
        <p className="subtitle">
          Whatever it is you want to accomplish in life,
          Things can help you get there. Install the app
          today and see what you can do!
        </p>
        <div className="review-list">
          <div className="review-list_item"></div>
          <div className="review-list_item"></div>
          <div className="review-list_item"></div>
          <div className="review-list_item"></div>
          <div className="review-list_item"></div>
          <div className="review-list_item"></div>
        </div>
      </div>
    </div>
  )
}

export default  Review;
