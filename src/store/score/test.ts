import * as actions from './actions'
import * as types from './types'

describe('actions', () => {
  it('should create an action to add score item', () => {
    const expectedAction = {
      type: types.ADD_SCORE_ITEM,
      item: {
        type: 'a',
        count: 1
      }
    }
    expect(actions.addScoreItem('a', 1)).toEqual(expectedAction)
  })
  it('should create an action to reset score state', () => {
    const expectedAction = {
      type: types.RESET_SCORE_ITEMS
    }
    expect(actions.resetScoreItems()).toEqual(expectedAction)
  })
})
