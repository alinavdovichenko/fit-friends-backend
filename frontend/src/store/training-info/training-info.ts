import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrainingInfo } from '../../types';
import { NameSpace } from '../../consts';
import {
  createOrderAction,
  decreaseTrainingBalanceAction,
  getTrainingAction,
  sendCommentAction,
  updateTrainingAction,
  updateTrainingVideoAction,
} from '../api-actions';

const initialState: TrainingInfo = {
  id: '',
  coachId: '',
  title: '',
  price: '',
  description: '',
  isSpecial: false,
  video: undefined,
  backgroundImage: '',
  rating: 0,
  type: '',
  calories: 0,
  userSex: '',
  duration: '',
  coach: undefined,
  balance: null,
  comments: [],
  isDataLoading: false,
  isDataEditing: false,
  hasError: false,
};

export const trainingInfo = createSlice({
  name: NameSpace.TrainingInfo,
  initialState,
  reducers: {
    setTrainingEditingStatus: (state, action: PayloadAction<boolean>) => {
      state.isDataEditing = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTrainingAction.pending, (state) => {
        state.isDataLoading = true;
        state.hasError = false;
      })
      .addCase(getTrainingAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasError = true;
      })
      .addCase(getTrainingAction.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.coachId = action.payload.coachId;
        state.title = action.payload.title;
        state.price = String(action.payload.price);
        state.description = action.payload.description;
        state.isSpecial = action.payload.isSpecial;
        state.video = action.payload.video;
        state.backgroundImage = action.payload.backgroundImage;
        state.rating = action.payload.rating;
        state.type = action.payload.type;
        state.calories = action.payload.calories;
        state.userSex = action.payload.userSex;
        state.duration = action.payload.duration;
        state.coach = action.payload.coach;
        state.balance = action.payload.balance;
        state.comments = action.payload.comments;
        state.isDataLoading = false;
        state.hasError = false;
      })
      .addCase(decreaseTrainingBalanceAction.fulfilled, (state, action) => {
        state.balance = action.payload.count;
      })
      .addCase(updateTrainingAction.fulfilled, (state, action) => {
        state.title = action.payload.title;
        state.description = action.payload.description;
        state.price = String(action.payload.price);
        state.isDataEditing = false;
      })
      .addCase(updateTrainingVideoAction.fulfilled, (state, action) => {
        state.video = action.payload;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.comments = [action.payload.comment, ...state.comments];
        state.rating = action.payload.rating;
      })
      .addCase(createOrderAction.fulfilled, (state, action) => {
        state.balance = action.payload.newBalance;
      });
  },
});

export const { setTrainingEditingStatus } = trainingInfo.actions;
