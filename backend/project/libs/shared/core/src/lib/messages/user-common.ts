import { VideoFile } from '../consts/files.const';

export const UserMessage = {
  Exists: 'User with this email exists',
  NotFound: 'User not found',
  PasswordWrong: 'User password is wrong',
};

export const FileMessage = {
  UploadedVideoType: `Uploaded file type is not matching: ${VideoFile.MimeTypes.join(', ')}`,
};

export enum AuthErrorMessage {
  UserAlreadyExist = 'User with this email already exists',
  UserNotFound = 'User with this email not found',
  UserPasswordOrEmailWrong = 'User password or email is wrong',
  RefreshTokenNotValid = 'Refresh token is not valid',
  WrongAccessToken = 'Wrong access-token or expired',
  ActionNotAllowed = 'User can update only his own data',
  UsersCountExceeded = 'The number of users cannot be more than 50',
  UpdateForbiddenProperties = 'Email, password, role and some others cannot be updated',
  WrongUserRole = 'Only a user with the Client role has access to this action',
  TrainingNotFound = "The training with the specified ID is not on the user's balance",
  AlreadyRequested = 'Friendship already requested',
  AlreadyHaveFriend = 'The user is already your friend',
  AlreadyReqTraining = 'The personal training is already requested',
  NotFriend = 'Personal training request allowed only for friends',
  NoPersonalTraining = 'The current trainer does not provide personal training',
  NotReadyToTraining = 'The current user is not ready to training',
  DontHaveFriend = "Don't have user with this ID in friends list",
  CantAcceptFriend = "Can't accept friendship from user, who didn't request it",
  CantAcceptTraining = "Can't accept personal training from user, who didn't request it",
  CantRejectFriend = "Can't reject friendship from user, who is your friend",
  CantRejectUser = "Can't reject user, who did't request friendship",
  GymAlreadyFavorite = 'The gym is already in favorite list',
  GymNotFavorite = 'The gym is not in favorite list',
  SameId = 'Requestor ID and respondend ID are the same',
}
