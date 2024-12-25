import { NameSpace, OrdersSortType } from '../../consts';
import { State, TrainingOrders } from '../../types';

export const getOrdersList = (
  state: Pick<State, NameSpace.OrdersList>,
): TrainingOrders[] => state[NameSpace.OrdersList].orders;

export const getOrdersListSortType = (
  state: Pick<State, NameSpace.OrdersList>,
): OrdersSortType => state[NameSpace.OrdersList].sorting.type;

export const isOrdersListSortDown = (
  state: Pick<State, NameSpace.OrdersList>,
): boolean => state[NameSpace.OrdersList].sorting.directionDown;

export const isOrdersListLoading = (
  state: Pick<State, NameSpace.OrdersList>,
): boolean => state[NameSpace.OrdersList].isDataLoading;
