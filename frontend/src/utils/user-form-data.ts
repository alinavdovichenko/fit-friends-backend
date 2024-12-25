import { State } from '../types';

export function getRegisterData(state: State, avatar?: Blob): FormData {
  const { email, password, name, sex, dateOfBirth, role, location } =
    state.USER_FORM;
  const formData = new FormData();
  if (!email || !password || !name || !location || !avatar) {
    throw new Error('Not enough data for registration');
  }
  formData.append('email', email);
  formData.append('password', password);
  formData.append('name', name);
  formData.append('sex', sex);
  if (dateOfBirth.length) {
    formData.append('dateOfBirth', dateOfBirth);
  }
  formData.append('role', role);
  formData.append('location', location);
  formData.append('avatar', avatar);
  return formData;
}

export function getCustomerQuestionaryData(state: State) {
  const {
    level,
    trainingTypes,
    timeForTraining,
    caloriesPerDay,
    caloriesToLose,
  } = state.USER_FORM;
  if (!trainingTypes.length || !caloriesPerDay || !caloriesToLose) {
    throw new Error('Not enough data for customer questionary');
  }
  return {
    level,
    timeForTraining,
    caloriesPerDay: Number(caloriesPerDay),
    caloriesToLose: Number(caloriesToLose),
    trainingTypes,
  };
}

export function getCoachQuestionaryData(
  state: State,
  certificates?: Blob[],
): FormData {
  const { level, trainingTypes, achievements, status } = state.USER_FORM;
  const formData = new FormData();
  if (!trainingTypes.length || !certificates?.length) {
    throw new Error('Not enough data for coach questionary');
  }
  formData.append('level', level);
  formData.append('achievements', achievements);
  trainingTypes.forEach((type) => {
    formData.append('workoutTypes[]', type);
  });
  certificates.forEach((certificate) => {
    formData.append('certificates', certificate);
  });
  formData.append('isReady', String(status));
  return formData;
}

export function getUpdateUserDataWithAvatar(
  state: State,
  newAvatar: Blob,
): FormData {
  const { name, sex, isReady, level, trainingTypes, location, description } =
    state.USER_DATA;
  const {
    name: newName,
    sex: newSex,
    status,
    level: newLevel,
    trainingTypes: newTrainingTypes,
    location: newLocation,
    description: newDescription,
    avatar,
  } = state.USER_FORM;
  const formData = new FormData();
  if (newName !== name) {
    formData.append('name', newName);
  }
  if (newSex !== sex) {
    formData.append('sex', newSex);
  }
  if (status !== isReady) {
    formData.append('isReady', String(status));
  }
  if (newLevel !== level) {
    formData.append('level', newLevel);
  }
  if (newLocation && newLocation !== location) {
    formData.append('location', newLocation);
  }
  if (newDescription !== description) {
    formData.append('description', newDescription);
  }
  if (
    trainingTypes.length !== newTrainingTypes.length ||
    trainingTypes.length !==
      [...new Set(trainingTypes.concat(newTrainingTypes))].length
  ) {
    newTrainingTypes.forEach((type) => {
      formData.append('workoutTypes[]', type);
    });
  }
  if (!avatar) {
    formData.append('avatar', String(null));
  }
  formData.append('avatar', newAvatar);
  return formData;
}

export function getUpdateUserData(state: State) {
  const { name, sex, isReady, level, trainingTypes, location, description } =
    state.USER_DATA;
  const {
    name: newName,
    sex: newSex,
    status,
    level: newLevel,
    trainingTypes: newTrainingTypes,
    location: newLocation,
    description: newDescription,
    avatar,
  } = state.USER_FORM;
  return {
    name: newName !== name ? newName : undefined,
    sex: newSex !== sex ? newSex : undefined,
    isReady: status !== isReady ? status : undefined,
    level: newLevel !== level ? newLevel : undefined,
    location: newLocation && newLocation !== location ? newLocation : undefined,
    description: newDescription !== description ? newDescription : undefined,
    trainingTypes:
      trainingTypes.length !== newTrainingTypes.length ||
      trainingTypes.length !==
        [...new Set(trainingTypes.concat(newTrainingTypes))].length
        ? newTrainingTypes
        : undefined,
    avatar: avatar === null ? null : undefined,
  };
}

