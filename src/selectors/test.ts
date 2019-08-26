import React from 'react'
import renderer from 'react-test-renderer'
import { computeScoreTotals, ScoreTotals } from './'
import { ScoreState } from '../store/score/types'
import { ScoreConfig } from '../store/config/types'

const score: ScoreState = {
  items: [
    { type: 'a', count: 2 },
    { type: 'b', count: 2 },
    { type: 'c', count: 1 },
    { type: 'd', count: 3 }
  ]
}

const config: ScoreConfig = {
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
      bonusTrigger: 0,
      bonusValue: 0
    },
    {
      type: 'd',
      unitPoints: 15,
      bonusTrigger: 0,
      bonusValue: 0
    }
  ]
}

const expected = {
  score: 255,
  bonus: 1,
  items: {},
  a: 100,
  b: 90,
  c: 20,
  d: 45
}

test('Computes the correct score, adjusted for bonuses', () => {
  const totals: ScoreTotals = computeScoreTotals({ score, config })
  expect(totals).toEqual(expected)
})
