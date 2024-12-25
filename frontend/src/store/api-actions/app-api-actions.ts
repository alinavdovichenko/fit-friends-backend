import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../consts';
import { AsyncThunkConfig } from './async-thunk-config';
import { MainPageData, User, Training } from '../../types';

export const getMainPageDataAction = createAsyncThunk<
  MainPageData,
  undefined,
  AsyncThunkConfig
>('app/main-data', async (_arg, { extra: api }) => {
  const { data: trainingsForUser } = await api.get<Training[]>(
    APIRoute.TrainingsForUser,
  );
  const { data: specialTrainings } = await api.get<Training[]>(
    APIRoute.SpecialTrainings,
  );
  const { data: popularTrainings } = await api.get<Training[]>(
    APIRoute.PopularTrainings,
  );
  const { data: readyUsers } = await api.get<User[]>(APIRoute.ReadyUsers);
  return {
    trainingsForUser,
    specialTrainings,
    popularTrainings,
    readyUsers,
  };
});
