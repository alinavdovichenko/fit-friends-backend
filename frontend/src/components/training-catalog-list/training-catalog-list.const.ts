export enum TrainingsListType {
  CoachTrainings = 'coach-trainings',
  TrainingsCatalog = 'trainings-catalog',
}

type TrainingsListTypeDiff = {
  styleClass: string;
  cardStyleClass: string;
};

type TrainingsListTypeDiffs = {
  [type: string]: TrainingsListTypeDiff;
};

export const TrainingsListTypeDiffs: TrainingsListTypeDiffs = {
  [TrainingsListType.CoachTrainings]: {
    styleClass: 'my-trainings',
    cardStyleClass: 'my-trainings__item',
  },
  [TrainingsListType.TrainingsCatalog]: {
    styleClass: 'training-catalog',
    cardStyleClass: 'training-catalog__item',
  },
};
