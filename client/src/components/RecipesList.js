import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipesActions'

import './css/RecipesList.css'

class RecipesList extends Component {
  constructor(props) {
    super(props)

    this.onFetchRecipes = this.onFetchRecipes.bind(this)
  }

  /**
   * Fetches all the recipes based on a list of ingredients.
   */
  onFetchRecipes() {
    this.props.onFetchRecipes(this.props.ingredients)
  }

  render() {
    const recipesList = this.props.recipes.map((item) =>
      <li key={item.recipe_id}>
        <a href={item.source_url} target='_blank'>
          <h1>{item.title}</h1>
          <img src={item.image_url} alt={`${item.title}`} />
        </a>
      </li>
    )

    return (
      <div className='recipesList'>
        <h1> Recipes </h1>
        <button onClick={() => this.onFetchRecipes()}>Get recipes with your ingredients</button>
        <ul>
          {recipesList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  recipes: state.recipes
})

const mapActionsToProps = {
  onFetchRecipes: fetchRecipes
}

export default connect(mapStateToProps, mapActionsToProps)(RecipesList)
