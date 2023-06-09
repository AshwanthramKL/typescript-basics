import React from "react";
import "./App.css";
import { Country, Person } from "./component/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Ash"
        email="ash@gmail.com"
        age={12}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
        country={Country.India}
      />
    </div>
  );
}

export default App;
