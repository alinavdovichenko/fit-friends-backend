import { User } from '../../types/user';
import { Link } from 'react-router-dom';
import { TrainingRequest } from '../../types';
import { AppRoute, UserRole } from '../../consts';
import { UserCardType } from './user-card.const';
import Request from './request';
import ActivityBar from './activity-bar';
import cn from 'classnames';
import UserCardInner from './user-card-inner';

type UserCardProps = {
  type: UserCardType;
  user: User;
  styleClass: string;
  trainingRequest?: TrainingRequest;
  isDark?: boolean;
};

function UserCard({
  type,
  user,
  styleClass,
  trainingRequest,
  isDark = false,
}: UserCardProps): JSX.Element {
  const { id, isReady, role } = user;

  const userLink = `${AppRoute.Users}/${id}`;

  return (
    <li className={`${styleClass}__item`}>
      {type === UserCardType.Default ? (
        <div
          className={cn('thumbnail-user', {
            'thumbnail-user--role-user': role === UserRole.Default,
            'thumbnail-user--role-coach': role === UserRole.Coach,
            'thumbnail-user--dark': isDark,
          })}
        >
          <UserCardInner type={type} user={user} />
          <Link
            to={userLink}
            className="btn btn--medium thumbnail-user__button"
          >
            Подробнее
          </Link>
        </div>
      ) : (
        <div className="thumbnail-friend">
          <div
            className={cn('thumbnail-friend__info', {
              'thumbnail-friend__info--theme-light': role === UserRole.Default,
              'thumbnail-friend__info--theme-dark': role === UserRole.Coach,
            })}
          >
            <UserCardInner type={type} user={user} />
            <ActivityBar userId={id} userRole={role} isReady={isReady} />
          </div>
          {trainingRequest ? <Request request={trainingRequest} /> : undefined}
        </div>
      )}
    </li>
  );
}

export default UserCard;
