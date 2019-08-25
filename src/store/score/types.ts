export interface ScoreItem {
  type: string
  count: number
}

export interface ScoreState {
  items: ScoreItem[]
}

export const ADD_SCORE_ITEM = 'ADD_SCORE_ITEM'
export const RESET_SCORE_ITEMS = 'RESET_SCORE_ITEMS'

export interface AddScoreItemAction {
  type: typeof ADD_SCORE_ITEM
  item: ScoreItem
}

export interface ResetScoreItemsAction {
  type: typeof RESET_SCORE_ITEMS
}

export type ScoreActionTypes = AddScoreItemAction | ResetScoreItemsAction
