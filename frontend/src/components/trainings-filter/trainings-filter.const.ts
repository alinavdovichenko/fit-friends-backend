export enum TrainingsFilterType {
  CoachTrainings = 'coach-trainings',
  TrainingsCatalog = 'trainings-catalog',
}

type TrainingsFilterTypeDiff = {
  styleClass: string;
};

type TrainingsFilterTypeDiffs = {
  [type: string]: TrainingsFilterTypeDiff;
};

export const TrainingsFilterTypeDiffs: TrainingsFilterTypeDiffs = {
  [TrainingsFilterType.CoachTrainings]: {
    styleClass: 'my-trainings',
  },
  [TrainingsFilterType.TrainingsCatalog]: {
    styleClass: 'gym-catalog',
  },
};
