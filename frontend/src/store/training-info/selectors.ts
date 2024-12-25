import { NameSpace, UserRole } from '../../consts';
import { Comment, FileData, State, User } from '../../types';

export const getTrainingId = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].id;

export const getTrainingTitle = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].title;

export const getTrainingType = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].type;

export const getTrainingDuration = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].duration;

export const getTrainingCalories = (
  state: Pick<State, NameSpace.TrainingInfo>,
): number => state[NameSpace.TrainingInfo].calories;

export const getTrainingPrice = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].price;

export const getTrainingRating = (
  state: Pick<State, NameSpace.TrainingInfo>,
): number => state[NameSpace.TrainingInfo].rating;

export const getTrainingUserSex = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].userSex;

export const getTrainingDescription = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].description;

export const getTrainingVideo = (
  state: Pick<State, NameSpace.TrainingInfo>,
): FileData | undefined => state[NameSpace.TrainingInfo].video;

export const getTrainingImage = (
  state: Pick<State, NameSpace.TrainingInfo>,
): string => state[NameSpace.TrainingInfo].backgroundImage;

export const getTrainingCoach = (
  state: Pick<State, NameSpace.TrainingInfo>,
): User | undefined => state[NameSpace.TrainingInfo].coach;

export const getTrainingSpecialFlag = (
  state: Pick<State, NameSpace.TrainingInfo>,
): boolean => state[NameSpace.TrainingInfo].isSpecial;

export const getTrainingComments = (
  state: Pick<State, NameSpace.TrainingInfo>,
): Comment[] => state[NameSpace.TrainingInfo].comments;

export const isTrainingBalanceExists = (
  state: Pick<State, NameSpace.TrainingInfo>,
): boolean => state[NameSpace.TrainingInfo].balance !== null;

export const isTrainingBalanceActive = (
  state: Pick<State, NameSpace.TrainingInfo>,
): boolean =>
  state[NameSpace.TrainingInfo].balance !== null &&
  state[NameSpace.TrainingInfo].balance > 0;

export const isTrainingInfoLoading = (
  state: Pick<State, NameSpace.TrainingInfo>,
): boolean => state[NameSpace.TrainingInfo].isDataLoading;

export const isTrainingInfoEditing = (
  state: Pick<State, NameSpace.TrainingInfo>,
): boolean => state[NameSpace.TrainingInfo].isDataEditing;

export const isTrainingInfoHasError = (
  state: Pick<State, NameSpace.TrainingInfo>,
): boolean => state[NameSpace.TrainingInfo].hasError;

export const isUserHaveAccessToTraining = (
  state: Pick<State, NameSpace.TrainingInfo> & Pick<State, NameSpace.AppData>,
): boolean =>
  state[NameSpace.AppData].userRole === UserRole.Default ||
  state[NameSpace.TrainingInfo].coachId === state[NameSpace.AppData].userId;

export const isCurrentTrainingActive = (
  state: Pick<State, NameSpace.TrainingInfo> & Pick<State, NameSpace.AppData>,
): boolean =>
  state[NameSpace.TrainingInfo].id === state[NameSpace.AppData].activeTraining;
