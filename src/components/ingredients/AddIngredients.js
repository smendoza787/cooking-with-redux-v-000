import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedAddIngredient } from './AddIngredient';
import { unselectedIngredients, findIngredientById } from '../../reducers/ingredients';

export class AddIngredients extends Component {
  render(){
    let ingredients = this.props.selectedIngredients && this.props.selectedIngredients.map(function(ingredient) {
      return <li>{ingredient.name}</li>;
    });

    let addIngredients = this.props.unselectedIngredients && this.props.unselectedIngredients.map(function(ingredient){
      return <ConnectedAddIngredient {...ingredient} />
    });

    return(
      <div>
        <div>
          Ingredients
          {ingredients}
        </div>
        <div>
          Add More Ingredients
          {addIngredients}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let selectedIngredients = state.recipeForm.ingredientIds.map(function(ingredientId) {
    return findIngredientById(ingredientId, state.ingredients);
  });
  return {
    ingredients: state.ingredients || [],
    selectedIngredients: selectedIngredients || [],
    unselectedIngredients: unselectedIngredients(state.ingredients, state.recipeForm.ingredientIds) || []
  };
};

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients);
