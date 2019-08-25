import {
  ScoreState,
  ADD_SCORE_ITEM,
  RESET_SCORE_ITEMS,
  AddScoreItemAction,
  ScoreActionTypes
} from './types'

const initialState: ScoreState = {
  items: [
    { type: 'a', count: 4 },
    { type: 'b', count: 2 },
    { type: 'c', count: 1 },
    { type: 'd', count: 3 }
  ]
}

function updateScoreState(
  state: ScoreState,
  action: AddScoreItemAction
): ScoreState {
  return <ScoreState>{
    items: state.items.map(item => {
      if (item.type === action.item.type) {
        return { ...item, count: item.count += action.item.count }
      }
    })
  }
}

export function scoreStateReducer(
  state: ScoreState = initialState,
  action: ScoreActionTypes
): ScoreState {
  console.log('yep', action.type)
  switch (action.type) {
    case ADD_SCORE_ITEM:
      updateScoreState(state, action)

    case RESET_SCORE_ITEMS:
      return initialState

    default:
      return state
  }
}
