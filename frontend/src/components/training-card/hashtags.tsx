import { TrainingSexFor } from '../../consts';

export const TrainingSexForHashtag = {
  [TrainingSexFor.Male]: 'для_мужчин',
  [TrainingSexFor.Female]: 'для_женщин',
  [TrainingSexFor.All]: 'для_всех',
};

function Hashtags(): JSX.Element {
  const type = 'стрейчинг';
  const userSex = 'женский';
  const duration = '10-30';
  const calories = 1500;

  const hashtags = [
    type,
    TrainingSexForHashtag[userSex as TrainingSexFor],
    `${calories}ккал`,
    `${duration.replace('-', '_')}минут`,
  ];

  return (
    <ul className="training-info__list">
      {hashtags.map((hashtag) => (
        <li className="training-info__item" key={`hashtag-${hashtag}`}>
          <div className="hashtag hashtag--white">
            <span>#{hashtag}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Hashtags;
