import { Link } from 'react-router-dom';
import { AppRoute, STATIC_URL } from '../../consts';
import { Training } from '../../types/training';

type SpecialForYouCardProps = {
  training: Training;
  styleClass: string;
};

function SpecialForYouCard({
  training,
  styleClass,
}: SpecialForYouCardProps): JSX.Element {
  const { id, title, backgroundImage } = training;

  const link = `${AppRoute.Trainings}/${id}`;

  return (
    <li className={styleClass}>
      <div className="thumbnail-preview">
        <div className="thumbnail-preview__image">
          <picture>
            <img
              src={`${STATIC_URL}/${backgroundImage}`}
              width={452}
              height={191}
              alt="Фотография тренировки"
            />
          </picture>
        </div>
        <div className="thumbnail-preview__inner">
          <h3 className="thumbnail-preview__title">{title}</h3>
          <div className="thumbnail-preview__button-wrapper">
            <Link
              to={link}
              className="btn btn--small thumbnail-preview__button"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SpecialForYouCard;
