import logo from './logo.svg';
import './App.css';
import Api from './component/Api';
import Search from './component/Search';
import { useState } from 'react';



function App() {

  const [query, setQuery] = useState();
  //console.log(query);
  const search = () => {
    console.log("button clicked")
    //console.log(query)
  }

  return (
    <div className="App">
    <div>
      <input type="text" onChange={(event) => setQuery(event.target.value)}/>
      <button onClick={search}>Search</button>
      {console.log(query)}
    </div>
      <Api/>
    </div>
  );
}

export default App;
