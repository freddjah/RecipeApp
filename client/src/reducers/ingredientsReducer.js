import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../consts/consts'

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_INGREDIENT:
      return [...state, payload]
    case REMOVE_INGREDIENT:
      return state.filter((item) => item.id !== payload.id)
    default:
      return state
  }
}