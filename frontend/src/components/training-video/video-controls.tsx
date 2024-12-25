import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getTrainingId,
  isTrainingBalanceActive,
  setActiveTraining,
} from '../../store';

import {
  decreaseTrainingBalanceAction,
} from '../../store/api-actions';

function VideoControls(): JSX.Element {
  const dispatch = useAppDispatch();
  const trainingId = useAppSelector(getTrainingId);
  const isBalanceActive = useAppSelector(isTrainingBalanceActive);

  return (
    <>
      <button
        className="btn training-video__button training-video__button--start"
        type="button"
        disabled={!isBalanceActive}
        onClick={() => {
          dispatch(decreaseTrainingBalanceAction(trainingId));
        }}
      >
        Приступить
      </button>
      <button
        className="btn training-video__button training-video__button--stop"
        type="button"
        onClick={() => {
          dispatch(setActiveTraining());
        }}
      >
        Закончить
      </button>
    </>
  );
}

export default VideoControls;
