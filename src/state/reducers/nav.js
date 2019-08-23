import { OPEN_MODAL_VIEW, CLOSE_MODAL_VIEW } from '../actionTypes'

const initialState = {
  modal: null
}

const nav = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_VIEW: {
      return { ...state, modal: action.payload }
    }
    case CLOSE_MODAL_VIEW: {
      return { ...state, modal: null }
    }
    default: {
      return state
    }
  }
}

export default nav
