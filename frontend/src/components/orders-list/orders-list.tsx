import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getCatalogPage,
  getOrdersList,
  getOrdersListSortType,
  isOrdersListLoading,
  isOrdersListSortDown,
} from '../../store';
import { getCoachOrdersAction } from '../../store/api-actions';
import { CatalogButtons, Preloader, TrainingCatalogCard } from '../index';

function OrdersList(): JSX.Element {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(getOrdersList);
  const page = useAppSelector(getCatalogPage);
  const sortType = useAppSelector(getOrdersListSortType);
  const sortDirection = useAppSelector(isOrdersListSortDown);
  const isDataLoading = useAppSelector(isOrdersListLoading);

  useEffect(() => {
    dispatch(getCoachOrdersAction());
  }, [dispatch, page, sortType, sortDirection]);

  if (isDataLoading) {
    return <Preloader />;
  }

  if (!orders.length) {
    return <p className="empty-list-text">У вас нет купленных тренировок</p>;
  }

  return (
    <>
      <ul className="my-orders__list">
        {orders.map(({ training, count, sum }) => (
          <TrainingCatalogCard
            training={training}
            ordersInfo={{ count, sum }}
            styleClass="my-orders__item"
            withButtons={false}
            key={`order-${training.id}`}
          />
        ))}
      </ul>
      <CatalogButtons styleClass="my-orders__show-more" />
    </>
  );
}

export default OrdersList;
