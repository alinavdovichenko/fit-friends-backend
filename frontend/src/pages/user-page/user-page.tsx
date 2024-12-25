import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../consts';
import { NotFoundPage } from '../../pages';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { Preloader, UserInfo, UserInfoTrainings } from '../../components';
import {
  getUserId,
  isUserInfoHasError,
  isUserLoading,
  isUserRoleCoach,
  setActiveRoute,
} from '../../store';
import { getUserAction } from '../../store/api-actions';

function UserPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const currentUserId = useAppSelector(getUserId);
  const isUserCoach = useAppSelector(isUserRoleCoach);
  const isDataLoading = useAppSelector(isUserLoading);
  const hasError = useAppSelector(isUserInfoHasError);

  useEffect(() => {
    if (currentUserId !== userId && !isDataLoading) {
      dispatch(getUserAction(userId as string));
    }
    dispatch(setActiveRoute());
  }, [dispatch, userId, currentUserId, isDataLoading]);

  if (isDataLoading) {
    return <Preloader />;
  }

  if (hasError) {
    return <NotFoundPage />;
  }

  return (
    <div className="inner-page inner-page--no-sidebar">
      <Helmet>
        <title>Карточка пользователя</title>
      </Helmet>
      <div className="container">
        <div className="inner-page__wrapper">
          <button
            className="btn-flat inner-page__back"
            type="button"
            onClick={() => navigate(AppRoute.Users)}
          >
            <svg width={14} height={10} aria-hidden="true">
              <use xlinkHref="#arrow-left" />
            </svg>
            <span>Назад</span>
          </button>
          <div className="inner-page__content">
            <section className="user-card">
              <h1 className="visually-hidden">Карточка пользователя</h1>
              {isUserCoach ? (
                <div className="user-card__container">
                  <UserInfo />
                  <UserInfoTrainings />
                </div>
              ) : (
                <UserInfo />
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
