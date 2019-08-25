import { UPDATE_SCORE_CONFIG } from './types'

export const updateScoreConfig = content => {
  return {
    type: UPDATE_SCORE_CONFIG,
    payload: content
  }
}
