import { createSelector } from 'reselect'
import { AppState } from '../store/'
import { ScoreConfig, ScoreConfigItem } from '../store/config/types'
import { ScoreState, ScoreItem } from '../store/score/types'

const getScore = (state: AppState) => state.score
const getConfig = (state: AppState) => state.config

export interface ScoreTotals {
  score: number
  bonus: number
  items: {
    [index: string]: number
  }
}

// Perform bonus calculation only on score items configured for it
function computeBonusCount(score: ScoreItem, config: ScoreConfigItem): number {
  return config.bonusTrigger ? Math.floor(score.count / config.bonusTrigger) : 0
}

// Replace unitScore value with bonusValue for the number of bonuses awarded
function adjustScoreForBonus(
  score: number,
  bonusCount: number,
  config: ScoreConfigItem
): number {
  console.warn('calculation is off')
  console.log(score, config.unitPoints, config.bonusValue, bonusCount)
  return score - config.unitPoints * bonusCount + config.bonusValue * bonusCount
}

export const computeScoreTotals = createSelector(
  [getScore, getConfig],
  (score: ScoreState, config: ScoreConfig): ScoreTotals => {
    const totals: ScoreTotals = {
      score: 0,
      bonus: 0,
      items: {}
    }

    for (let i = 0; i < score.items.length; i++) {
      let s_item: ScoreItem = score.items[i]
      let c_item: ScoreConfigItem = config.items.filter(
        ci => ci.type === s_item.type
      )[0]

      if (!c_item) {
        console.warn(`Invalid score type: ${s_item.type}`)
        break
      }

      let itemScore = c_item.unitPoints * s_item.count
      let itemBonusCount = computeBonusCount(s_item, c_item)
      itemScore = adjustScoreForBonus(itemScore, itemBonusCount, c_item)
      totals.score = totals.score + itemScore
      totals.bonus = totals.bonus + itemBonusCount
      totals[c_item.type] = itemScore
    }
    return totals
  }
)
