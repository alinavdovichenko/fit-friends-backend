import { TextAreaInputType } from '../text-area-input/text-area-input.const';
import { TextAreaInput } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  isCommentFormHasErrors,
  isCommentSending,
  setCommentRequiredFields,
} from '../../store';
import {
  sendCommentAction,
} from '../../store/api-actions';
import RatingInput from './rating-input';


function FeedbackForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const isDisabled = useAppSelector(isCommentSending);
  const isFormHasErrors = useAppSelector(isCommentFormHasErrors);

  const handleNextButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    evt.preventDefault();
    dispatch(setCommentRequiredFields());
    if (!isFormHasErrors) {
      dispatch(sendCommentAction());
    }
  };

  return (
    <div className="popup__content popup__content--feedback">
      <h3 className="popup__feedback-title">Оцените тренировку</h3>
      <ul className="popup__rate-list">
        <RatingInput />
      </ul>
      <div className="popup__feedback">
        <h3 className="popup__feedback-title popup__feedback-title--text">
          Поделитесь своими впечатлениями о тренировке
        </h3>
        <div className="popup__feedback-textarea">
          <TextAreaInput type={TextAreaInputType.CommentText} />
        </div>
      </div>
      <div className="popup__button">
        <button
          className="btn"
          type="button"
          disabled={isDisabled}
          onClick={handleNextButtonClick}
          data-testid="submitButton"
        >
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
