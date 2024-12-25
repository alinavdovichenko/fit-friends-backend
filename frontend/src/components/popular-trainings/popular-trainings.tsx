import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute} from '../../consts';
import { SliderButtons, PopularTrainingsCard } from '../index';
import { SliderConfig, SlidesAmount } from '../../types/slider';
import { useAppSelector } from '../../hooks';
import { getPopularTrainings } from '../../store';
import Slider from 'react-slick';
function PopularTrainings(): JSX.Element {
  const popularTrainings = useAppSelector(getPopularTrainings);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    ...SliderConfig,
    className: 'popular-trainings__list',
    slidesToShow: SlidesAmount.PopularTrainings,
  };
  const navigate = useNavigate();
  return (
    <section className="popular-trainings">
      <div className="container">
        <div className="popular-trainings__wrapper">
          <div className="popular-trainings__title-wrapper">
            <h2 className="popular-trainings__title">Популярные тренировки</h2>
            <button
              className="btn-flat popular-trainings__button"
              type="button"
              onClick={() => navigate(AppRoute.TrainingCatalog)}
            >
              <span>Смотреть все</span>
              <svg width={14} height={10} aria-hidden="true">
                <use xlinkHref="#arrow-right" />
              </svg>
            </button>
            <div className="popular-trainings__controls">
              <SliderButtons
                sliderRef={sliderRef}
                slidesAmount={popularTrainings.length}
                slidesToShow={SlidesAmount.PopularTrainings}
                styleClass="popular-trainings__control"
              />
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {popularTrainings.map((popularTraining) => (
              <PopularTrainingsCard
                training={popularTraining}
                styleClass="popular-trainings__item"
                key={`popular-${popularTraining.id}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default PopularTrainings;
