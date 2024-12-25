import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getCatalogPage,
  getTrainingsFilterDuration,
  getTrainingsFilterMaxCalories,
  getTrainingsFilterMaxPrice,
  getTrainingsFilterMaxRating,
  getTrainingsFilterMinCalories,
  getTrainingsFilterMinPrice,
  getTrainingsFilterMinRating,
  getTrainingsFilterTypes,
  getTrainingsList,
  getTrainingsSortingType,
  isTrainingsListLoading,
} from '../../store';
import {
  getAllTrainingsAction,
  getCoachTrainingsAction,
} from '../../store/api-actions';
import { CatalogButtons, Preloader, TrainingCatalogCard } from '../index';
import { TrainingsListType, TrainingsListTypeDiffs } from './training-catalog-list.const';

type TrainingCatalogListProps = {
  type: TrainingsListType;
};

function TrainingCatalogList({ type }: TrainingCatalogListProps): JSX.Element {
  const { styleClass, cardStyleClass } = TrainingsListTypeDiffs[type];
  const dispatch = useAppDispatch();
  const trainings = useAppSelector(getTrainingsList);
  const page = useAppSelector(getCatalogPage);
  const minPriceFilter = useAppSelector(getTrainingsFilterMinPrice);
  const maxPriceFilter = useAppSelector(getTrainingsFilterMaxPrice);
  const minCaloriesFilter = useAppSelector(getTrainingsFilterMinCalories);
  const maxCaloriesFilter = useAppSelector(getTrainingsFilterMaxCalories);
  const minRatingFilter = useAppSelector(getTrainingsFilterMinRating);
  const maxRationFilter = useAppSelector(getTrainingsFilterMaxRating);
  const durationFilter = useAppSelector(getTrainingsFilterDuration);
  const typesFilter = useAppSelector(getTrainingsFilterTypes);
  const sorting = useAppSelector(getTrainingsSortingType);
  const isDataLoading = useAppSelector(isTrainingsListLoading);

  useEffect(() => {
    if (type === TrainingsListType.CoachTrainings) {
      dispatch(getCoachTrainingsAction());
      return;
    }
    dispatch(getAllTrainingsAction());
  }, [
    dispatch,
    type,
    page,
    minPriceFilter,
    maxPriceFilter,
    minCaloriesFilter,
    maxCaloriesFilter,
    minRatingFilter,
    maxRationFilter,
    durationFilter,
    typesFilter,
    sorting,
  ]);

  if (isDataLoading) {
    return <Preloader />;
  }

  if (!trainings.length) {
    return (
      <p className="empty-list-text">
        Тренировок с выбранными характеристиками не найдено
      </p>
    );
  }

  return (
    <>
      <ul className={`${styleClass}__list`}>
        {trainings.map((training) => (
          <TrainingCatalogCard
            styleClass={cardStyleClass}
            training={training}
            key={`training-${training.id}`}
          />
        ))}
      </ul>
      <CatalogButtons styleClass={`${styleClass}__show-more`} />
    </>
  );
}

export default TrainingCatalogList;
