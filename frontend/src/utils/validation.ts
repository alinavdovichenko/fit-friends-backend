import Joi from 'joi';
import {
  CaloriesValue,
  CoachAchievementsLength,
  CommentTextLength,
  NameLength,
  PasswordLength,
  PriceValue,
  REQUIRED_INPUT_MESSAGE,
  UserDescriptionLength,
  TrainingDescriptionLength,
  TrainingTitleLength,
} from '../consts';

type ValidationData = {
  email: string;
  password: string;
  name: string;
  dateOfBirth: string;
  calories: string;
  achievements: string;
  userDescription: string;
  trainingTitle: string;
  trainingPrice: string;
  trainingDescription: string;
  commentText: string;
};

const ValidationSchema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .message('Введите валидный адрес электронной почты')
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  password: Joi.string()
    .min(PasswordLength.Min)
    .message(
      `Рекомендуемая длина пароля ${PasswordLength.Min} - ${PasswordLength.Max} символов`,
    )
    .max(PasswordLength.Max)
    .message(
      `Рекомендуемая длина пароля ${PasswordLength.Min} - ${PasswordLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  name: Joi.string()
    .pattern(/^[a-zа-яё]+$/i)
    .message('Только буквы русского/английского алфавита')
    .min(NameLength.Min)
    .message(
      `Рекомендуемая длина имени ${NameLength.Min} - ${NameLength.Max} символов`,
    )
    .max(NameLength.Max)
    .message(
      `Рекомендуемая длина имени ${NameLength.Min} - ${NameLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  dateOfBirth: Joi.date()
    .less('now')
    .message('Некорректная дата рождения')
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  calories: Joi.number()
    .integer()
    .message('Введите целое число')
    .min(CaloriesValue.Min)
    .message(`Минимальное количество калорий: ${CaloriesValue.Min}`)
    .max(CaloriesValue.Max)
    .message(`Минимальное количество калорий: ${CaloriesValue.Max}`)
    .required()
    .messages({ 'number.base': REQUIRED_INPUT_MESSAGE }),
  achievements: Joi.string()
    .min(CoachAchievementsLength.Min)
    .message(
      `Рекомендуемая длина ${CoachAchievementsLength.Min} - ${CoachAchievementsLength.Max} символов`,
    )
    .max(CoachAchievementsLength.Max)
    .message(
      `Рекомендуемая длина ${CoachAchievementsLength.Min} - ${CoachAchievementsLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  userDescription: Joi.string()
    .min(UserDescriptionLength.Min)
    .message(
      `Рекомендуемая длина ${UserDescriptionLength.Min} - ${UserDescriptionLength.Max} символов`,
    )
    .max(UserDescriptionLength.Max)
    .message(
      `Рекомендуемая длина ${UserDescriptionLength.Min} - ${UserDescriptionLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  trainingTitle: Joi.string()
    .min(TrainingTitleLength.Min)
    .message(
      `Рекомендуемая длина ${TrainingTitleLength.Min} - ${TrainingTitleLength.Max} символов`,
    )
    .max(TrainingTitleLength.Max)
    .message(
      `Рекомендуемая длина ${TrainingTitleLength.Min} - ${TrainingTitleLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  trainingPrice: Joi.number()
    .integer()
    .message('Введите целое число')
    .min(PriceValue.Min)
    .message(`Минимальная цена: ${PriceValue.Min}`)
    .required()
    .messages({ 'number.base': REQUIRED_INPUT_MESSAGE }),
  trainingDescription: Joi.string()
    .min(TrainingDescriptionLength.Min)
    .message(
      `Рекомендуемая длина ${TrainingDescriptionLength.Min} - ${TrainingDescriptionLength.Max} символов`,
    )
    .max(TrainingDescriptionLength.Max)
    .message(
      `Рекомендуемая длина ${TrainingDescriptionLength.Min} - ${TrainingDescriptionLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
  commentText: Joi.string()
    .min(CommentTextLength.Min)
    .message(
      `Рекомендуемая длина ${CommentTextLength.Min} - ${CommentTextLength.Max} символов`,
    )
    .max(CommentTextLength.Max)
    .message(
      `Рекомендуемая длина ${CommentTextLength.Min} - ${CommentTextLength.Max} символов`,
    )
    .required()
    .messages({ 'string.empty': REQUIRED_INPUT_MESSAGE }),
};

const validateProperty = (
  propertyName: keyof ValidationData,
  value: unknown,
): string | undefined =>
  ValidationSchema[propertyName].validate(value).error?.message;

export const validateEmail = (value: unknown) =>
  validateProperty('email', value);

export const validatePassword = (value: unknown) =>
  validateProperty('password', value);

export const validateName = (value: unknown) => validateProperty('name', value);

export const validateDateOfBirth = (value: unknown) =>
  validateProperty('dateOfBirth', value);

export const validateCalories = (value: unknown) =>
  validateProperty('calories', value);

export const validateAchievements = (value: unknown) =>
  validateProperty('achievements', value);

export const validateUserDescription = (value: unknown) =>
  validateProperty('userDescription', value);

export const validateTrainingTitle = (value: unknown) =>
  validateProperty('trainingTitle', value);

export const validateTrainingPrice = (value: unknown) =>
  validateProperty('trainingPrice', value);

export const validateTrainingDescription = (value: unknown) =>
  validateProperty('trainingDescription', value);

export const validateCommentText = (value: unknown) =>
  validateProperty('commentText', value);
