import { combineReducers } from 'redux'
import time from './time'
import epg from './epg'
import nav from './nav'

export default combineReducers({ time, epg, nav })
