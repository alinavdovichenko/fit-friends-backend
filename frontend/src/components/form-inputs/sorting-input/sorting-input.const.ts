import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { State } from '../../../types';
import {
  getUsersFilterRole,
  getTrainingsSortingType,
  isUsersListLoading,
  isTrainingsListLoading,
  setUsersRoleFilter,
  setTrainingsSorting,
} from '../../../store';
import { UserRole, TrainingsSortType } from '../../../consts';

const TrainingsSortingText = {
  [TrainingsSortType.PriceUp]: 'Дешевле',
  [TrainingsSortType.PriceDown]: 'Дороже',
  [TrainingsSortType.Free]: 'Бесплатно',
};

const UsersSortingText = {
  [UserRole.Coach]: 'Тренеры',
  [UserRole.Default]: 'Пользователи',
};

export enum SortingInputType {
  Trainings = 'trainings',
  Users = 'users',
}

type SortingInputTypeDiff = {
  sortingSelector: (state: State) => string | undefined;
  isDisabledSelector: (state: State) => boolean;
  setSorting: ActionCreatorWithPayload<string>;
  optionsEnum: object;
  optionsLabels: { [key: string]: string };
};

type SortingInputTypeDiffs = {
  [type: string]: SortingInputTypeDiff;
};

export const SortingInputTypeDiffs: SortingInputTypeDiffs = {
  [SortingInputType.Trainings]: {
    sortingSelector: getTrainingsSortingType,
    isDisabledSelector: isTrainingsListLoading,
    setSorting: setTrainingsSorting,
    optionsEnum: TrainingsSortType,
    optionsLabels: TrainingsSortingText,
  },
  [SortingInputType.Users]: {
    sortingSelector: getUsersFilterRole,
    isDisabledSelector: isUsersListLoading,
    setSorting: setUsersRoleFilter,
    optionsEnum: UserRole,
    optionsLabels: UsersSortingText,
  },
};
