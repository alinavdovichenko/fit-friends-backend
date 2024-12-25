import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrainingForm } from '../../types';
import {
  NameSpace,
  REQUIRED_INPUT_MESSAGE,
  SALE_PERCENT,
  TrainingSexFor,
} from '../../consts';
import {
  createTrainingAction,
  updateTrainingAction,
  updateTrainingVideoAction,
} from '../api-actions';

const initialState: TrainingForm = {
  title: '',
  type: undefined,
  duration: undefined,
  level: undefined,
  calories: '',
  price: '',
  userSex: TrainingSexFor.Female,
  description: '',
  hasVideo: false,
  isSpecial: false,
  validationErrors: {
    title: undefined,
    type: undefined,
    duration: undefined,
    level: undefined,
    calories: undefined,
    price: undefined,
    description: undefined,
    video: undefined,
  },
  isSending: false,
};

export const trainingForm = createSlice({
  name: NameSpace.TrainingForm,
  initialState,
  reducers: {
    resetTrainingForm: () => ({ ...initialState }),
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setDuration: (state, action: PayloadAction<string>) => {
      state.duration = action.payload;
    },
    setTrainingLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    setCalories: (state, action: PayloadAction<string>) => {
      state.calories = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setUserSexFor: (state, action: PayloadAction<string>) => {
      state.userSex = action.payload;
    },
    setTrainingDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setVideoPresence: (state, action: PayloadAction<boolean>) => {
      state.hasVideo = action.payload;
    },
    setIsSpecial: (state) => {
      state.isSpecial = !state.isSpecial;
      state.price = state.isSpecial
        ? String(Math.ceil((Number(state.price) / 100) * (100 - SALE_PERCENT)))
        : String(Math.floor((Number(state.price) / (100 - SALE_PERCENT)) * 100));
    },
    setTrainingFormError: (
      state,
      action: PayloadAction<[string, string | undefined]>,
    ) => {
      state.validationErrors = {
        ...state.validationErrors,
        [action.payload[0]]: action.payload[1],
      };
    },
    setCreationRequiredFields: (state) => {
      if (!state.title) {
        state.validationErrors.title = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.type) {
        state.validationErrors.type = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.duration) {
        state.validationErrors.duration = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.level) {
        state.validationErrors.level = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.calories) {
        state.validationErrors.calories = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.price) {
        state.validationErrors.price = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.description) {
        state.validationErrors.description = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.hasVideo) {
        state.validationErrors.video = REQUIRED_INPUT_MESSAGE;
      }
    },
    setUpdateTrainingRequiredFields: (state) => {
      if (!state.title) {
        state.validationErrors.title = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.price) {
        state.validationErrors.price = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.description) {
        state.validationErrors.description = REQUIRED_INPUT_MESSAGE;
      }
      if (!state.hasVideo) {
        state.validationErrors.video = REQUIRED_INPUT_MESSAGE;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createTrainingAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(createTrainingAction.rejected, (state) => {
        state.isSending = false;
      })
      .addCase(createTrainingAction.fulfilled, () => ({ ...initialState }))
      .addCase(updateTrainingAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(updateTrainingAction.rejected, (state) => {
        state.isSending = false;
      })
      .addCase(updateTrainingAction.fulfilled, () => ({ ...initialState }))
      .addCase(updateTrainingVideoAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(updateTrainingVideoAction.rejected, (state) => {
        state.isSending = false;
      })
      .addCase(updateTrainingVideoAction.fulfilled, (state) => {
        state.isSending = false;
      });
  },
});

export const {
  resetTrainingForm,
  setTitle,
  setType,
  setDuration,
  setTrainingLevel,
  setCalories,
  setPrice,
  setUserSexFor,
  setTrainingDescription,
  setVideoPresence,
  setIsSpecial,
  setTrainingFormError,
  setCreationRequiredFields,
  setUpdateTrainingRequiredFields,
} = trainingForm.actions;
