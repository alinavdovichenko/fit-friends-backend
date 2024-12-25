import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { MetroStation, TrainingDuration, TrainingType } from '../../../consts';
import {
  getUsersFilterLocations,
  getUsersFilterTypes,
  getTrainingsFilterDuration,
  getTrainingsFilterTypes,
  isUsersListLoading,
  isTrainingsListLoading,
  setUsersLocationsFilter,
  setUsersTypesFilter,
  setTrainingsDurationFilter,
  setTrainingsTypesFilter,
} from '../../../store';
import { State } from '../../../types';
import lodash from 'lodash';

export enum CheckboxInputType {
  DurationOfTraining = 'training-duration',
  TypeOfTraining = 'training-type',
  UserLocation = 'user-location',
  UserTrainingTypes = 'user-training-types',
}

type CheckboxInputTypeDiff = {
  name: string;
  filterSelector: (state: State) => string[];
  isDisabledSelector: (state: State) => boolean;
  setFilter: ActionCreatorWithPayload<string>;
  optionsArray: string[];
  labelFunction: (value: string) => string;
  withButton: boolean;
};

type CheckboxInputTypeDiffs = {
  [type: string]: CheckboxInputTypeDiff;
};

export const CheckboxInputTypeDiffs: CheckboxInputTypeDiffs = {
  [CheckboxInputType.DurationOfTraining]: {
    name: 'duration',
    filterSelector: getTrainingsFilterDuration,
    isDisabledSelector: isTrainingsListLoading,
    setFilter: setTrainingsDurationFilter,
    optionsArray: Object.values(TrainingDuration),
    labelFunction: (value) => {
      const [from, to] = value.split('-');
      return `${from} мин - ${to} мин`;
    },
    withButton: false,
  },
  [CheckboxInputType.TypeOfTraining]: {
    name: 'type',
    filterSelector: getTrainingsFilterTypes,
    isDisabledSelector: isTrainingsListLoading,
    setFilter: setTrainingsTypesFilter,
    optionsArray: Object.values(TrainingType),
    labelFunction: (value) => value,
    withButton: false,
  },
  [CheckboxInputType.UserLocation]: {
    name: 'location',
    filterSelector: getUsersFilterLocations,
    isDisabledSelector: isUsersListLoading,
    setFilter: setUsersLocationsFilter,
    optionsArray: Object.values(MetroStation),
    labelFunction: (value) => value,
    withButton: true,
  },
  [CheckboxInputType.UserTrainingTypes]: {
    name: 'training-type',
    filterSelector: getUsersFilterTypes,
    isDisabledSelector: isUsersListLoading,
    setFilter: setUsersTypesFilter,
    optionsArray: Object.values(TrainingType),
    labelFunction: (value) => lodash.capitalize(value),
    withButton: true,
  },
};
