import "./App.css";
//import MOCK_DATA as an array
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search user"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val) => {
        return (
          <div className="user" key="key">
            <div className = 'items'>
              <img src={val.image} alt="dummy" /> 
              {val.first_name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
