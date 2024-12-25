import {
  getTrainingsFilterMaxCalories,
  getTrainingsFilterMaxPrice,
  getTrainingsFilterMaxRating,
  getTrainingsFilterMinCalories,
  getTrainingsFilterMinPrice,
  getTrainingsFilterMinRating,
  getTrainingsMaxCalories,
  getTrainingsMaxPrice,
  getTrainingsMaxRating,
  getTrainingsMinCalories,
  getTrainingsMinPrice,
  getTrainingsMinRating,
  isTrainingsListLoading,
  setTrainingsCaloriesFilter,
  setTrainingsPriceFilter,
  setTrainingsRatingFilter,
} from '../../../store';
import { State } from '../../../types';

export enum RangeInputType {
  TrainingPrice = 'training-price',
  TrainingCalories = 'training-calories',
  TrainingRating = 'training-rating',
}

type RangeInputTypeDiff = {
  name: string;
  withFields: boolean;
  minValueSelector: (state: State) => number;
  maxValueSelector: (state: State) => number;
  minFilterSelector: (state: State) => number | undefined;
  maxFilterSelector: (state: State) => number | undefined;
  isDisabledSelector: (state: State) => boolean;
  setMinFilter: (value: number) => { payload: [string, number]; type: string };
  setMaxFilter: (value: number) => { payload: [string, number]; type: string };
};

type RangeInputTypeDiffs = {
  [type: string]: RangeInputTypeDiff;
};

export const RangeInputTypeDiffs: RangeInputTypeDiffs = {
  [RangeInputType.TrainingPrice]: {
    name: 'price',
    withFields: true,
    minValueSelector: getTrainingsMinPrice,
    maxValueSelector: getTrainingsMaxPrice,
    minFilterSelector: getTrainingsFilterMinPrice,
    maxFilterSelector: getTrainingsFilterMaxPrice,
    isDisabledSelector: isTrainingsListLoading,
    setMinFilter: (value: number) => setTrainingsPriceFilter(['min', value]),
    setMaxFilter: (value: number) => setTrainingsPriceFilter(['max', value]),
  },
  [RangeInputType.TrainingCalories]: {
    name: 'calories',
    withFields: true,
    minValueSelector: getTrainingsMinCalories,
    maxValueSelector: getTrainingsMaxCalories,
    minFilterSelector: getTrainingsFilterMinCalories,
    maxFilterSelector: getTrainingsFilterMaxCalories,
    isDisabledSelector: isTrainingsListLoading,
    setMinFilter: (value: number) => setTrainingsCaloriesFilter(['min', value]),
    setMaxFilter: (value: number) => setTrainingsCaloriesFilter(['max', value]),
  },
  [RangeInputType.TrainingRating]: {
    name: 'rating',
    withFields: false,
    minValueSelector: getTrainingsMinRating,
    maxValueSelector: getTrainingsMaxRating,
    minFilterSelector: getTrainingsFilterMinRating,
    maxFilterSelector: getTrainingsFilterMaxRating,
    isDisabledSelector: isTrainingsListLoading,
    setMinFilter: (value: number) => setTrainingsRatingFilter(['min', value]),
    setMaxFilter: (value: number) => setTrainingsRatingFilter(['max', value]),
  },
};
