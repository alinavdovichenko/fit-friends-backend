import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {
  CaloriesPlan,
  AccountCertificates,
  UserForm,
  NewFeatureFiller,
  Preloader
} from '../../components';
import {
  isUserCoach,
  isUserDataReady,
  isUserDataUpdating,
  setActiveRoute,
} from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { AppRoute } from '../../consts';
import { CustomerLinks, CoachLinks } from './account-page.const';
import { getAuthUserAction } from '../../store/api-actions';

function AccountPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isCoach = useAppSelector(isUserCoach);
  const isDataReady = useAppSelector(isUserDataReady);
  const isDataUpdating = useAppSelector(isUserDataUpdating);

  useEffect(() => {
    if (!isDataReady) {
      dispatch(getAuthUserAction());
    }
    dispatch(setActiveRoute(AppRoute.Account));
  }, [dispatch, isDataReady]);

  if (!isDataReady || isDataUpdating) {
    return <Preloader />;
  }

  const getAccountLinks = () => {
    const list = isCoach ? CoachLinks : CustomerLinks;
    return list.map((link) => (
      <Link
        key={`link-${link.Icon}`}
        to={link.Route}
        className="thumbnail-link thumbnail-link--theme-light"
      >
        <div className="thumbnail-link__icon thumbnail-link__icon--theme-light">
          <svg width={30} height={26} aria-hidden="true">
            <use xlinkHref={link.Icon} />
          </svg>
        </div>
        <span className="thumbnail-link__text">{link.Label}</span>
      </Link>
    ));
  };

  return (
    <section className="inner-page">
      <Helmet>
        <title>Личный кабинет</title>
      </Helmet>
      <div className="container">
        <div className="inner-page__wrapper">
          <h1 className="visually-hidden">Личный кабинет</h1>
          <UserForm />
          <div className="inner-page__content">
            <div className={`personal-account-${isCoach ? 'coach' : 'user'}`}>
              {isCoach ? (
                <div className="personal-account-coach__navigation">
                  {getAccountLinks()}
                  <div className="personal-account-coach__calendar">
                    <NewFeatureFiller />
                  </div>
                </div>
              ) : (
                <div className="personal-account-user__schedule">
                  <CaloriesPlan />
                </div>
              )}
              <div
                className={`personal-account-${
                  isCoach ? 'coach' : 'user'
                }__additional-info`}
              >
                {isCoach ? (
                  <AccountCertificates />
                ) : (
                  <>
                    {getAccountLinks()}
                    <NewFeatureFiller />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountPage;
