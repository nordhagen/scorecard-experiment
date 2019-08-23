import { EPG_DATA_SUCCESS } from '../actionTypes'
import { makeIdsUnique } from '../../utils/epg'

const initialState = { channels: [] }

const epg = (state = initialState, action) => {
  switch (action.type) {
    case EPG_DATA_SUCCESS: {
      // Adding unique ids to the data since react list
      // items need unique keys to be performant.
      const data = makeIdsUnique(action.payload)
      return { channels: data }
    }
    default: {
      return state
    }
  }
}

export default epg
