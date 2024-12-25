import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function Logo(): JSX.Element {
  return (
    <Link
      to={AppRoute.Main}
      className="header__logo"
      aria-label="Переход на главную"
    >
      <svg width={187} height={70} aria-hidden="true">
        <use xlinkHref="#logo" />
      </svg>
    </Link>
  );
}

export default Logo;
