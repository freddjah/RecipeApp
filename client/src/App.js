import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'

import IngredientForm from './components/IngredientForm'
import IngredientsList from './components/IngredientsList'
import RecipesList from './components/RecipesList'

class App extends Component {
  render() {
    return (
      <div>
        <header className='appHeader'>
          <h1>Recipe Search</h1>
        </header>

        <IngredientForm />
        <IngredientsList />
        <RecipesList />
      </div>
    );
  }
}

export default connect()(App)
