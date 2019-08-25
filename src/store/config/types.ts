export interface ScoreConfigItem {
  type: string
  unitPoints: number
  bonusTrigger: number
  bonusValue: number
}

export interface ScoreConfig {
  items: ScoreConfigItem[]
}

/**
 * Updating score config at runtime not supported ath this time
 * 

 export const UPDATE_SCORE_CONFIG = 'UPDATE_SCORE_CONFIG'

export interface UpdateScoreConfigAction {
  type: typeof UPDATE_SCORE_CONFIG
  config: ScoreConfig
}

export type ScoreConfigActionTypes = UpdateScoreConfigAction

*/
