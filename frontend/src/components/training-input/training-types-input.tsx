import { TRAINING_TYPE_MAX_AMOUNT, TrainingType } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getUserFormTrainingTypes,
  getUserFormTrainingTypesError,
  isUserFormDataSending,
  setUserFormError,
  setTrainingTypes,
} from '../../store';
import { ChangeEvent, useEffect } from 'react';
import lodash from 'lodash';
import cn from 'classnames';

type TrainingTypesProps = {
  styleClass: string;
  originalValue?: TrainingType[];
  isActive?: boolean;
};

function TrainingTypesInput({
  styleClass,
  originalValue,
  isActive = true,
}: TrainingTypesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const trainingTypes = useAppSelector(getUserFormTrainingTypes);
  const trainingTypesError = useAppSelector(getUserFormTrainingTypesError);
  const isDisabled = useAppSelector(isUserFormDataSending);

  useEffect(() => {
    if (originalValue && isActive) {
      dispatch(setTrainingTypes(originalValue));
    }
  }, [dispatch, isActive, originalValue]);

  return (
    <div
      className={cn(
        'specialization-checkbox',
        {
          [`${styleClass ?? ''}__specializations`]: styleClass,
          'specialization-checkbox--error': trainingTypesError,
        },
      )}
    >
      {Object.values(TrainingType).map((type) => (
        <div className="btn-checkbox" key={`type-${type}`}>
          <label>
            <input
              className="visually-hidden"
              type="checkbox"
              name="workoutType"
              value={type}
              disabled={isDisabled || !isActive}
              checked={isActive ? trainingTypes.includes(type) : originalValue?.includes(type)}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                const editedType = target.value as TrainingType;
                if (
                  trainingTypes.length < TRAINING_TYPE_MAX_AMOUNT ||
                  trainingTypes.includes(editedType)
                ) {
                  dispatch(setTrainingTypes(editedType));
                  dispatch(setUserFormError(['trainingTypes', undefined]));
                }
              }}
            />
            <span className="btn-checkbox__btn">{lodash.capitalize(type)}</span>
          </label>
        </div>
      ))}
      {trainingTypesError && (
        <span className="specialization-checkbox__error">{trainingTypesError}</span>
      )}
    </div>
  );
}

export default TrainingTypesInput;
