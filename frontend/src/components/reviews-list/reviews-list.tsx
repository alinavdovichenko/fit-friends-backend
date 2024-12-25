import { ReviewCard, Preloader } from '../index';
import { useAppSelector } from '../../hooks';
import { getTrainingComments, isTrainingInfoLoading } from '../../store';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector(getTrainingComments);
  const isDataLoading = useAppSelector(isTrainingInfoLoading);

  if (isDataLoading) {
    return <Preloader />;
  }

  return (
    <div className="reviews-side-bar__container">
      {reviews.length ? (
        <ul className="reviews-side-bar__list">
          {reviews.map((review) => (
            <ReviewCard review={review} key={`review-${review.id}`} />
          ))}
        </ul>
      ) : (
        <p>Отзывов пока нет. Желаете быть первым?</p>
      )}
    </div>
  );
}

export default ReviewsList;
