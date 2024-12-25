import { useNavigate } from 'react-router-dom';
import { CreateTrainingForm } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { isUserCoach, resetTrainingForm, setActiveRoute } from '../../store';
import { useEffect } from 'react';
import { AppRoute } from '../../consts';

function CreateTrainingPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isCoach = useAppSelector(isUserCoach);

  useEffect(() => {
    if (!isCoach) {
      navigate(AppRoute.Main);
      return;
    }
    dispatch(resetTrainingForm());
    dispatch(setActiveRoute(AppRoute.CreateTraining));
  }, [navigate, dispatch, isCoach]);

  return (
    <div className="popup-form popup-form--create-training">
      <div className="popup-form__wrapper">
        <div className="popup-form__content">
          <div className="popup-form__title-wrapper">
            <h1 className="popup-form__title">Создание тренировки</h1>
          </div>
          <div className="popup-form__form">
            <CreateTrainingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrainingPage;
