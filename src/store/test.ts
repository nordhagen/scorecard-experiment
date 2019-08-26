import store from '.'

test('initial state', () => {
  let state
  state = store.getState()
  expect(state).toEqual({
    score: {
      items: [
        { type: 'a', count: 0 },
        { type: 'b', count: 0 },
        { type: 'c', count: 0 },
        { type: 'd', count: 0 }
      ]
    },
    config: {
      items: [
        { type: 'a', unitPoints: 50, bonusTrigger: 3, bonusValue: 200 },
        { type: 'b', unitPoints: 30, bonusTrigger: 2, bonusValue: 90 },
        { type: 'c', unitPoints: 20, bonusTrigger: null, bonusValue: null },
        { type: 'd', unitPoints: 15, bonusTrigger: null, bonusValue: null }
      ]
    }
  })
})
