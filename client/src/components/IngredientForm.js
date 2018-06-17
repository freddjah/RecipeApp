import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addIngredient } from '../actions/ingredientsActions'

import './css/IngredientForm.css'

class IngredientForm extends Component {
  constructor(props) {
    super(props)

    this.onAddIngredient = this.onAddIngredient.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      inputValue: ''
    }
  }

  /**
   * Adds an ingredient to the Redux state.
   * @param {*} event 
   */
  onAddIngredient(event) {
    event.preventDefault()

    this.props.onAddIngredient(this.state.inputValue)
    
    this.setState({
      inputValue: ''
    })
  }

  /**
   * Updates the state of the component to hold the latest value in the form input.
   * @param {*} event 
   */
  onChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div className='ingredientForm'>
        <form onSubmit={this.onAddIngredient}>
          <input type='text' placeholder='Enter an ingredient...' value={this.state.inputValue} onChange={this.onChange}/>
          <button type='submit' disabled={!this.state.inputValue}>Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})

const mapActionsToProps = {
  onAddIngredient: addIngredient
}

export default connect(mapStateToProps, mapActionsToProps)(IngredientForm)
