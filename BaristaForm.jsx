import React, { useState, useEffect } from 'react';
import RecipeChoices from './RecipeChoices';
import drinksJson from './drinks.json';

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: '',
    milk: '',
    syrup: '',
    blended: '',
  });

  const ingredients = {
    temperature: ['hot', 'lukewarm', 'cold'],
    syrup: ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    milk: ['cow', 'oat', 'goat', 'almond', 'none'],
    blended: ['yes', 'turbo', 'no'],
  };

  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});

  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    const drink = drinksJson.drinks[randomDrinkIndex];
    setCurrentDrink(drink.name);
    setTrueRecipe(drink.ingredients);
    setInputs({
      temperature: '',
      milk: '',
      syrup: '',
      blended: '',
    });
  };

  // 💡 Correct place to evaluate correctness and update state
  useEffect(() => {
    if (!trueRecipe.temp) return;

    setCheckedTemperature(inputs.temperature === trueRecipe.temp ? 'correct' : 'wrong');
    setCheckedSyrup(inputs.syrup === trueRecipe.syrup ? 'correct' : 'wrong');
    setCheckedMilk(inputs.milk === trueRecipe.milk ? 'correct' : 'wrong');
    setCheckedBlended(inputs.blended === trueRecipe.blended ? 'correct' : 'wrong');
  }, [inputs, trueRecipe]);

  return (
    <div>
      <button onClick={getNextDrink}>Generate Drink</button>
      {currentDrink && <h2>Make: {currentDrink}</h2>}

      <div className="mini-container">
        <h3>Temperature</h3>
        <div className="answer-space" id={correct_temp}>
          {inputs.temperature}
        </div>
        <RecipeChoices
          handleChange={e =>
            setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
          }
          label="temperature"
          choices={ingredients.temperature}
          checked={inputs.temperature}
        />
      </div>

      <h3>Milk</h3>
      <div className="answer-space" id={correct_milk}>{inputs.milk}</div>
      <RecipeChoices
        handleChange={e =>
          setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
        label="milk"
        choices={ingredients.milk}
        checked={inputs.milk}
      />

      <h3>Syrup</h3>
      <div className="answer-space" id={correct_syrup}>{inputs.syrup}</div>
      <RecipeChoices
        handleChange={e =>
          setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
        label="syrup"
        choices={ingredients.syrup}
        checked={inputs.syrup}
      />

      <h3>Blended</h3>
      <div className="answer-space" id={correct_blended}>{inputs.blended}</div>
      <RecipeChoices
        handleChange={e =>
          setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
        label="blended"
        choices={ingredients.blended}
        checked={inputs.blended}
      />
    </div>
  );
};

export default BaristaForm;
