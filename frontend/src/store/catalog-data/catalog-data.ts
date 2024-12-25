import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CatalogData } from '../../types';
import { ListItemsPortion, NameSpace } from '../../consts';
import {
  getAllUsersAction,
  getAllTrainingsAction,
  getCoachOrdersAction,
  getCoachTrainingsAction,
  getUserBalancesAction,
  getUserFriendsAction,
} from '../api-actions';

const initialState: CatalogData = {
  limit: ListItemsPortion.Default,
  totalPages: 1,
  totalItems: 0,
  currentPage: 1,
  itemsPerPage: 0,
  isDataLoading: false,
};

export const catalogData = createSlice({
  name: NameSpace.CatalogData,
  initialState,
  reducers: {
    resetCatalogData: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.itemsPerPage = initialState.itemsPerPage;
      state.totalPages = initialState.totalPages;
      state.totalItems = initialState.totalItems;
      state.currentPage = initialState.currentPage;
    },
    resetCatalogPage: (state) => {
      state.currentPage = initialState.currentPage;
    },
    increaseCatalogPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllTrainingsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getCoachTrainingsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getCoachOrdersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getUserBalancesAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getUserFriendsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getAllUsersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(getAllTrainingsAction.fulfilled, (state, action) => {
        const { itemsPerPage, totalItems, totalPages } = action.payload;
        state.itemsPerPage = itemsPerPage;
        state.totalPages = totalPages;
        state.totalItems = totalItems;
        state.isDataLoading = false;
      })
      .addCase(getCoachTrainingsAction.fulfilled, (state, action) => {
        const { itemsPerPage, totalItems, totalPages } = action.payload;
        state.itemsPerPage = itemsPerPage;
        state.totalPages = totalPages;
        state.totalItems = totalItems;
        state.isDataLoading = false;
      })
      .addCase(getCoachOrdersAction.fulfilled, (state, action) => {
        const { itemsPerPage, totalItems, totalPages } = action.payload;
        state.itemsPerPage = itemsPerPage;
        state.totalPages = totalPages;
        state.totalItems = totalItems;
        state.isDataLoading = false;
      })
      .addCase(getUserBalancesAction.fulfilled, (state, action) => {
        const { itemsPerPage, totalItems, totalPages } = action.payload;
        state.itemsPerPage = itemsPerPage;
        state.totalPages = totalPages;
        state.totalItems = totalItems;
        state.isDataLoading = false;
      })
      .addCase(getUserFriendsAction.fulfilled, (state, action) => {
        const { itemsPerPage, totalItems, totalPages } = action.payload;
        state.itemsPerPage = itemsPerPage;
        state.totalPages = totalPages;
        state.totalItems = totalItems;
        state.isDataLoading = false;
      })
      .addCase(getAllUsersAction.fulfilled, (state, action) => {
        const { itemsPerPage, totalItems, totalPages } = action.payload;
        state.itemsPerPage = itemsPerPage;
        state.totalPages = totalPages;
        state.totalItems = totalItems;
        state.isDataLoading = false;
      })
      .addCase(getAllTrainingsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getCoachTrainingsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getCoachOrdersAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getUserBalancesAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getUserFriendsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(getAllUsersAction.rejected, (state) => {
        state.isDataLoading = false;
      });
  },
});

export const { resetCatalogData, resetCatalogPage, increaseCatalogPage } =
  catalogData.actions;
