import { combineReducers } from 'redux';
import ingredients from './ingredients';
import recipeForm from './recipeForm';
import recipes from './recipes';

export default combineReducers({
  ingredients,
  recipeForm,
  recipes
});
