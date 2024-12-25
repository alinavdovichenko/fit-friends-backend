import { SALE_PERCENT } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getTrainingFormSpecialFlag, setIsSpecial } from '../../store';

function SpecialStatus(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(getTrainingFormSpecialFlag);

  return (
    <button
      className="btn-flat btn-flat--light btn-flat--underlined training-info__discount"
      type="button"
      onClick={() => {
        dispatch(setIsSpecial());
      }}
    >
      <svg width="14" height="14" aria-hidden="true">
        <use xlinkHref="#icon-discount"></use>
      </svg>
      <span>{status ? 'Отменить скидку' : `Сделать скидку ${SALE_PERCENT}%`}</span>
    </button>
  );
}

export default SpecialStatus;
