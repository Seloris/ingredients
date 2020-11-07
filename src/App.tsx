import React from 'react';
import './App.scss';
import { RecipeForm } from './components/RecipeForm';

function App() {
  return (
    <div className="App">
      <header>Ingrédients App</header>
      <div className="AppContent">
        <RecipeForm></RecipeForm>
      </div>
    </div>
  );
}

export default App;
