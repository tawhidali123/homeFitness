import React from "react";

export default function CreateExercise() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="formContainer">
          <h1>Create an Exercise</h1>

          <h5>Name of Exercise</h5>
          <input type="text" />

          <h5>Category</h5>
          <select>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
          </select>

          <br />

          <button>Create Workout</button>
        </div>
      </div>
    </div>
  );
}
