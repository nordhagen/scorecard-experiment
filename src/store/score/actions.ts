import {
  ADD_SCORE_ITEM,
  RESET_SCORE_ITEMS,
  ScoreItem,
  AddScoreItemAction
} from './types'

export const addScoreItem = (
  type: string,
  count: number
): AddScoreItemAction => {
  return {
    type: ADD_SCORE_ITEM,
    item: { type, count }
  }
}

export const resetScoreItems = () => {
  return {
    type: RESET_SCORE_ITEMS
  }
}
