import {
  CLOCK_TICK,
  EPG_DATA_REQUESTED,
  EPG_DATA_SUCCESS,
  OPEN_MODAL_VIEW,
  CLOSE_MODAL_VIEW
} from './actionTypes'

export const clockTick = increment => ({
  type: CLOCK_TICK,
  payload: { increment }
})

export const fetchEPG = () => ({
  type: EPG_DATA_REQUESTED
})

export const fetchEPGSuccess = epg => {
  return {
    type: EPG_DATA_SUCCESS,
    payload: epg
  }
}

export const openModal = content => {
  return {
    type: OPEN_MODAL_VIEW,
    payload: content
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL_VIEW
  }
}
