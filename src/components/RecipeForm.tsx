import React, { useCallback, useState } from 'react';
import { Ingredient, IngredientForm } from './IngredientForm';
import './RecipeForm.scss';

function RecipeForm() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const updateIngredient = useCallback(
    (i: number, ingredient: Ingredient) => {
      ingredients[i] = ingredient;
      setIngredients([...ingredients.map((x) => ({ ...x }))]);
    },
    [ingredients]
  );

  return (
    <div>
      <form>
        <div className="ingredients">
          {ingredients.map((ingr: Ingredient, i: number) => (
            <IngredientForm update={(newVal) => updateIngredient(i, newVal)} key={i} ingredient={ingr}></IngredientForm>
          ))}
        </div>
        <button type="button" onClick={() => setIngredients([...ingredients, { name: '', quantity: 1 }])}>
          Ajouter un ingrédient
        </button>
        <button type="submit">Valider</button>
      </form>
      <ul>
        {ingredients.map((x, i) => (
          <li key={i}>
            {x.name} {x.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeForm;
