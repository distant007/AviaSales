import { combineReducers } from 'redux'

import { tabsReducer } from './tabs/tabsReducer'
import { filterReducer } from './filter/filterReducer'
import { aviaReducer } from './avia/aviaReducer'
export const rootReducer = combineReducers({
  tabsReducer,
  filterReducer,
  aviaReducer,
})
