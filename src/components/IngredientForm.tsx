import React from 'react';
import './IngredientForm.scss';

function IngredientForm() {
  return (
    <div className="IngredientForm">
      <div className="form-control">
        <label>Ingrédient</label>
        <input type="text"></input>
      </div>
      <div className="form-control">
        <label>Quantité</label>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default IngredientForm;
