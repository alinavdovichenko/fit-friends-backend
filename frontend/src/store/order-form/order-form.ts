import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderForm } from '../../types';
import {
  NameSpace,
  OrderCountValue,
  OrderType,
  PaymentType,
  PriceValue,
} from '../../consts';
import { createOrderAction } from '../api-actions';

const initialState: OrderForm = {
  trainingId: '',
  price: PriceValue.Min,
  type: OrderType.Default,
  count: OrderCountValue.Min,
  totalSum: PriceValue.Min,
  paymentType: PaymentType.Visa,
  isSending: false,
};

export const orderForm = createSlice({
  name: NameSpace.OrderForm,
  initialState,
  reducers: {
    setOrderForm: (
      _,
      action: PayloadAction<{ trainingId: string; price: number }>,
    ) => ({
      ...initialState,
      trainingId: action.payload.trainingId,
      price: action.payload.price,
      totalSum: action.payload.price * OrderCountValue.Min,
    }),
    increaseCount: (state) => {
      state.count = state.count + 1;
      state.totalSum = state.count * state.price;
    },
    decreaseCount: (state) => {
      state.count = state.count - 1;
      state.totalSum = state.count * state.price;
    },
    setPaymentType: (state, action: PayloadAction<PaymentType>) => {
      state.paymentType = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createOrderAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(createOrderAction.fulfilled, () => ({ ...initialState }))
      .addCase(createOrderAction.rejected, (state) => {
        state.isSending = false;
      });
  },
});

export const { setOrderForm, increaseCount, decreaseCount, setPaymentType } =
  orderForm.actions;
