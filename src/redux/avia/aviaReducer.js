/* eslint-disable indent */
import { AVIA, ERROR, ID, ADDITEM, DEFAULTITEMS } from '../typesActions'
const initialState = {
  aviaDate: [],
  error: false,
  stop: false,
  id: null,
  itemToShow: 5,
}
export const aviaReducer = (state = initialState, action) => {
  switch (action.type) {
    case AVIA:
      return {
        ...state,
        aviaDate: [...state.aviaDate, ...action.payload],
        stop: action.stop,
        error: false,
      }
    case ID:
      return {
        ...state,
        id: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: true,
      }
    case ADDITEM:
      return {
        ...state,
        itemToShow: state.itemToShow + 5,
      }
    case DEFAULTITEMS:
      return {
        ...state,
        itemToShow: 5,
      }
    default:
      return state
  }
}
