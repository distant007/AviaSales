import { combineReducers } from 'redux'

import { tabsReducer } from './tabsReducer'
import { filterReducer } from './filterReducer'
import { aviaReducer } from './aviaReducer'
export const rootReducer = combineReducers({
  tabsReducer,
  filterReducer,
  aviaReducer,
})
