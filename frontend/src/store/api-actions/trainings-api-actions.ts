import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  FullTraining,
  TrainingBalanceStatus,
  CommentsWithPagination,
  TrainingsWithPagination,
  FileData,
} from '../../types';
import { APIRoute, AppRoute } from '../../consts';
import { redirectToRoute } from '../actions';
import {
  getCreateTrainingData,
  getCoachTrainingsQuery,
  getAllTrainingsQuery,
  getUpdateTrainingData,
} from '../../utils/query';
import { AsyncThunkConfig } from './async-thunk-config';

export const createTrainingAction = createAsyncThunk<
  void,
  Blob,
  AsyncThunkConfig
>('trainings/create', async (file, { getState, dispatch, extra: api }) => {
  const formData = getCreateTrainingData(getState(), file);
  await api.post(APIRoute.Trainings, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  dispatch(redirectToRoute(AppRoute.CoachTrainings));
});

export const getTrainingAction = createAsyncThunk<
  FullTraining,
  string,
  AsyncThunkConfig
>('trainings/get-training', async (trainingId, { extra: api }) => {
  const { data } = await api.get<FullTraining>(
    `${APIRoute.Trainings}/${trainingId}`,
  );
  const { data: balancedData } = await api.get<TrainingBalanceStatus>(
    `${APIRoute.Balances}/${trainingId}`,
  );
  const { data: commentsData } = await api.get<CommentsWithPagination>(
    `${APIRoute.Comments}/${trainingId}`,
  );

  return {
    ...data,
    balance: balancedData.count,
    comments: commentsData.comments,
  };
});

export const updateTrainingAction = createAsyncThunk<
  FullTraining,
  string,
  AsyncThunkConfig
>('trainings/update-training', async (trainingId, { getState, extra: api }) => {
  const formData = getUpdateTrainingData(getState());
  const { data } = await api.patch<FullTraining>(
    `${APIRoute.UpdateTraining}/${trainingId}`,
    formData,
  );
  return data;
});

export const updateTrainingVideoAction = createAsyncThunk<
  FileData,
  { trainingId: string; video: Blob },
  AsyncThunkConfig
>('trainings/update-video', async (videoData, { extra: api }) => {
  const formData = new FormData();
  formData.append('video', videoData.video);
  const { data } = await api.patch<FileData>(
    `${APIRoute.UpdateTrainingVideo}/${videoData.trainingId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return data;
});

export const getAllTrainingsAction = createAsyncThunk<
TrainingsWithPagination,
  undefined,
  AsyncThunkConfig
>('trainings/all-trainings', async (_arg, { getState, extra: api }) => {
  const params = getAllTrainingsQuery(getState());
  const { data } = await api.get<TrainingsWithPagination>(APIRoute.Trainings, {
    params,
  });
  return data;
});

export const getCoachTrainingsAction = createAsyncThunk<
TrainingsWithPagination,
  undefined,
  AsyncThunkConfig
>('trainings/coach-trainings', async (_arg, { getState, extra: api }) => {
  const params = getCoachTrainingsQuery(getState());
  const { data } = await api.get<TrainingsWithPagination>(
    APIRoute.CoachTrainings,
    { params },
  );
  return data;
});
