import { State } from '../../types';

export function getAllTrainingsQuery(state: State): URLSearchParams {
  const { limit, currentPage } = state.CATALOG_DATA;
  const { price, calories, rating, types, sorting } =
    state.TRAININGS_LIST.filter;
  const params = new URLSearchParams();
  params.append('limit', limit.toString());
  params.append('page', currentPage.toString());
  if (price.min) {
    params.append('minPrice', price.min.toString());
  }
  if (price.max) {
    params.append('maxPrice', price.max.toString());
  }
  if (calories.min) {
    params.append('minCalories', calories.min.toString());
  }
  if (calories.max) {
    params.append('maxCalories', calories.max.toString());
  }
  if (rating.min) {
    params.append('minRating', rating.min.toString());
  }
  if (rating.max) {
    params.append('maxRating', rating.max.toString());
  }
  if (types.length) {
    types.forEach((item) => {
      params.append('trainingTypes', item);
    });
  }
  if (sorting) {
    params.append('sorting', sorting);
  }
  return params;
}
