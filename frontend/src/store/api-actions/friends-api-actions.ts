import { createAsyncThunk } from '@reduxjs/toolkit';
import { FriendsWithPagination, TrainingRequest } from '../../types';
import { APIRoute } from '../../consts';
import { getUserFriendsQuery } from '../../utils/query';
import { AsyncThunkConfig } from './async-thunk-config';

export const getUserFriendsAction = createAsyncThunk<
  FriendsWithPagination,
  undefined,
  AsyncThunkConfig
>('friends/friends-list', async (_arg, { getState, extra: api }) => {
  const params = getUserFriendsQuery(getState());
  const { data } = await api.get<FriendsWithPagination>(APIRoute.Friends, {
    params,
  });
  return data;
});

export const addUserToFriendsAction = createAsyncThunk<
  void,
  string,
  AsyncThunkConfig
>('friends/add', async (userId, { extra: api }) => {
  await api.patch(APIRoute.AddFriend, {
    friendId: userId,
  });
});

export const removeUserFromFriendsAction = createAsyncThunk<
  void,
  string,
  AsyncThunkConfig
>('friends/remove', async (userId, { extra: api }) => {
  await api.patch(APIRoute.RemoveFriend, {
    friendId: userId,
  });
});

export const updateTrainingRequestAction = createAsyncThunk<
TrainingRequest,
TrainingRequest,
  AsyncThunkConfig
>('friends/update-request', async (request, { extra: api }) => {
  await api.patch(APIRoute.UpdateTrainingRequest, {
    requestId: request.id,
    status: request.status,
  });
  return request;
});

export const createTrainingRequestAction = createAsyncThunk<
  void,
  string,
  AsyncThunkConfig
>('friends/create-request', async (userId, { extra: api }) => {
  await api.post(APIRoute.CreateTrainingRequest, {
    userToId: userId,
  });
});
