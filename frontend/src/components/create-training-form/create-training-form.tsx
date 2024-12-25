import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  isTrainingFormDataSending,
  isTrainingFormHaveErrors,
  setCreationRequiredFields,
} from '../../store';
import {
  SelectInput,
  SelectInputType,
  CustomInput,
  CustomInputType,
  RadioInput,
  RadioInputType,
  TextAreaInput,
  TextAreaInputType,
  TrainingVideoInput,
} from '../../components';
import { createTrainingAction } from '../../store/api-actions';

const styleClass = 'create-training';

function CreateTrainingForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const isSending = useAppSelector(isTrainingFormDataSending);
  const isFormHaveError = useAppSelector(isTrainingFormHaveErrors);
  const [file, setFile] = useState<Blob | null>(null);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(setCreationRequiredFields());
    if (!isFormHaveError && file) {
      dispatch(createTrainingAction(file));
    }
  };

  return (
    <form method="post" onSubmit={handleFormSubmit}>
      <div className="create-training">
        <div className="create-training__wrapper">
          <div className="create-training__block">
            <h2 className="create-training__legend">Название тренировки</h2>
            <CustomInput
              type={CustomInputType.TrainingTitle}
              styleClass={styleClass}
            />
          </div>
          <div className="create-training__block">
            <h2 className="create-training__legend">
              Характеристики тренировки
            </h2>
            <div className="create-training__info">
              <SelectInput type={SelectInputType.TypeOfTraining} />
              <CustomInput type={CustomInputType.TrainingCalories} />
              <SelectInput type={SelectInputType.DurationOfTraining} />
              <CustomInput type={CustomInputType.TrainingPrice} />
              <SelectInput type={SelectInputType.LevelOfTraining} />
              <div className="create-training__radio-wrapper">
                <span className="create-training__label">
                  Кому подойдет тренировка
                </span>
                <br />
                <RadioInput
                  type={RadioInputType.UserSexFor}
                  styleClass={styleClass}
                />
              </div>
            </div>
          </div>
          <div className="create-training__block">
            <h2 className="create-training__legend">Описание тренировки</h2>
            <TextAreaInput type={TextAreaInputType.TrainingDescription} />
          </div>
          <div className="create-training__block">
            <h2 className="create-training__legend">
              Загрузите видео-тренировку
            </h2>
            <TrainingVideoInput setFile={setFile} styleClass='create-training__drag-and-drop'/>
          </div>
        </div>
        <button
          className="btn create-training__button"
          type="submit"
          disabled={isSending}
        >
          Опубликовать
        </button>
      </div>
    </form>
  );
}

export default CreateTrainingForm;
