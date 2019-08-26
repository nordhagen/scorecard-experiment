import { ScoreConfig } from './types'

const initialState: ScoreConfig = {
  items: [
    {
      type: 'a',
      unitPoints: 50,
      bonusTrigger: 3,
      bonusValue: 200
    },
    {
      type: 'b',
      unitPoints: 30,
      bonusTrigger: 2,
      bonusValue: 90
    },
    {
      type: 'c',
      unitPoints: 20,
      bonusTrigger: null,
      bonusValue: null
    },
    {
      type: 'd',
      unitPoints: 15,
      bonusTrigger: null,
      bonusValue: null
    }
  ]
}

export function scoreConfigReducer() {
  return initialState
}
