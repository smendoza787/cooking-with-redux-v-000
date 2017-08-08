import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Recipes extends Component {
  render(){
    let recipes = this.props.recipes.map(function(recipe) {
      return <li>{recipe.name}</li>
    })

    return(
        <div>
          <ul>
            {recipes}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes };
}

export const ConnectedRecipes = connect(mapStateToProps)(Recipes)
