import { Review } from '../../types/review';
import { AppRoute, IMAGE_PLACEHOLDER } from '../../consts';
import { getFileUrl } from '../../utils/common';
import { Link } from 'react-router-dom';

type ReviewCardProps = {
  review: Review;
};

function ReviewCard({ review }: ReviewCardProps): JSX.Element {
  const { user, rating, text } = review;
  const { id, name, avatar } = user;

  return (
    <div className="reviews-side-bar__item">
      <div className="review">
        <div className="review__user-info">
          <div className="review__user-photo">
            <img
              src={avatar ? getFileUrl(avatar) : IMAGE_PLACEHOLDER}
              width={64}
              height={64}
              alt="Изображение пользователя"
            />
          </div>
          <Link to={`${AppRoute.Users}/${id}`}>
            <span className="review__user-name">{name}</span>
          </Link>
          <div className="review__rating">
            <svg width={16} height={16} aria-hidden="true">
              <use xlinkHref="#icon-star" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
        <p className="review__comment">{text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
