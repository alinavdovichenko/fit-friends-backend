import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  isMainDataLoading,
  isUserCoach,
  setActiveRoute,
} from '../../store';
import { getMainPageDataAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { AppRoute } from '../../consts';
import {Helmet} from 'react-helmet-async';
import {
  LookForCompany,
  PopularTrainings,
  SpecialForYou,
  SpecialOffers,
  Preloader
} from '../../components';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isCoach = useAppSelector(isUserCoach);
  const isDataLoading = useAppSelector(isMainDataLoading);

  useEffect(() => {
    if (isCoach) {
      navigate(AppRoute.Account);
      return;
    }
    dispatch(getMainPageDataAction());
    dispatch(setActiveRoute(AppRoute.Main));
  }, [navigate, dispatch, isCoach]);

  if (isDataLoading) {
    return <Preloader />;
  }
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <h1 className="visually-hidden">
        FitFriends — Время находить тренировки, спортзалы и друзей спортсменов
      </h1>
      <SpecialForYou />
      <SpecialOffers />
      <PopularTrainings />
      <LookForCompany />
    </>
  );
}
export default MainPage;
