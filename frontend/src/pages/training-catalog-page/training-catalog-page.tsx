import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AppRoute, ListItemsPortion } from '../../consts';
import { TrainingsFilter, TrainingCatalogList } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  isUserCoach,
  resetCatalogData,
  resetTrainingsFilters,
  setActiveRoute,
} from '../../store';
import { useEffect } from 'react';
import { TrainingsListType } from '../../components/training-catalog-list/training-catalog-list.const';
import { TrainingsFilterType } from '../../components/trainings-filter/trainings-filter.const';

function TrainingCatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isCoach = useAppSelector(isUserCoach);

  useEffect(() => {
    if (isCoach) {
      navigate(AppRoute.Account);
      return;
    }
    dispatch(resetCatalogData(ListItemsPortion.AllTrainings));
    dispatch(resetTrainingsFilters());
    dispatch(setActiveRoute(AppRoute.Trainings));
  }, [navigate, dispatch, isCoach]);

  return (
    <section className="inner-page">
      <Helmet>
        <title>Каталог тренировок</title>
      </Helmet>
      <div className="container">
        <div className="inner-page__wrapper">
          <h1 className="visually-hidden">Каталог тренировок</h1>
          <div className="gym-catalog-form">
            <h2 className="visually-hidden">Мои тренировки Фильтр</h2>
            <div className="gym-catalog-form__wrapper">
              <button
                className="btn-flat btn-flat--underlined gym-catalog-form__btnback"
                type="button"
                onClick={() => navigate(AppRoute.Account)}
              >
                <svg width={14} height={10} aria-hidden="true">
                  <use xlinkHref="#arrow-left" />
                </svg>
                <span>Назад</span>
              </button>
              <h3 className="gym-catalog-form__title">Фильтры</h3>
              < TrainingsFilter type={TrainingsFilterType.TrainingsCatalog} />
            </div>
          </div>
          <div className="training-catalog">
            <TrainingCatalogList type={TrainingsListType.TrainingsCatalog} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingCatalogPage;
