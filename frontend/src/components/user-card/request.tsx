import { RequestStatus, RequestStatusText } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { isUserCoach } from '../../store';
import { updateTrainingRequestAction } from '../../store/api-actions';
import { TrainingRequest } from '../../types';

type RequestProp = {
  request: TrainingRequest;
};

function Request({ request }: RequestProp): JSX.Element {
  const { id, status } = request;
  const dispatch = useAppDispatch();
  const isCoach = useAppSelector(isUserCoach);

  return (
    <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
      <p className="thumbnail-friend__request-text">
        {`${isCoach ? RequestStatusText.ForCoach : RequestStatusText.ForUser}${status !== RequestStatus.Default ? ` ${status}` : ''}`}
      </p>
      {status === RequestStatus.Default ? (
        <div className="thumbnail-friend__button-wrapper">
          <button
            className="btn btn--medium btn--dark-bg thumbnail-friend__button"
            type="button"
            onClick={() => {
              dispatch(
                updateTrainingRequestAction({
                  id,
                  status: RequestStatus.Accepted,
                }),
              );
            }}
          >
            Принять
          </button>
          <button
            className="btn btn--medium btn--outlined btn--dark-bg thumbnail-friend__button"
            type="button"
            onClick={() => {
              dispatch(
                updateTrainingRequestAction({
                  id,
                  status: RequestStatus.Rejected,
                }),
              );
            }}
          >
            Отклонить
          </button>
        </div>
      ) : undefined}
    </div>
  );
}

export default Request;
