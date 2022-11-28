/* eslint-disable indent */
import { ALL, CHECKONE, UNSETALL } from './typesActions'

const initialState = {
  checkbox: [],
  checkAll: false,
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL:
      return {
        ...state,
        checkAll: !state.checkAll,
        checkbox: action.payload,
      }
    case CHECKONE:
      return {
        ...state,
        checkbox: [...action.payload],
      }
    case UNSETALL:
      return {
        ...state,
        checkAll: false,
      }
    default:
      return state
  }
}
