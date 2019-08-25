import { ADD_SCORE_ITEM, RESET_SCORE_ITEMS, ScoreItem } from './types'

export const addScoreItem = (content: ScoreItem) => {
  return {
    type: ADD_SCORE_ITEM,
    item: content
  }
}

export const resetScoreItems = () => {
  return {
    type: RESET_SCORE_ITEMS
  }
}
