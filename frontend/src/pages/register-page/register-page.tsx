import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { RegisterForm, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  isAuthRequesting,
  isUserAuth,
  isUserCoach,
  resetUserForm,
} from '../../store';
import { useEffect } from 'react';
import { AppRoute } from '../../consts';

function RegisterPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(isUserAuth);
  const isCoach = useAppSelector(isUserCoach);
  const isDataLoading = useAppSelector(isAuthRequesting);

  useEffect(() => {
    if (isAuth) {
      navigate(isCoach ? AppRoute.Account : AppRoute.Main);
    }
    dispatch(resetUserForm());
  }, [navigate, dispatch, isAuth, isCoach]);

  if (isDataLoading) {
    return <Preloader />;
  }

  return (
    <div className="popup-form popup-form--sign-up">
      <Helmet>
        <title>Регистрация</title>
      </Helmet>
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__title-wrapper">
            <h1 className="popup-form__title">Регистрация</h1>
          </div>
          <div className="popup-form__form">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
