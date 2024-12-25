import { transformObjectValuesToString } from '@project/shared/helpers';
import {
  MetroStation,
  OrderType,
  PaymentType,
  RequestStatus,
  UserLevel,
  UserRole,
  UserSex,
  TrainingDuration,
  TrainingSexFor,
  TrainingType,
  CaloriesValue,
  MAX_TRAININGS_TYPES,
  OrderCountValue,
  PriceValue,
  RatingValue,
  UserAchievementsLength,
  UserDescriptionLength,
  UserNameLength,
  UserPasswordLength,
  TrainingDescriptionLength,
  TrainingTitleLength,
} from '@project/core';

export const MAXIMUM_TRAINING_TYPES_CHOICE = 3;

export enum TrainerMeritLength {
  Min = 10,
  Max = 140,
}

export enum FeedbackLength {
  Min = 100,
  Max = 1024,
}

export enum CaloriesOfDay {
  Min = 1000,
  Max = 5000,
}


export const DtoValidationMessage = {
  name: {
    length: `Name length min is ${UserNameLength.Min}, max is ${UserNameLength.Max}`,
    meritsLengthNotValid: 'Trainer merits min length is 10, max length is 140 symbols',
  },
  email: {
    invalidFormat: `Field value must be valid email`,
  },
  password: {
    length: `Password length min is ${UserPasswordLength.Min}, max is ${UserPasswordLength.Max}`,
  },
  sex: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(UserSex)}`,
  },
  role: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(UserRole)}`,
  },
  userDescription: {
    length: `Description length min is ${UserDescriptionLength.Min}, max is ${UserDescriptionLength.Max}`,
  },
  location: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(MetroStation)}`,
  },
  level: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(UserLevel)}`,
  },
  trainingsTypes: {
    length: `Maximum number of items is ${MAX_TRAININGS_TYPES}`,
    invalidItems: `Field items must be from options: ${transformObjectValuesToString(TrainingType)}`,
  },
  timeForTraining: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(TrainingDuration)}`,
  },
  calories: {
    value: `Value must be from range: ${CaloriesValue.Min}-${CaloriesValue.Max}`,
  },
  achievements: {
    length: `Text length min is ${UserAchievementsLength.Min}, max is ${UserAchievementsLength.Max}`,
  },
  trainingDescription: {
    length: `Description length min is ${TrainingDescriptionLength.Min}, max is ${TrainingDescriptionLength.Max}`,
  },
  trainingTitle: {
    length: `Title length min is ${TrainingTitleLength.Min}, max is ${TrainingTitleLength.Max}`,
  },
  trainingSexFor: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(TrainingSexFor)}`,
  },
  price: {
    value: `Value must be greater then: ${PriceValue.Min}`,
  },
  orderCount: {
    value: `Value must be from range: ${OrderCountValue.Min}-${OrderCountValue.Max}`,
  },
  paymentType: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(PaymentType)}`,
  },
  orderType: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(OrderType)}`,
  },
  rating: {
    value: `Value must be from range: ${RatingValue.Min}-${RatingValue.Max}`,
  },
  requestStatus: {
    invalidFormat: `Field value must be from options: ${transformObjectValuesToString(RequestStatus)}`,
  },
  feedback: {
    length: `Feedback length min is ${FeedbackLength.Min}, max is ${FeedbackLength.Max}`,
  },

};

