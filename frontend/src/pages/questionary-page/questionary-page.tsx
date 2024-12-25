import {Helmet} from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { QuestionaryForm, Preloader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { isAuthRequesting, isUserAuth, resetUserForm } from '../../store';
import { useEffect } from 'react';
import { AppRoute } from '../../consts';

function QuestionaryPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(isUserAuth);
  const isDataLoading = useAppSelector(isAuthRequesting);

  useEffect(() => {
    if (!isAuth) {
      navigate(AppRoute.Login);
    }
    dispatch(resetUserForm());
  }, [navigate, dispatch, isAuth]);

  if (isDataLoading) {
    return <Preloader />;
  }
  return (
    <div className="popup-form popup-form--questionnaire-user">
      <Helmet>
        <title>Опросник</title>
      </Helmet>
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__form">
            <QuestionaryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionaryPage;
