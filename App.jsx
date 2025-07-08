import React from 'react';
import BaristaForm from './BaristaForm';
const onNewDrink = () => {
    
};

const onCheckAnswer = () => {
  
};
export function App(props) {
  return (
    <div className='App'>
    <div className ='title-container'>
    <h1>On My Grind</h1>
    <p>So you think you can barista? Let's put that to the test...</p>
    </div>
      <BaristaForm />
      <h2>Hi, I'd like to order a:</h2>

<form className="container">
    </form>
    <button type= "button" className ="button submit" onClick={onCheckAnswer}>
    Check Answer
    </button>

    <button type ="new-drink-button" className="button submit" onClick={onNewDrink}>
    New Drink
    </button>

    </div>
  );
}

// Log to console
console.log('Hello console')
