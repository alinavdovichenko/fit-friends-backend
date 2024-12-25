import { useAppSelector } from '../../hooks';
import { getTrainingsForUser } from '../../store';
import { useRef } from 'react';
import Slider from 'react-slick';
import { SliderConfig, SlidesAmount } from '../../types/slider';
import { SliderButtons, SpecialForYouCard } from '../index';

function SpecialForYou(): JSX.Element {
  const trainings = useAppSelector(getTrainingsForUser);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    ...SliderConfig,
    className: 'special-for-you__list',
    slidesToShow: SlidesAmount.SpecialForYou,
  };

  return (
    <section className="special-for-you">
      <div className="container">
        <div className="special-for-you__wrapper">
          <div className="special-for-you__title-wrapper">
            <h2 className="special-for-you__title">Специально подобрано для вас</h2>
            <div className="special-for-you__controls">
              <SliderButtons
                sliderRef={sliderRef}
                slidesAmount={trainings.length}
                slidesToShow={SlidesAmount.SpecialForYou}
                styleClass="special-for-you__control"
              />
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {trainings.map((training) => (
              <SpecialForYouCard
                training={training}
                styleClass="special-for-you__item"
                key={`special-for-you-${training.id}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SpecialForYou;
