import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import {
  appData,
  userForm,
  userData,
  trainingForm,
  catalogData,
  trainingsList,
  ordersList,
  balancesList,
  usersList,
  trainingInfo,
  userInfo,
  mainData,
  commentForm,
  orderForm,
} from './index';

export const rootReducer = combineReducers({
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.MainData]: mainData.reducer,
  [NameSpace.UserForm]: userForm.reducer,
  [NameSpace.UserData]: userData.reducer,
  [NameSpace.TrainingForm]: trainingForm.reducer,
  [NameSpace.CatalogData]: catalogData.reducer,
  [NameSpace.TrainingsList]: trainingsList.reducer,
  [NameSpace.OrdersList]: ordersList.reducer,
  [NameSpace.BalancesList]: balancesList.reducer,
  [NameSpace.UsersList]: usersList.reducer,
  [NameSpace.TrainingInfo]: trainingInfo.reducer,
  [NameSpace.UserInfo]: userInfo.reducer,
  [NameSpace.CommentForm]: commentForm.reducer,
  [NameSpace.OrderForm]: orderForm.reducer,
});
