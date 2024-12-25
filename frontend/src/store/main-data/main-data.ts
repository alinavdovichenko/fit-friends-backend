import { createSlice } from '@reduxjs/toolkit';
import { MainData } from '../../types';
import { NameSpace } from '../../consts';

const initialState: MainData = {
  trainingsForUser: [],
  specialTrainings: [],
  popularTrainings: [],
  readyUsers: [],
  isDataLoading: false,
};

export const mainData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {},
});
