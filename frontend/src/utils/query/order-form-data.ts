import { State } from '../../types';

export function getOrderData(state: State) {
  const { type, count, paymentType, trainingId } = state.ORDER_FORM;
  return {
    type,
    count,
    paymentType,
    trainingId,
  };
}
