
function UserForm(): JSX.Element {
  const isDisabled = true;
  return (
    <section className="user-info">
      <div className="user-info__header">
        <div className="input-load-avatar">
          <label>
            <input
              className="visually-hidden"
              type="file"
              name="user-photo-1"
              accept="image/png, image/jpeg"
            />
            <span className="input-load-avatar__avatar">
              <img
                src="img/content/user-photo-1.png"
                srcSet="img/content/user-photo-1@2x.png 2x"
                width={98}
                height={98}
                alt="user photo"
              />
            </span>
          </label>
        </div>
      </div>
      <form className="user-info__form" action="#" method="post">
        <button
          className="btn-flat btn-flat--underlined user-info__edit-button"
          type="button"
          aria-label="Редактировать"
          disabled={isDisabled}
        >
          <svg width={12} height={12} aria-hidden="true">
            <use xlinkHref="#icon-edit" />
          </svg>
          <span>Редактировать</span>
        </button>
        <div className="user-info__section">
          <h2 className="user-info__title">Обо мне</h2>
          <div className="custom-input custom-input--readonly user-info__input">
            <label>
              <span className="custom-input__label">Имя</span>
              <span className="custom-input__wrapper">
                <input type="text" name="name" defaultValue="Валерия" disabled={isDisabled}/>
              </span>
            </label>
          </div>
          <div className="custom-textarea custom-textarea--readonly user-info__textarea">
            <label>
              <span className="custom-textarea__label">Описание</span>
              <textarea
                name="description"
                placeholder=" "
                defaultValue={
                  'Персональный тренер и инструктор групповых программ с опытом  более 4х лет. Специализация: коррекция фигуры и осанки, снижение веса, восстановление после травм, пилатес.'
                }
                disabled={isDisabled}
              />
            </label>
          </div>
        </div>
        <div className="user-info__section user-info__section--status">
          <h2 className="user-info__title user-info__title--status">Статус</h2>
          <div className="custom-toggle custom-toggle--switch user-info__toggle">
            <label>
              <input type="checkbox" name="ready-for-training" />
              <span className="custom-toggle__icon">
                <svg width={9} height={6} aria-hidden="true">
                  <use xlinkHref="#arrow-check" />
                </svg>
              </span>
              <span className="custom-toggle__label">Готов тренировать</span>
            </label>
          </div>
        </div>
        <div className="user-info__section">
          <h2 className="user-info__title user-info__title--specialization">
            Специализация
          </h2>
          <div className="specialization-checkbox user-info__specialization">
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="yoga"
                />
                <span className="btn-checkbox__btn">Йога</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="running"
                />
                <span className="btn-checkbox__btn">Бег</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="aerobics"
                />
                <span className="btn-checkbox__btn">Аэробика</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="boxing"
                />
                <span className="btn-checkbox__btn">Бокс</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="power"
                />
                <span className="btn-checkbox__btn">Силовые</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="pilates"
                />
                <span className="btn-checkbox__btn">Пилатес</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="stretching"
                />
                <span className="btn-checkbox__btn">Стрейчинг</span>
              </label>
            </div>
            <div className="btn-checkbox">
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="specialization"
                  defaultValue="crossfit"
                />
                <span className="btn-checkbox__btn">Кроссфит</span>
              </label>
            </div>
          </div>
        </div>
        <div className="custom-select--readonly custom-select user-info__select">
          <span className="custom-select__label">Локация</span>
          <div className="custom-select__placeholder">ст. м. Адмиралтейская</div>
          <button
            className="custom-select__button"
            type="button"
            aria-label="Выберите одну из опций"
          >
            <span className="custom-select__text" />
            <span className="custom-select__icon">
              <svg width={15} height={6} aria-hidden="true">
                <use xlinkHref="#arrow-down" />
              </svg>
            </span>
          </button>
          <ul className="custom-select__list" role="listbox"></ul>
        </div>
        <div className="custom-select--readonly custom-select user-info__select">
          <span className="custom-select__label">Пол</span>
          <div className="custom-select__placeholder">Женский</div>
          <button
            className="custom-select__button"
            type="button"
            aria-label="Выберите одну из опций"
          >
            <span className="custom-select__text" />
            <span className="custom-select__icon">
              <svg width={15} height={6} aria-hidden="true">
                <use xlinkHref="#arrow-down" />
              </svg>
            </span>
          </button>
          <ul className="custom-select__list" role="listbox"></ul>
        </div>
        <div className="custom-select--readonly custom-select user-info__select">
          <span className="custom-select__label">Уровень</span>
          <div className="custom-select__placeholder">Профессионал</div>
          <button
            className="custom-select__button"
            type="button"
            aria-label="Выберите одну из опций"
          >
            <span className="custom-select__text" />
            <span className="custom-select__icon">
              <svg width={15} height={6} aria-hidden="true">
                <use xlinkHref="#arrow-down" />
              </svg>
            </span>
          </button>
          <ul className="custom-select__list" role="listbox"></ul>
        </div>
      </form>
    </section>
  );
}

export default UserForm;
