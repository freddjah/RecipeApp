import React, { Component } from 'react'

import { connect } from 'react-redux'
import { removeIngredient } from '../actions/ingredientsActions'

import './css/IngredientsList.css'

class IngredientsList extends Component {
  constructor(props) {
    super(props)

    this.onRemoveIngredient = this.onRemoveIngredient.bind(this)
  }

  /**
   * Removes an ingredient from the Redux store.
   * @param {*} id 
   */
  onRemoveIngredient(id) {
    this.props.onRemoveIngredient(id)
  }

  render() {
    const ingredientsList = this.props.ingredients.map((item) =>
      <li key={item.id}>
        {item.ingredient}
        <button onClick={() => this.onRemoveIngredient(item.id)}>X</button>
      </li>
    )

    return (
      <ul className='ingredientsList'>
        {ingredientsList}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  recipes: state.recipes
})

const mapActionsToProps = {
  onRemoveIngredient: removeIngredient
}

export default connect(mapStateToProps, mapActionsToProps)(IngredientsList);
