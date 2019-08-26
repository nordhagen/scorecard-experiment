import {
  ScoreState,
  ADD_SCORE_ITEM,
  RESET_SCORE_ITEMS,
  AddScoreItemAction,
  ScoreActionTypes
} from './types'

// const initialState: ScoreState = {
//   items: [
//     { type: 'a', count: 4 },
//     { type: 'b', count: 2 },
//     { type: 'c', count: 1 },
//     { type: 'd', count: 3 }
//   ]
// }

const initialState: ScoreState = {
  items: [
    { type: 'a', count: 0 },
    { type: 'b', count: 0 },
    { type: 'c', count: 0 },
    { type: 'd', count: 0 }
  ]
}

function updateScoreState(
  state: ScoreState,
  action: AddScoreItemAction
): ScoreState {
  let newState = <ScoreState>{
    items: state.items.map(item =>
      item.type === action.item.type
        ? { ...item, count: item.count + action.item.count }
        : item
    )
  }
  return newState
}

export function scoreStateReducer(
  state: ScoreState = initialState,
  action: ScoreActionTypes
): ScoreState {
  switch (action.type) {
    case ADD_SCORE_ITEM:
      return updateScoreState(state, action)

    case RESET_SCORE_ITEMS:
      return initialState

    default:
      return state
  }
}
