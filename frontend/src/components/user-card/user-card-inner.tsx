import { User } from '../../types/user';
import { AppRoute } from '../../consts';
import { Link } from 'react-router-dom';
import { UserCardType, UserCardTypeDiffs } from './user-card.const';

type UserCardInnerProps = {
  type: UserCardType;
  user: User;
};

function UserCardInner({ type, user }: UserCardInnerProps): JSX.Element {
  const { styleClass } =
    UserCardTypeDiffs[type];
  const { id, avatar, name, location } = user;

  const userLink = `${AppRoute.Users}/${id}`;
  const avatarUrl = avatar;

  const getAvatarImage = () =>
    type === UserCardType.Friend ? (
      <div className="thumbnail-friend__image-status">
        <div className={`${styleClass}__image`}>
          <img src={avatarUrl} width={78} height={78} alt="Аватар пользователя" />
        </div>
      </div>
    ) : (
      <div className={`${styleClass}__image`}>
        <img src={avatarUrl} width={82} height={82} alt="Аватар пользователя" />
      </div>
    );

  return (
    <>
      {getAvatarImage()}
      <div className={`${styleClass}__header`}>
        <Link className='link-with-no-style' to={userLink}>
          <h2 className={`${styleClass}__name`}>{name}</h2>
        </Link>
        <div className={`${styleClass}__location`}>
          <svg width={14} height={16} aria-hidden="true">
            <use xlinkHref="#icon-location" />
          </svg>
          <address className={`${styleClass}__location-address`}>
            {location}
          </address>
        </div>
      </div>
    </>
  );
}

export default UserCardInner;
