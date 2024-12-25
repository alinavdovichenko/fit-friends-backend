import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  getCommentText,
  getCommentTextError,
  getUserFormAchievements,
  getUserFormAchievementsError,
  getUserFormDescription,
  getUserFormDescriptionError,
  getTrainingFormDescription,
  getTrainingFormDescriptionError,
  isCommentSending,
  isUserFormDataSending,
  isTrainingFormDataSending,
  setAchievements,
  setCommentText,
  setCommentFormError,
  setDescription,
  setUserFormError,
  setTrainingDescription,
  setTrainingFormError,
} from '../../store';
import { State } from '../../types';
import {
  validateAchievements,
  validateCommentText,
  validateUserDescription,
  validateTrainingDescription,
} from '../../utils/validation';

export enum TextAreaInputType {
  Achievements = 'achievements',
  UserDescription = 'user-description',
  TrainingDescription = 'training-description',
  CommentText = 'comment-text',
}

type TextAreaInputTypeDiff = {
  styleClass?: string;
  valueSelector: (state: State) => string;
  errorSelector: (state: State) => string | undefined;
  validationFunction: (value: string) => string | undefined;
  setError: (value: string | undefined) => {
    payload: [string, string | undefined];
    type: string;
  };
  formStatusSelector: (state: State) => boolean;
  setValue: ActionCreatorWithPayload<string>;
  fieldName: string;
  labelText?: string;
};

type TextAreaInputTypeDiffs = {
  [TypeTextAreaInputType: string]: TextAreaInputTypeDiff;
};

export const TextAreaInputTypeDiffs: TextAreaInputTypeDiffs = {
  [TextAreaInputType.Achievements]: {
    styleClass: 'questionnaire-coach__textarea',
    valueSelector: getUserFormAchievements,
    errorSelector: getUserFormAchievementsError,
    validationFunction: validateAchievements,
    setError: (value: string | undefined) =>
      setUserFormError(['achievements', value]),
    formStatusSelector: isUserFormDataSending,
    setValue: setAchievements,
    fieldName: 'achievements',
  },
  [TextAreaInputType.UserDescription]: {
    styleClass: 'user-info-edit__textarea',
    valueSelector: getUserFormDescription,
    errorSelector: getUserFormDescriptionError,
    validationFunction: validateUserDescription,
    setError: (value: string | undefined) =>
      setUserFormError(['description', value]),
    formStatusSelector: isUserFormDataSending,
    setValue: setDescription,
    fieldName: 'description',
    labelText: 'Описание',
  },
  [TextAreaInputType.TrainingDescription]: {
    styleClass: 'create-training__textarea',
    valueSelector: getTrainingFormDescription,
    errorSelector: getTrainingFormDescriptionError,
    validationFunction: validateTrainingDescription,
    setError: (value: string | undefined) =>
      setTrainingFormError(['description', value]),
    formStatusSelector: isTrainingFormDataSending,
    setValue: setTrainingDescription,
    fieldName: 'description',
  },
  [TextAreaInputType.CommentText]: {
    valueSelector: getCommentText,
    errorSelector: getCommentTextError,
    validationFunction: validateCommentText,
    setError: (value: string | undefined) =>
      setCommentFormError(['text', value]),
    formStatusSelector: isCommentSending,
    setValue: setCommentText,
    fieldName: 'text',
  },
};
