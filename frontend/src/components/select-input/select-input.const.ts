import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  getUserFormLevel,
  getUserFormLevelError,
  getUserFormLocation,
  getUserFormLocationError,
  getUserFormSex,
  getUserFormSexError,
  getTrainingFormDuration,
  getTrainingFormDurationError,
  getTrainingFormLevel,
  getTrainingFormLevelError,
  getTrainingFormType,
  getTrainingFormTypeError,
  isUserFormDataSending,
  isTrainingFormDataSending,
  setDuration,
  setLevel,
  setLocation,
  setSex,
  setType,
  setUserFormError,
  setTrainingFormError,
  setTrainingLevel,
} from '../../store';
import { State } from '../../types';
import {
  MetroStation,
  UserLevel,
  UserSex,
  TrainingDuration,
  TrainingType,
} from '../../consts';
import lodash from 'lodash';

export enum SelectInputType {
  Location = 'location',
  Sex = 'sex',
  Level = 'level',
  TypeOfTraining = 'type-of-training',
  DurationOfTraining = 'duration-of-training',
  LevelOfTraining = 'level-of-training',
}

type SelectInputTypeDiff = {
  valueSelector: (state: State) => string | undefined;
  setValue: ActionCreatorWithPayload<string>;
  optionsArray: string[];
  labelFunction: (value: string) => string;
  errorSelector: (state: State) => string | undefined;
  setError: (value: string | undefined) => {
    payload: [string, string | undefined];
    type: string;
  };
  formStatusSelector: (state: State) => boolean;
  labelText: string;
};

type SelectInputTypeDiffs = {
  [type: string]: SelectInputTypeDiff;
};

export const SelectInputTypeDiffs: SelectInputTypeDiffs = {
  [SelectInputType.Location]: {
    valueSelector: getUserFormLocation,
    setValue: setLocation,
    optionsArray: Object.values(MetroStation),
    labelFunction: (value) => `ст. м. ${lodash.capitalize(value)}`,
    errorSelector: getUserFormLocationError,
    setError: (value: string | undefined) =>
      setUserFormError(['location', value]),
    formStatusSelector: isUserFormDataSending,
    labelText: 'Локация',
  },
  [SelectInputType.Sex]: {
    valueSelector: getUserFormSex,
    setValue: setSex,
    optionsArray: Object.values(UserSex),
    labelFunction: (value) => lodash.capitalize(value),
    errorSelector: getUserFormSexError,
    setError: (value: string | undefined) => setUserFormError(['sex', value]),
    formStatusSelector: isUserFormDataSending,
    labelText: 'Пол',
  },
  [SelectInputType.Level]: {
    valueSelector: getUserFormLevel,
    setValue: setLevel,
    optionsArray: Object.values(UserLevel),
    labelFunction: (value) => lodash.capitalize(value),
    errorSelector: getUserFormLevelError,
    setError: (value: string | undefined) => setUserFormError(['level', value]),
    formStatusSelector: isUserFormDataSending,
    labelText: 'Уровень',
  },
  [SelectInputType.TypeOfTraining]: {
    valueSelector: getTrainingFormType,
    setValue: setType,
    optionsArray: Object.values(TrainingType),
    labelFunction: (value) => lodash.capitalize(value),
    errorSelector: getTrainingFormTypeError,
    setError: (value: string | undefined) =>
      setTrainingFormError(['type', value]),
    formStatusSelector: isTrainingFormDataSending,
    labelText: 'Выберите тип тренировки',
  },
  [SelectInputType.DurationOfTraining]: {
    valueSelector: getTrainingFormDuration,
    setValue: setDuration,
    optionsArray: Object.values(TrainingDuration),
    labelFunction: (value) => `${value} мин`,
    errorSelector: getTrainingFormDurationError,
    setError: (value: string | undefined) =>
      setTrainingFormError(['duration', value]),
    formStatusSelector: isTrainingFormDataSending,
    labelText: 'Сколько времени потратим',
  },
  [SelectInputType.LevelOfTraining]: {
    valueSelector: getTrainingFormLevel,
    setValue: setTrainingLevel,
    optionsArray: Object.values(UserLevel),
    labelFunction: (value) => lodash.capitalize(value),
    errorSelector: getTrainingFormLevelError,
    setError: (value: string | undefined) =>
      setTrainingFormError(['level', value]),
    formStatusSelector: isTrainingFormDataSending,
    labelText: 'Выберите уровень тренировки',
  },
};
