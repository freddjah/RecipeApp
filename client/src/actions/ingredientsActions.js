import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../consts/consts'

// Holds the current id, for separation of different ingredients.
let nextIngredientId = 0;

/**
 * Adds a new ingredient to the Redux store.
 * @param {*} ingredient 
 */
export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    payload: {id: nextIngredientId++, ingredient}
  }
}

/**
 * Removes an ingredient from the Redux store.
 * @param {*} id 
 */
export function removeIngredient(id) {
  return {
    type: REMOVE_INGREDIENT,
    payload: { id }
  }
}