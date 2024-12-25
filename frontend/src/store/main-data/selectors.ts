import { NameSpace } from '../../consts';
import { State, User, Training } from '../../types';

export const getTrainingsForUser = (
  state: Pick<State, NameSpace.MainData>,
): Training[] => state[NameSpace.MainData].trainingsForUser;

export const getSpecialTrainings = (
  state: Pick<State, NameSpace.MainData>,
): Training[] => state[NameSpace.MainData].specialTrainings;

export const getPopularTrainings = (
  state: Pick<State, NameSpace.MainData>,
): Training[] => state[NameSpace.MainData].popularTrainings;

export const getReadyUsers = (state: Pick<State, NameSpace.MainData>): User[] =>
  state[NameSpace.MainData].readyUsers;

export const isMainDataLoading = (
  state: Pick<State, NameSpace.MainData>,
): boolean => state[NameSpace.MainData].isDataLoading;
