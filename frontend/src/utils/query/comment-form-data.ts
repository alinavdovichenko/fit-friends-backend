import { State } from '../../types';

export function getCommentData(state: State) {
  const { rating, text, trainingId } = state.COMMENT_FORM;
  return {
    rating: rating,
    text,
    trainingId,
  };
}
