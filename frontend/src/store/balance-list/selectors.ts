import { NameSpace } from '../../consts';
import { State, TrainingBalance } from '../../types';

export const getBalancesList = (
  state: Pick<State, NameSpace.BalancesList>,
): TrainingBalance[] => state[NameSpace.BalancesList].balances;

export const isOnlyActiveBalances = (
  state: Pick<State, NameSpace.BalancesList>,
): boolean => state[NameSpace.BalancesList].isOnlyActive;

export const isBalancesListLoading = (
  state: Pick<State, NameSpace.BalancesList>,
): boolean => state[NameSpace.BalancesList].isDataLoading;
