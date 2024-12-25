import { Logo, MainNavigation } from '../../components';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <MainNavigation />
        <div className="search">
          <form action="#" method="get">
            <label>
              <span className="search__label">Поиск</span>
              <input type="search" name="search" />
              <svg
                className="search__icon"
                width={20}
                height={20}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-search" />
              </svg>
            </label>
            <ul className="search__list">
              <li className="search__item">
                <a className="search__link" href="#">
                  Бокс
                </a>
              </li>
              <li className="search__item">
                <a className="search__link is-active" href="#">
                  Бег
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Аэробика
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
              <li className="search__item">
                <a className="search__link" href="#">
                  Text
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;