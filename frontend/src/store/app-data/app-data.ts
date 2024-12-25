import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppData, Route } from '../../types';
import { NameSpace, PopupKey, AuthorizationStatus } from '../../consts';
import {
  checkAuthAction,
  decreaseTrainingBalanceAction,
  loginAction,
  registerAction,
  deleteNotificationAction,
  getUserNotificationsAction,
  sendCommentAction,
  createOrderAction,
} from '../api-actions';

const initialState: AppData = {
  authStatus: AuthorizationStatus.Unknown,
  userRole: undefined,
  userId: '',
  notifications: [],
  activeTraining: undefined,
  activePage: undefined,
  activePopup: undefined,
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    setActiveTraining: (state, action: PayloadAction<string | undefined>) => {
      state.activeTraining = action.payload;
    },
    setActiveRoute: (state, action: PayloadAction<Route | undefined>) => {
      state.activePage = action.payload;
    },
    setActivePopup: (state, action: PayloadAction<PopupKey | undefined>) => {
      state.activePopup = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.userRole = action.payload.role;
        state.userId = action.payload.id;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.userRole = action.payload.role;
        state.userId = action.payload.id;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.userRole = action.payload.role;
        state.userId = action.payload.id;
      })
      .addCase(decreaseTrainingBalanceAction.fulfilled, (state, action) => {
        state.activeTraining = action.payload.trainingId;
      })
      .addCase(getUserNotificationsAction.fulfilled, (state, action) => {
        state.notifications = action.payload;
      })
      .addCase(deleteNotificationAction.fulfilled, (state, action) => {
        const deletedId = action.payload;
        state.notifications = state.notifications.filter(
          (notification) => notification.id !== deletedId,
        );
      })
      .addCase(sendCommentAction.fulfilled, (state) => {
        state.activePopup = undefined;
      })
      .addCase(createOrderAction.fulfilled, (state) => {
        state.activePopup = undefined;
      });
  },
});

export const { setActiveTraining, setActiveRoute, setActivePopup } =
  appData.actions;
