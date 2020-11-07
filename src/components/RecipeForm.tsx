import React, { Component } from 'react';
import IngredientForm from './IngredientForm';
import './RecipeForm.scss';

export class RecipeForm extends Component<any, RecipeFormState> {
  constructor(props) {
    super(props);

    this.state = { ingredients: [] };
  }

  addIngredient() {
    this.setState({ ingredients: [...this.state.ingredients, {}] });
  }

  render() {
    return (
      <form>
        <div className="ingredients">
          {this.state.ingredients.map((_val: any, i: number) => (
            <IngredientForm key={i}></IngredientForm>
          ))}
        </div>
        <button type="button" onClick={() => this.addIngredient()}>
          Ajouter un ingrédient
        </button>
      </form>
    );
  }
}

export interface RecipeFormState {
  ingredients: any[];
}
