import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrainingsList } from '../../types';
import {
  CaloriesValue,
  NameSpace,
  PriceValue,
  RatingValue,
  TrainingsSortType,
} from '../../consts';
import { getAllTrainingsAction, getCoachTrainingsAction } from '../api-actions';

const initialState: TrainingsList = {
  trainings: [],
  price: {
    min: PriceValue.Min,
    max: PriceValue.Max,
  },
  calories: {
    min: CaloriesValue.Min,
    max: CaloriesValue.Max,
  },
  rating: {
    min: RatingValue.Default,
    max: RatingValue.Max,
  },
  filter: {
    price: {
      min: undefined,
      max: undefined,
    },
    calories: {
      min: undefined,
      max: undefined,
    },
    rating: {
      min: RatingValue.Default,
      max: RatingValue.Max,
    },
    duration: [],
    types: [],
    sorting: undefined,
  },
  isDataLoading: false,
};

export const trainingsList = createSlice({
  name: NameSpace.TrainingsList,
  initialState,
  reducers: {
    resetTrainingsFilters: (state) => {
      state.filter = initialState.filter;
    },
    setTrainingsPriceFilter: (
      state,
      action: PayloadAction<['min' | 'max', number]>,
    ) => {
      const [key, value] = action.payload;
      state.filter.price[key] = value;
    },
    setTrainingsCaloriesFilter: (
      state,
      action: PayloadAction<['min' | 'max', number]>,
    ) => {
      const [key, value] = action.payload;
      state.filter.calories[key] = value;
    },
    setTrainingsRatingFilter: (
      state,
      action: PayloadAction<['min' | 'max', number]>,
    ) => {
      const [key, value] = action.payload;
      state.filter.rating[key] = value;
    },
    setTrainingsDurationFilter: (state, action: PayloadAction<string>) => {
      const duration = action.payload;
      state.filter.duration = state.filter.duration.includes(duration)
        ? state.filter.duration.filter((item) => item !== duration)
        : [...state.filter.duration, duration];
    },
    setTrainingsTypesFilter: (state, action: PayloadAction<string>) => {
      const type = action.payload;
      state.filter.types = state.filter.types.includes(type)
        ? state.filter.types.filter((item) => item !== type)
        : [...state.filter.types, type];
    },
    setTrainingsSorting: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      state.filter.sorting = state.filter.sorting !== value ? value : undefined;
      if (state.filter.sorting === TrainingsSortType.Free) {
        state.filter.price.max = 0;
        state.filter.price.min = 0;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCoachTrainingsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getCoachTrainingsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getCoachTrainingsAction.fulfilled, (state, action) => {
        const { trainings, currentPage, priceRange, caloriesRange } =
          action.payload;
        state.trainings =
          currentPage === 1 ? trainings : [...state.trainings, ...trainings];
        state.price.min = priceRange[0];
        state.price.max = priceRange[1];
        state.calories.min = caloriesRange[0];
        state.calories.max = caloriesRange[1];
        state.isDataLoading = false;
      })
      .addCase(getAllTrainingsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getAllTrainingsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getAllTrainingsAction.fulfilled, (state, action) => {
        const { trainings, currentPage, priceRange, caloriesRange } =
          action.payload;
        state.trainings =
          currentPage === 1 ? trainings : [...state.trainings, ...trainings];
        state.price.min = priceRange[0];
        state.price.max = priceRange[1];
        state.calories.min = caloriesRange[0];
        state.calories.max = caloriesRange[1];
        state.isDataLoading = false;
      });
  },
});

export const {
  resetTrainingsFilters,
  setTrainingsPriceFilter,
  setTrainingsCaloriesFilter,
  setTrainingsRatingFilter,
  setTrainingsDurationFilter,
  setTrainingsTypesFilter,
  setTrainingsSorting,
} = trainingsList.actions;
