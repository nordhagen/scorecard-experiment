import { CLOCK_TICK } from '../actionTypes'
import { STARTING_TIME_OF_DAY, TIME_MULTIPLIER } from '../../config'

const initialState = new Date(STARTING_TIME_OF_DAY)

const time = (state = initialState, action) => {
  switch (action.type) {
    case CLOCK_TICK: {
      return new Date(
        state.getTime() + action.payload.increment * TIME_MULTIPLIER
      )
    }
    default: {
      return state
    }
  }
}

export default time
