/* eslint-disable indent */
import { CHIPEST, FASTEST, OPTIMAl } from './typesActions'
const initialState = {
  date: 'CHIPEST',
}
export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHIPEST:
      return {
        date: 'CHIPEST',
      }
    case FASTEST:
      return {
        date: 'FASTEST',
      }
    case OPTIMAl:
      return {
        date: 'OPTIMAl',
      }
    default:
      return state
  }
}
