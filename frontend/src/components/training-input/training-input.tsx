
import { ChangeEvent } from 'react';
import cn from 'classnames';
import { TrainingInputType, TrainingInputTypeDiffs } from './training-input.const';

type TrainingInputProps = {
  type: TrainingInputType;
  isActive: boolean;
};

function TrainingInput({
  type,
  isActive = false,
}: TrainingInputProps): JSX.Element {
  const {
    validationFunction,
    fieldName,
    isInput,
    labelText,
    inputSymbol,
    styleClassMode,
  } = TrainingInputTypeDiffs[type];

  const isDisabled = true;
  const valueError = undefined;

  const handleFiledChange = (targetValue: string) => {
      console.log(validationFunction(targetValue));

  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    handleFiledChange(target.value);

  const handleTextareaChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) =>
    handleFiledChange(target.value);

  return (
    <div
      className={cn(`training-info__${isInput ? 'input' : 'textarea'}`, {
        [`training-info__input--${styleClassMode ?? ''}`]: styleClassMode,
      })}
    >
      <label>
        <span className="training-info__label">{labelText}</span>
        {isInput ? (
          <input
            type="text"
            name={fieldName}
            autoComplete="off"
            value={inputSymbol ?? ''}
            disabled={isDisabled || !isActive}
            onChange={handleInputChange}
          />
        ) : (
          <textarea
            name={fieldName}
            placeholder=" "
            value={''}
            disabled={isDisabled || !isActive}
            onInput={handleTextareaChange}
          />
        )}
        {valueError ? (
          <span className="training-info__error">{valueError}</span>
        ) : undefined}
      </label>
    </div>
  );
}

export default TrainingInput;
