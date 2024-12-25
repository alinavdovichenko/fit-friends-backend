import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getTrainingId,
  getTrainingPrice,
  isUserCoach,
  isTrainingBalanceActive,
  isTrainingFormDataSending,
  isTrainingFormHaveErrors,
  isTrainingInfoEditing,
  setActivePopup,
  setOrderForm,
  setUpdateTrainingRequiredFields,
  setTrainingEditingStatus,
} from '../../store';
import {
  updateTrainingAction,
  updateTrainingVideoAction,
} from '../../store/api-actions';
import { PopupKey } from '../../consts';
import {
  TrainingInput
} from '../../components';
import { TrainingInputType } from '../training-input/training-input.const';
import { Preloader, TrainingVideo } from '../../components';
import Coach from './coach';
import Rating from './rating';
import Hashtags from './hashtags';
import SpecialStatus from './special-status';
import cn from 'classnames';

function TrainingCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const isCoach = useAppSelector(isUserCoach);
  const trainingId = useAppSelector(getTrainingId);
  const price = useAppSelector(getTrainingPrice);
  const isBalanceActive = useAppSelector(isTrainingBalanceActive);
  const isFormHaveError = useAppSelector(isTrainingFormHaveErrors);
  const isSending = useAppSelector(isTrainingFormDataSending);
  const isEdited = useAppSelector(isTrainingInfoEditing);

  const [file, setFile] = useState<Blob | null>(null);

  const handleFileUpload = () => {
    if (file) {
      dispatch(updateTrainingVideoAction({ trainingId, video: file })).then(
        () => {
          setFile(null);
        },
      );
    }
  };

  const handleEditButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    evt.preventDefault();
    if (!isEdited) {
      dispatch(setTrainingEditingStatus(true));
      return;
    }
    dispatch(setUpdateTrainingRequiredFields());
    if (!isFormHaveError) {
      if (file) {
        handleFileUpload();
      }
      dispatch(updateTrainingAction(trainingId));
    }
  };

  const handleBuyButtonClick = (): void => {
    dispatch(setOrderForm({ trainingId: trainingId, price: Number(price) }));
    dispatch(setActivePopup(PopupKey.Buy));
  };

  if (isSending) {
    return <Preloader />;
  }

  return (
    <div
      className={cn('training-card', {
        'training-card--edit': isEdited,
      })}
    >
      <div className="training-info">
        <h2 className="visually-hidden">Информация о тренировке</h2>
        <div className="training-info__header">
          <Coach />
          {isCoach ? (
            <button
              className={cn(
                'btn-flat btn-flat--light training-info__edit training-info__edit--edit',
                { 'btn-flat--underlined': isEdited },
              )}
              type="button"
              aria-label={isEdited ? 'Сохранить' : 'Редактировать'}
              onClick={handleEditButtonClick}
            >
              <svg width="12" height="12" aria-hidden="true">
                <use xlinkHref="#icon-edit"></use>
              </svg>
              <span>{isEdited ? 'Сохранить' : 'Редактировать'}</span>
            </button>
          ) : undefined}
        </div>
        <div className="training-info__main-content">
          <form method="post">
            <div className="training-info__form-wrapper">
              <div className="training-info__info-wrapper">
                <TrainingInput
                  type={TrainingInputType.Title}
                  isActive={isEdited}
                />
                <TrainingInput
                  type={TrainingInputType.Description}
                  isActive={isEdited}
                />
              </div>
              <div className="training-info__rating-wrapper">
                <Rating />
                <Hashtags />
              </div>
              <div className="training-info__price-wrapper">
                <TrainingInput
                  type={TrainingInputType.Price}
                  isActive={isEdited}
                />
                {isEdited ? <SpecialStatus /> : undefined}
                {isCoach ? undefined : (
                  <button
                    className="btn training-info__buy"
                    type="button"
                    disabled={isBalanceActive}
                    onClick={handleBuyButtonClick}
                  >
                    Купить
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <TrainingVideo
        newVideo={file}
        setFile={setFile}
        onSave={handleFileUpload}
      />
    </div>
  );
}

export default TrainingCard;
