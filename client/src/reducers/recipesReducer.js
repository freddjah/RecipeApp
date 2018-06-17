import { UPDATE_RECIPES } from "../consts/consts";

export default (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_RECIPES:
      return payload
    default:
      return state
  }
}