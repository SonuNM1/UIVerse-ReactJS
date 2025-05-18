import "./App.css";
import React, { useState } from "react";

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault() ; 

    if(weight === 0 || height === 0) {
      alert("Please enter a valid weight and height")
      return ; 
    }
    else{
      var calculatedBmi = (weight / (height * height) * 703).toFixed(2);
      setBmi(calculatedBmi);
    }

    if(calculatedBmi < 25){
      setMessage('You are underweight');
    }
    else if(calculatedBmi >= 25 && calculatedBmi < 30){
      setMessage('You are normal');
    }
    else if(calculatedBmi >= 30 && calculatedBmi < 35){
      setMessage('You are overweight');
    }
    else{
      setMessage('You are obese');
    }
  }

  const reload = () => {
    window.location.reload(); 
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>

        <form onSubmit={calculateBmi} >
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center" >
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
