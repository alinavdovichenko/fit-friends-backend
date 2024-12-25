import {
  CheckboxInput,
  CheckboxInputType,
  RangeInput,
  RangeInputType,
  SortingInput,
  SortingInputType,
} from '../../components';
import { TrainingsFilterType, TrainingsFilterTypeDiffs } from './trainings-filter.const';

type TrainingsFilterProps = {
  type: TrainingsFilterType;
};

function TrainingsFilter({ type }: TrainingsFilterProps): JSX.Element {
  const { styleClass } = TrainingsFilterTypeDiffs[type];
  return (
    <form className={`${styleClass}-form__form`}>
      <div
        className={`${styleClass}-form__block ${styleClass}-form__block--price`}
      >
        <h4 className={`${styleClass}-form__block-title`}>Цена, ₽</h4>
        <RangeInput type={RangeInputType.TrainingPrice} />
      </div>
      <div
        className={`${styleClass}-form__block ${styleClass}-form__block--calories`}
      >
        <h4 className={`${styleClass}-form__block-title`}>Калории</h4>
        <RangeInput type={RangeInputType.TrainingCalories} />
      </div>
      <div
        className={`${styleClass}-form__block ${styleClass}-form__block--raiting`}
      >
        <h4 className={`${styleClass}-form__block-title`}>Рейтинг</h4>
        <RangeInput type={RangeInputType.TrainingRating} />
      </div>
      {type === TrainingsFilterType.CoachTrainings ? (
        <div
          className={`${styleClass}-form__block ${styleClass}-form__block--duration`}
        >
          <h4 className={`${styleClass}-form__block-title`}>Длительность</h4>
          <CheckboxInput
            type={CheckboxInputType.DurationOfTraining}
            styleClass={`${styleClass}-form`}
          />
        </div>
      ) : (
        <>
          <div
            className={`${styleClass}-form__block ${styleClass}-form__block--type`}
          >
            <h4 className={`${styleClass}-form__block-title`}>Тип</h4>
            <CheckboxInput
              type={CheckboxInputType.TypeOfTraining}
              styleClass={`${styleClass}-form`}
            />
          </div>
          <div className="gym-catalog-form__block gym-catalog-form__block--sort">
            <h4 className="gym-catalog-form__title gym-catalog-form__title--sort">
              Сортировка
            </h4>
            <SortingInput
              type={SortingInputType.Trainings}
              styleClass="gym-catalog-form"
            />
          </div>
        </>
      )}
    </form>
  );
}

export default TrainingsFilter;
