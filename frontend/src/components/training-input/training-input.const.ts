import {
  validateTrainingDescription,
  validateTrainingPrice,
  validateTrainingTitle,
} from '../../utils/validation';

export enum TrainingInputType {
  Title = 'title',
  Description = 'description',
  Price = 'price',
}

type TrainingInputTypeDiff = {
  validationFunction: (value: string) => string | undefined;
  fieldName: string;
  labelText: string;
  isInput: boolean;
  inputSymbol?: string;
  styleClassMode?: string;
};

type TrainingInputTypeDiffs = {
  [type: string]: TrainingInputTypeDiff;
};

export const TrainingInputTypeDiffs: TrainingInputTypeDiffs = {
  [TrainingInputType.Title]: {
    validationFunction: validateTrainingTitle,
    fieldName: 'title',
    labelText: 'Название тренировки',
    isInput: true,
    styleClassMode: 'training',
  },
  [TrainingInputType.Description]: {
    validationFunction: validateTrainingDescription,
    fieldName: 'description',
    labelText: 'Описание тренировки',
    isInput: false,
  },
  [TrainingInputType.Price]: {
    validationFunction: validateTrainingPrice,
    fieldName: 'price',
    labelText: 'Стоимость',
    isInput: true,
    inputSymbol: ' ₽',
    styleClassMode: 'price',
  },
};
