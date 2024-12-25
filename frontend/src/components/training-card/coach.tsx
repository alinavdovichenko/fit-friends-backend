import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getTrainingCoach } from '../../store';
import { getFileUrl } from '../../utils/common';
import { AppRoute, IMAGE_PLACEHOLDER } from '../../consts';

function Coach(): JSX.Element {
  const coach = useAppSelector(getTrainingCoach);

  return (
    <div className="training-info__coach">
      <div className="training-info__photo">
        <picture>
          <img
            src={coach && coach.avatar ? getFileUrl(coach.avatar) : IMAGE_PLACEHOLDER}
            width={64}
            height={64}
            alt="Изображение тренера"
          />
        </picture>
      </div>
      <div className="training-info__coach-info">
        <span className="training-info__label">Тренер</span>
        <Link to={`${AppRoute.Users}/${coach ? coach.id : ''}`}>
          <span className="training-info__name">{coach ? coach.name : ''}</span>
        </Link>
      </div>
    </div>
  );
}

export default Coach;
