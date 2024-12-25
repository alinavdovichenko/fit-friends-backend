import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../consts';
import { AsyncThunkConfig } from './async-thunk-config';
import { Comment, FullTraining } from '../../types';
import { getCommentData } from '../../utils/query';

export const sendCommentAction = createAsyncThunk<
  { comment: Comment; rating: number },
  undefined,
  AsyncThunkConfig
>('comments/send', async (_arg, { getState, extra: api }) => {
  const formData = getCommentData(getState());
  const { data: newComment } = await api.post<Comment>(
    APIRoute.Comments,
    formData,
  );
  const { data: training } = await api.get<FullTraining>(
    `${APIRoute.Trainings}/${formData.trainingId}`,
  );
  return { comment: newComment, rating: training.rating };
});
