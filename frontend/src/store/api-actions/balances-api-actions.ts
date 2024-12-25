import { createAsyncThunk } from '@reduxjs/toolkit';
import { BalancesWithPagination, TrainingBalanceStatus } from '../../types';
import { APIRoute } from '../../consts';
import { getUserBalancesQuery } from '../../utils/query/user-balance-query';
import { AsyncThunkConfig } from './async-thunk-config';

export const getUserBalancesAction = createAsyncThunk<
  BalancesWithPagination,
  undefined,
  AsyncThunkConfig
>('balances/user-balances', async (_arg, { getState, extra: api }) => {
  const params = getUserBalancesQuery(getState());
  const { data } = await api.get<BalancesWithPagination>(
    APIRoute.Balances,
    {
      params,
    },
  );
  return data;
});

export const decreaseTrainingBalanceAction = createAsyncThunk<
TrainingBalanceStatus & { trainingId: string },
  string,
  AsyncThunkConfig
>('balances/decrease-balance', async (trainingId, { extra: api }) => {
  const { data } = await api.patch<TrainingBalanceStatus>(
    `${APIRoute.DecreaseBalance}/${trainingId}`,
  );
  return { ...data, trainingId };
});
