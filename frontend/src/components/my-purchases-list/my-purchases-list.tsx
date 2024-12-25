import { CatalogButtons, TrainingCatalogCard } from '../index';
import { useAppSelector } from '../../hooks';
import {
  getTrainingsList,
} from '../../store';

function MyPurchasesList(): JSX.Element {
  const myPurchases = useAppSelector(getTrainingsList);
  const onlyActive = true;

  if (!myPurchases.length) {
    return (
      <p className="empty-list-text">
        {onlyActive
          ? 'У вас нет активных купленных тренировок'
          : 'У вас нет купленных тренировок'}
      </p>
    );
  }

  return (
    <>
      <ul className="my-purchases__list">
        {myPurchases.map((myPurchase) => (
          <TrainingCatalogCard
            training={myPurchase}
            styleClass="my-purchases__item"
            key={`training-${myPurchase.id}`}
          />
        ))}
      </ul>
      <CatalogButtons styleClass="my-purchases__show-more" />
    </>
  );
}

export default MyPurchasesList;
