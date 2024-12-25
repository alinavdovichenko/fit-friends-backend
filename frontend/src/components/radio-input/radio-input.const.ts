import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  getUserFormLevel,
  getUserFormSex,
  getUserFormTimeForTraining,
  getUsersFilterLevel,
  getTrainingFormUserSex,
  isUserFormDataSending,
  isUsersListLoading,
  isTrainingFormDataSending,
  setLevel,
  setSex,
  setTimeForTraining,
  setUserSexFor,
  setUsersLevelFilter,
} from '../../store';
import { State } from '../../types';
import { UserLevel, UserSex, TrainingDuration, TrainingSexFor } from '../../consts';

export enum RadioInputType {
  Level = 'level',
  Sex = 'sex',
  TimeForTraining = 'time-for-training',
  UserSexFor = 'user-sex-for',
  UserLevelFilter = 'user-level-filter',
}

enum StyleMode {
  Big = 'custom-toggle-radio--big',
}

type RadioInputTypeDiff = {
  valueSelector: (state: State) => string | undefined;
  setValue: ActionCreatorWithPayload<string>;
  optionsArray: string[];
  optionsLabels?: string[];
  formStatusSelector: (state: State) => boolean;
  fieldName: string;
  styleMode?: StyleMode;
};

type RadioInputTypeDiffs = {
  [type: string]: RadioInputTypeDiff;
};

export const RadioInputTypeDiffs: RadioInputTypeDiffs = {
  [RadioInputType.Level]: {
    valueSelector: getUserFormLevel,
    setValue: setLevel,
    optionsArray: Object.values(UserLevel),
    formStatusSelector: isUserFormDataSending,
    fieldName: 'level',
    styleMode: StyleMode.Big,
  },
  [RadioInputType.Sex]: {
    valueSelector: getUserFormSex,
    setValue: setSex,
    optionsArray: Object.values(UserSex),
    formStatusSelector: isUserFormDataSending,
    fieldName: 'sex',
    styleMode: StyleMode.Big,
  },
  [RadioInputType.TimeForTraining]: {
    valueSelector: getUserFormTimeForTraining,
    setValue: setTimeForTraining,
    optionsArray: Object.values(TrainingDuration),
    optionsLabels: Object.values(TrainingDuration).map((option) => `${option} мин`),
    formStatusSelector: isUserFormDataSending,
    fieldName: 'timeForTraining',
    styleMode: StyleMode.Big,
  },
  [RadioInputType.UserSexFor]: {
    valueSelector: getTrainingFormUserSex,
    setValue: setUserSexFor,
    optionsArray: Object.values(TrainingSexFor),
    formStatusSelector: isTrainingFormDataSending,
    fieldName: 'userSexFor',
  },
  [RadioInputType.UserLevelFilter]: {
    valueSelector: getUsersFilterLevel,
    setValue: setUsersLevelFilter,
    optionsArray: Object.values(UserLevel),
    formStatusSelector: isUsersListLoading,
    fieldName: 'level',
  },
};
