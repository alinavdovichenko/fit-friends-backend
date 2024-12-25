import {Helmet} from 'react-helmet-async';
import { AppRoute, PopupKey } from '../../consts';
import {
  FeedbackForm,
  ReviewsList,
  BuyForm,
  Popup,
  TrainingCard,
  Preloader,
} from '../../components';

import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getTrainingId,
  isUserHaveAccessToTraining,
  isTrainingBalanceExists,
  isTrainingInfoLoading,
  setActiveRoute,
  setCommentForm,
  setActivePopup,
  isTrainingInfoHasError,
} from '../../store';
import {
  getTrainingAction,
} from '../../store/api-actions';
import { useEffect } from 'react';
import { NotFoundPage } from '../../pages';


function TrainingPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { trainingId } = useParams();
  const isUserHaveAccess = useAppSelector(isUserHaveAccessToTraining);
  const isBalanceExists = useAppSelector(isTrainingBalanceExists);
  const currentWorkoutId = useAppSelector(getTrainingId);
  const isDataLoading = useAppSelector(isTrainingInfoLoading);
  const hasError = useAppSelector(isTrainingInfoHasError);

  useEffect(() => {
    if (currentWorkoutId !== trainingId && !isDataLoading) {
      dispatch(getTrainingAction(trainingId as string));
    }
    if (!isUserHaveAccess && currentWorkoutId === trainingId) {
      navigate(AppRoute.Account);
    }
    dispatch(setActiveRoute());
  }, [
    navigate,
    dispatch,
    trainingId,
    currentWorkoutId,
    isDataLoading,
    isUserHaveAccess,
  ]);

  const handleAddCommentButtonClick = () => {
    dispatch(setCommentForm(trainingId as string));
    dispatch(setActivePopup(PopupKey.Feedback));
  };

  if (isDataLoading) {
    return <Preloader />;
  }

  if (hasError) {
    return <NotFoundPage />;
  }

  return (
    <section className="inner-page">
      <Helmet>
        <title>Карточка тренировки</title>
      </Helmet>
      <div className="container">
        <div className="inner-page__wrapper">
          <h1 className="visually-hidden">Карточка тренировки</h1>
          <aside className="reviews-side-bar">
            <button
              className="btn-flat btn-flat--underlined reviews-side-bar__back"
              type="button"
              onClick={() => navigate(AppRoute.Trainings)}
            >
              <svg width={14} height={10} aria-hidden="true">
                <use xlinkHref="#arrow-left" />
              </svg>
              <span>Назад</span>
            </button>
            <h2 className="reviews-side-bar__title">Отзывы</h2>
            <ReviewsList />
            <button
              className="btn btn--medium reviews-side-bar__button"
              type="button"
              disabled={!isBalanceExists}
              onClick={handleAddCommentButtonClick}
            >
              Оставить отзыв
            </button>
          </aside>
          <TrainingCard />
        </div>
      </div>
      <Popup type={PopupKey.Feedback} title="Оставить отзыв">
        <FeedbackForm />
      </Popup>
      <Popup type={PopupKey.Buy} title="Купить тренировку">
        <BuyForm />
      </Popup>
    </section>
  );
}

export default TrainingPage;
