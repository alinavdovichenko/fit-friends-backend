import { NameSpace } from '../../consts';
import { State } from '../../types';

export const getTrainingFormTitle = (
  state: Pick<State, NameSpace.TrainingForm>,
): string => state[NameSpace.TrainingForm].title;

export const getTrainingFormType = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].type;

export const getTrainingFormDuration = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].duration;

export const getTrainingFormLevel = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].level;

export const getTrainingFormCalories = (
  state: Pick<State, NameSpace.TrainingForm>,
): string => state[NameSpace.TrainingForm].calories;

export const getTrainingFormPrice = (
  state: Pick<State, NameSpace.TrainingForm>,
): string => state[NameSpace.TrainingForm].price;

export const getTrainingFormUserSex = (
  state: Pick<State, NameSpace.TrainingForm>,
): string => state[NameSpace.TrainingForm].userSex;

export const getTrainingFormDescription = (
  state: Pick<State, NameSpace.TrainingForm>,
): string => state[NameSpace.TrainingForm].description;

export const isTrainingFormHasVideo = (
  state: Pick<State, NameSpace.TrainingForm>,
): boolean => state[NameSpace.TrainingForm].hasVideo;

export const getTrainingFormSpecialFlag = (
  state: Pick<State, NameSpace.TrainingForm>,
): boolean => state[NameSpace.TrainingForm].isSpecial;

export const getTrainingFormTitleError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].validationErrors.title;

export const getTrainingFormTypeError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].validationErrors.type;

export const getTrainingFormDurationError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].validationErrors.duration;

export const getTrainingFormLevelError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].validationErrors.level;

export const getTrainingFormCaloriesError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].validationErrors.calories;

export const getTrainingFormPriceError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].validationErrors.price;

export const getTrainingFormDescriptionError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined =>
  state[NameSpace.TrainingForm].validationErrors.description;

export const getTrainingFormVideoError = (
  state: Pick<State, NameSpace.TrainingForm>,
): string | undefined => state[NameSpace.TrainingForm].validationErrors.video;

export const isTrainingFormHaveErrors = (
  state: Pick<State, NameSpace.TrainingForm>,
): boolean =>
  Object.values(state[NameSpace.TrainingForm].validationErrors).some(
    (error) => error !== undefined,
  );

export const isTrainingFormDataSending = (
  state: Pick<State, NameSpace.TrainingForm>,
): boolean => state[NameSpace.TrainingForm].isSending;
