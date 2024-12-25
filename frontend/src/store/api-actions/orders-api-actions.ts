import { createAsyncThunk } from '@reduxjs/toolkit';
import { OrdersWithPagination, TrainingBalanceStatus } from '../../types';
import { APIRoute } from '../../consts';
import { getCoachOrdersQuery, getOrderData } from '../../utils/query';
import { AsyncThunkConfig } from './async-thunk-config';

export const getCoachOrdersAction = createAsyncThunk<
  OrdersWithPagination,
  undefined,
  AsyncThunkConfig
>('orders/coach-orders', async (_arg, { getState, extra: api }) => {
  const params = getCoachOrdersQuery(getState());
  const { data } = await api.get<OrdersWithPagination>(APIRoute.CoachOrders, {
    params,
  });
  return data;
});

export const createOrderAction = createAsyncThunk<
  { newBalance: number | null },
  undefined,
  AsyncThunkConfig
>('orders/create', async (_arg, { getState, extra: api }) => {
  const formData = getOrderData(getState());
  await api.post(APIRoute.CreateOrder, formData);
  const { data } = await api.get<TrainingBalanceStatus>(
    `${APIRoute.Balances}/${formData.trainingId}`,
  );
  return { newBalance: data.count };
});
