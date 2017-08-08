import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createIngredient } from '../../actions/ingredients';

export class IngredientsInput extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', calories: '' };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCaloriesChange(event) {
    this.setState({ calories: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createIngredient(this.state);
  }

  render(){
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" onChange={(event) => this.handleNameChange(event)} placeholder="ingredient name" />
        <input type="text" onChange={(event) => this.handleCaloriesChange(event)} placeholder="calories" />
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createIngredient: createIngredient }, dispatch);
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)
