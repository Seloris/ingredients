import React, { useCallback, useState } from 'react';
import './IngredientForm.scss';

export const IngredientForm = (props: { ingredient: Ingredient; update: any }) => {
  return (
    <div className="IngredientForm">
      <div className="form-control">
        <label>Ingrédient</label>
        <input
          value={props.ingredient.name}
          onChange={(ev) => props.update({ ...props.ingredient, name: ev.target.value })}
        ></input>
      </div>
      <div className="form-control">
        <label>Quantité</label>
        <input
          type="number"
          value={props.ingredient.quantity}
          onChange={(ev) => props.update({ ...props.ingredient, quantity: ev.target.value })}
        ></input>
      </div>
    </div>
  );
};

export interface Ingredient {
  name: string;
  quantity: number;
}
