import axios from "axios"
import { UPDATE_RECIPES } from '../consts/consts'

/**
 * Makes a call towards the backend api with a list of ingredients.
 * Upon a response it fires a new event in the dispatcher to add the fetched
 * recipes to the Redux store.
 * @param {*} ingredientObjects 
 */
export function fetchRecipes(ingredientObjects) {
  const ingredients = ingredientObjects.map(item => item.ingredient)

  return (dispatch) => {
    axios
      .get(`http://localhost:3000/search?ingredients=${ingredients}`)
      .then((response) => {
        dispatch(updateRecipes(response.data.recipes))
      })
      .catch((error) => console.log(error))
  }
}

/**
 * Adds recipes to the store.
 * @param {*} recipes 
 */
export function updateRecipes(recipes) {
  return {
    type: UPDATE_RECIPES,
    payload: recipes
  }
}