import { NameSpace } from '../../consts';
import { State, Training } from '../../types';

export const getTrainingsList = (
  state: Pick<State, NameSpace.TrainingsList>,
): Training[] => state[NameSpace.TrainingsList].trainings;

export const getTrainingsMinPrice = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].price.min;

export const getTrainingsMaxPrice = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].price.max;

export const getTrainingsFilterMinPrice = (
  state: Pick<State, NameSpace.TrainingsList>,
): number | undefined => state[NameSpace.TrainingsList].filter.price.min;

export const getTrainingsFilterMaxPrice = (
  state: Pick<State, NameSpace.TrainingsList>,
): number | undefined => state[NameSpace.TrainingsList].filter.price.max;

export const getTrainingsMinCalories = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].calories.min;

export const getTrainingsMaxCalories = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].calories.max;

export const getTrainingsFilterMinCalories = (
  state: Pick<State, NameSpace.TrainingsList>,
): number | undefined => state[NameSpace.TrainingsList].filter.calories.min;

export const getTrainingsFilterMaxCalories = (
  state: Pick<State, NameSpace.TrainingsList>,
): number | undefined => state[NameSpace.TrainingsList].filter.calories.max;

export const getTrainingsMinRating = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].rating.min;

export const getTrainingsMaxRating = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].rating.max;

export const getTrainingsFilterMinRating = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].filter.rating.min;

export const getTrainingsFilterMaxRating = (
  state: Pick<State, NameSpace.TrainingsList>,
): number => state[NameSpace.TrainingsList].filter.rating.max;

export const getTrainingsFilterDuration = (
  state: Pick<State, NameSpace.TrainingsList>,
): string[] => state[NameSpace.TrainingsList].filter.duration;

export const getTrainingsFilterTypes = (
  state: Pick<State, NameSpace.TrainingsList>,
): string[] => state[NameSpace.TrainingsList].filter.types;

export const getTrainingsSortingType = (
  state: Pick<State, NameSpace.TrainingsList>,
): string | undefined => state[NameSpace.TrainingsList].filter.sorting;

export const isTrainingsListLoading = (
  state: Pick<State, NameSpace.TrainingsList>,
): boolean => state[NameSpace.TrainingsList].isDataLoading;
